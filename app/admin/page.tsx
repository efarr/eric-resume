"use client"

import { useUser, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs"
import { getUserByEmail } from "@/actions/userActions"
import { useEffect, useState } from "react"
import { User } from "@/types/userType"
export default function AdminPage() {
  const { user } = useUser()
  const [userData, setUserData] = useState<User | null>(null)
  useEffect(() => {
    if (user) {
      getUserByEmail(user.emailAddresses[0].emailAddress).then((data) => {
        setUserData(data[0]) // Take first user from array
      })
    }
  }, [user])
  return <div>
    Admin Page
    <SignedOut>
      <SignInButton><button>Sign In</button></SignInButton>
    </SignedOut>
    <SignedIn>
         <p>Welcome {userData?.name}</p>
    </SignedIn>
    </div>;
}

