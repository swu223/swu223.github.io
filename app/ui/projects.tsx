import ProjectCards from "./project-cards"

export default function Projects() {
  return (
    <div className="flex grid-cols-3 grid-rows-3 px-8 gap-5 grid-flow-row">
      <ProjectCards/>
    </div>
  )
}