'use client'

import { createPost, getPostById, updatePost } from '@/actions/postActions'
import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Post } from '@/types/postType'

// Function to generate a slug from a title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export default function PostFormPage() {
  const { isLoaded, user } = useUser()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  
  const searchParams = useSearchParams()
  const postId = searchParams.get('id')
  const isEditMode = Boolean(postId)
  const router = useRouter()

  // Fetch post data if editing
  useEffect(() => {
    if (postId) {
      setIsLoading(true)
      getPostById(Number(postId))
        .then((data) => {
          if (data) {
            setPost(data)
            setTitle(data.title || '')
            setSlug(data.slug || generateSlug(data.title || ''))
          } else {
            setError('Post not found')
          }
        })
        .catch(err => {
          setError('Failed to load post')
          console.error(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [postId])

  // Generate slug when title changes
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  // Handle manual slug changes
  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlug(e.target.value);
  };

  async function handleSubmit(formData: FormData) {
    if (!user) {
      setError('You must be logged in to manage posts')
      return
    }

    setIsSubmitting(true)
    setError(null)
    
    try {
      // Add slug to form data
      formData.set('slug', slug);
      
      if (isEditMode && postId) {
        // Update existing post
        await updatePost(Number(postId), formData)
      } else {
        // Create new post
        formData.append('authorEmail', user.emailAddresses[0].emailAddress)
        await createPost(formData)
      }
      
      setSuccess(true)
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/admin')
      }, 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isLoaded || isLoading) {
    return <div className="max-w-2xl mx-auto p-4">Loading...</div>
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          You must be logged in to manage posts
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? 'Edit Post' : 'Create New Post'}
      </h1>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {isEditMode ? 'Post updated successfully!' : 'Post created successfully!'}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form id="post-form" action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium mb-1">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={slug}
            onChange={handleSlugChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            URL-friendly version of the title. Auto-generated, but you can edit it.
          </p>
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows={10}
            defaultValue={post?.content || ''}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="published"
            name="published"
            defaultChecked={post?.published || false}
            className="mr-2"
          />
          <label htmlFor="published" className="text-sm">
            Publish immediately
          </label>
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (isEditMode ? 'Updating...' : 'Creating...') 
              : (isEditMode ? 'Update Post' : 'Create Post')}
          </button>
          
          <button
            type="button"
            onClick={() => router.push('/admin')}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
