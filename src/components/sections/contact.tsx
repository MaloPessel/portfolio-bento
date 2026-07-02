import { Mail, Phone } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const links = [
  {
    href: "tel:+33769409793",
    label: "07 69 40 97 93",
    icon: Phone,
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/malo-pessel-577474227",
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: "https://github.com/MaloPessel",
    label: "GitHub",
    icon: GithubIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <Card className="a-contact justify-center bg-ink-blue text-white ring-0 [--card-spacing:--spacing(6)]">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5 px-(--card-spacing)">
        <div className="flex flex-col gap-1.5">
          <h2 className="flex items-center gap-2.5 text-2xl font-extrabold tracking-tight">
            <span
              aria-hidden="true"
              className="size-2.5 shrink-0 rounded-[3px] bg-brand"
            />
            Discutons data.
          </h2>
          <p className="max-w-[40ch] text-[0.95rem] text-white/75">
            Une question data, un projet, une opportunité&nbsp;? Je réponds
            vite.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button
            asChild
            variant="secondary"
            className="h-11 rounded-full px-5 text-sm font-bold"
          >
            <a href="mailto:malo.pessel@hotmail.com">
              <Mail data-icon="inline-start" />
              malo.pessel@hotmail.com
            </a>
          </Button>
          <ul className="flex flex-wrap gap-x-4.5 gap-y-1.5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 hover:text-white hover:underline hover:underline-offset-3"
                >
                  <link.icon className="size-4" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
