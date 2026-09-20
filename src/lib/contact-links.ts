import type { ElementType } from "react"
import { Phone } from "lucide-react"

import { GithubIcon, LinkedinIcon } from "@/components/icons"

export type ContactLink = {
  href: string
  label: string
  icon: ElementType
  external: boolean
}

export const contactLinks: ContactLink[] = [
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
