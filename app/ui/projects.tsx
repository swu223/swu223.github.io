import ProjectCards from "./project-cards"

export default function Projects() {
  return (
    <div className="flex-col px-8 gap-5">

      <h1 id="about-me " className="text-xl py-4">Projects</h1>

      <div className="flex grid gap-4 grid-cols-3 grid-rows-2">
      <ProjectCards/>
      </div>

      <div className ="justify-self-end w-32 p-2 ">See more...</div>
    </div>
  )
}