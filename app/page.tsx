"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Eric Farr</span>
            <Badge variant="outline" className="ml-2">
              CTO
            </Badge>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
          {/*  
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
          */}
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/efarr" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ericfarr/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:eric@farrnet.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 pl-4 md:pl-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Eric Farr</h1>
                <p className="text-xl text-muted-foreground">Chief Technology Officer & Technology Leader</p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Creating enterprise value by building empowered product teams that deliver value through modern serverless and cloud native technologies powered by AI.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button>
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#experience">
                  <Button variant="outline">View my experience</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-background bg-muted">
                <Image
                  src="/HeadshotOnWhiteSmallSquare.png?height=350&width=350"
                  alt="Eric Farr"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I&apos;m a technology leader with over 30 years of experience in the software industry. I&apos;ve led engineering
              teams at startups and scale-ups, driving technical strategy, architecture decisions, and
              organizational growth. My passion lies in delivering value by building scalable systems, fostering engineering excellence, and
              mentoring the next generation of tech leaders.
            </p>
          </div>
        </section>

        <section id="experience" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Professional Experience</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              My career journey spans leadership roles across various technology companies.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Chief Technology Officer</CardTitle>
                    <CardDescription><a href="https://www.complianceandrisks.com" target="_blank" rel="noopener noreferrer">Compliance and Risks</a></CardDescription>
                  </div>
                  <Badge>2021 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Transformed the engineering organization into scalable, high-performing, empowered teams</li>
                  <li>Stabilized and modernized aging SaaS application</li>
                  <li>Migrated SaaS operations from proprietary data center to AWS</li>
                  <li>Harnessed serverless technologies and generative AI to deliver first release of new flagship product in 11 weeks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Chief Technology Officer</CardTitle>
                    <CardDescription><a href="https://revalizesoftware.com/autoquotes/" target="_blank" rel="noopener noreferrer">AutoQuotes/Revalize</a></CardDescription>
                  </div>
                  <Badge>2019 - 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Drove $300k of annualized savings migrating from SQL Server to cloud services</li>
                  <li>Revitalized under-performing Engineering team with agile processes and XP & DevOps engineering practices (eNPS scores moved from negative to 63)</li>
                  <li>Drove 30% of new revenue from new product development in 2020</li>
                  <li>Scaled capacity through on-demand talent with contractors and UpWork</li>
                  <li>Integrated acquisition of Axonom</li>
                  <li>Performed tech diligence and integrated development teams for first 10 Revalize acquisitions</li>
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-4">
              <Link href="https://www.linkedin.com/in/ericfarr/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  View full history on LinkedIn
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills & Expertise</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              My technical and leadership skills that drive successful outcomes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
            <Card>
              <CardHeader>
                <CardTitle>Technical Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Technical Strategy</Badge>
                  <Badge variant="secondary">Architecture Design</Badge>
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">Cloud Infrastructure</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                  <Badge variant="secondary">Security</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Team Building</Badge>
                  <Badge variant="secondary">Coaching</Badge>
                  <Badge variant="secondary">Talent Development</Badge>
                  <Badge variant="secondary">Agile Methodologies</Badge>
                  <Badge variant="secondary">Empowered Product Teams</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Generative AI</Badge>
                  <Badge variant="secondary">RAG</Badge>
                  <Badge variant="secondary">Agents</Badge>
                  <Badge variant="secondary">Prompt Engineering</Badge>
                  <Badge variant="secondary">Agentic Coding</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript/TypeScript</Badge>
                  <Badge variant="secondary">C#</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Assembler</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">SaaS</Badge>
                <Badge variant="secondary">Serverless</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">React/Next</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Databases & Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">Elasticsearch</Badge>
                  <Badge variant="secondary">Data Warehousing</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
{/*
        <section id="projects" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Key Projects & Achievements</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              Significant initiatives and accomplishments throughout my career.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Cloud Migration Initiative</CardTitle>
                <CardDescription>Acme Technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Led the migration of legacy systems to a cloud-native architecture, resulting in 40% cost reduction
                  and 99.99% uptime.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>Microservices</Badge>
                  <Badge>DevOps</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Analytics Platform</CardTitle>
                <CardDescription>Tech Innovators Inc.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Spearheaded the development of an AI-driven analytics platform that increased customer insights by 60%
                  and drove $2M in new revenue.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Machine Learning</Badge>
                  <Badge>Python</Badge>
                  <Badge>Big Data</Badge>
                  <Badge>React</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engineering Excellence Program</CardTitle>
                <CardDescription>Multiple Organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Established engineering excellence programs across multiple organizations, improving code quality,
                  reducing bugs by 50%, and accelerating delivery cycles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Agile</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Testing</Badge>
                  <Badge>Mentoring</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Global Platform Scaling</CardTitle>
                <CardDescription>Software Solutions Co.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Scaled core platform to support 10x user growth across 30+ countries while maintaining performance and
                  reliability standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Distributed Systems</Badge>
                  <Badge>Performance</Badge>
                  <Badge>Global Infrastructure</Badge>
                  <Badge>Scalability</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
*/}
        <section id="contact" className="container py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
              Interested in connecting? Reach out through any of these channels.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto">
                  <Mail className="h-10 w-10" />
                </div>
                <CardTitle className="mt-4">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">eric@farrnet.com</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="mailto:eric@farrnet.com">
                  <Button>Send Email</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto">
                  <Linkedin className="h-10 w-10" />
                </div>
                <CardTitle className="mt-4">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Connect professionally</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="https://www.linkedin.com/in/ericfarr/" target="_blank" rel="noopener noreferrer">
                  <Button>View Profile</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto">
                  <Github className="h-10 w-10" />
                </div>
                <CardTitle className="mt-4">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Check out my code</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="https://github.com/ericfarr" target="_blank" rel="noopener noreferrer">
                  <Button>View Projects</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Eric Farr. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ericfarr" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/ericfarr/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:contact@ericfarr.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}