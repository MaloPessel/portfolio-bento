import { Mail } from "lucide-react"

import { BrandTitle } from "@/components/brand-title"
import { IconLink } from "@/components/icon-link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { contactLinks } from "@/lib/contact-links"

export function Contact() {
  return (
    <Card className="a-contact justify-center bg-ink-blue text-white ring-0 [--card-spacing:--spacing(6)]">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5 px-(--card-spacing)">
        <div className="flex flex-col gap-1.5">
          <BrandTitle className="text-2xl">Discutons data.</BrandTitle>
          <p className="max-w-[40ch] text-body text-white/75">
            Une question data, un projet, une opportunité&nbsp;? Je réponds
            vite.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Button asChild variant="secondary" size="cta">
            <a href="mailto:malo.pessel@hotmail.com">
              <Mail data-icon="inline-start" />
              malo.pessel@hotmail.com
            </a>
          </Button>
          <ul className="flex flex-wrap gap-x-4.5 gap-y-1.5">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <IconLink
                  href={link.href}
                  icon={link.icon}
                  external={link.external}
                  className="font-semibold text-white/75 hover:text-white"
                >
                  {link.label}
                </IconLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}
