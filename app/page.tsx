import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { AccordionDemo } from "@/components/Accordion"
import { AlertDialogDemo } from "@/components/AlertDialogDemo"
import { CalendarDemo } from "@/components/CalendarDemo"
import { ToastDemo } from "@/components/ToastDemo"

export default function IndexPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>

        <div className="mt-5 grid gap-10">
          <h2 className="max-w-max scroll-m-20 rounded-md bg-muted px-[0.8rem] py-[0.2rem] text-3xl font-semibold tracking-tight transition-colors">
            Demo Components
          </h2>
          <div className="flex flex-wrap gap-10">
            <AccordionDemo />
            <AlertDialogDemo />
            <CalendarDemo />
            <ToastDemo />
          </div>
        </div>
      </section>
      <Toaster />
    </>
  )
}
