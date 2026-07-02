import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Interests } from "@/components/sections/interests"
import { JourneyCard } from "@/components/sections/journey"
import { education, experience } from "@/lib/journey-data"
import { Languages } from "@/components/sections/languages"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"

export function App() {
  return (
    <>
      <main className="bento mx-auto max-w-[1180px]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <JourneyCard
          className="a-education"
          title="Formation"
          steps={education}
        />
        <JourneyCard
          className="a-experience"
          title="Expérience"
          steps={experience}
        />
        <Languages />
        <Interests />
        <Contact />
      </main>
      <footer className="mx-auto mt-4.5 max-w-[1180px] px-1">
        <p className="text-xs text-muted-foreground">
          © 2026 Malo Pessel — fait main avec React, Tailwind CSS & shadcn/ui.
        </p>
      </footer>
    </>
  )
}

export default App
