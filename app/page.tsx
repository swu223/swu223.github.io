import AboutMe from "./ui/about-me";
import Projects from "./ui/projects";
import ProjectCard from "./ui/project-cards";

export default function Page() {
  return (
    <main className="flex-auto p-6 space-y-8">

    <AboutMe/>    
    <Projects/>

  </main>
  )
}