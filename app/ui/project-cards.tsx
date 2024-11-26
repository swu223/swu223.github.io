import Link from "next/link";

const projectItems = [
  {
    name: "project1",
    date: "June 2024",
    languages: [
      "Javascript", 
      "Node.js"
    ],
    demo_link: "https://google.com",
    github_link: "https://github.com/swu223",
    description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravi"
  },
  {
    name: "project2",
    date: "Oct 2024",
    languages: [
      "Javascript", 
      "Node.js"
    ],
    demo_link: "https://google.com",
    github_link: "https://github.com/swu223",
    description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravi"
  },
  {
    name: "project3",
    date: "Oct 2024",
    languages: [
      "Javascript", 
      "Node.js"
    ],
    demo_link: "https://google.com",
    github_link: "https://github.com/swu223",
    description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravi"
  },
  {
    name: "project4",
    date: "Oct 2024",
    languages: [
      "Javascript", 
      "Node.js"
    ],
    demo_link: "https://google.com",
    github_link: "https://github.com/swu223",
    description: "Pellentesque a erat erat. In ornare facilisis nulla. Praesent varius scelerisque felis nec malesuada. Donec malesuada dui vitae ante consectetur blandit. Sed scelerisque malesuada diam ac sagittis. Donec ultricies interdum commodo. Duis sed odio nec libero convallis eleifend id eget lorem. rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravi"
  },
  {
    name: "project5",
    date: "Oct 2024",
    languages: [
      "Javascript", 
      "Node.js"
    ],
    demo_link: "https://google.com",
    github_link: "https://github.com/swu223",
    description: "Pellentesque a erat erat. In ornare facilisis nulla. Praesent varius scelerisque felis nec malesuada. Donec malesuada dui vitae ante consectetur blandit. Sed scelerisque malesuada diam ac sagittis. Donec ultricies interdum commodo. Duis sed odio nec libero convallis eleifend id eget lorem. rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravi"
  },
  {
    name: "project6",
    date: "Oct 2024",
    languages: [
      "Javascript", 
      "Node.js"
    ],
    demo_link: "https://google.com",
    github_link: "https://github.com/swu223",
    description: "Pellentesque a erat erat. In ornare facilisis nulla. Praesent varius scelerisque felis nec malesuada. Donec malesuada dui vitae ante consectetur blandit. Sed scelerisque malesuada diam ac sagittis. Donec ultricies interdum commodo. Duis sed odio nec libero convallis eleifend id eget lorem. rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravi"
  },
]

export default function ProjectCards() {
  return (
    <>
      {projectItems.map((project) => {
        return (
          <div 
            key={project.name}
            className="flex flex-col w-42 h-58 justify-items-start p-4 gap-1 border-2 border-slate-200 rounded-md">

            <h2>{project.name}</h2>

            <div>image here</div>

            <div className="flex flex-row gap-2">
              {project.languages.map((language) =>{
                return (
                <div
                  key={language}
                  className="rounded-full bg-slate-700 px-2"
                >
                  {language}
                </div>)
              })}
            </div>

            <p className="h-36 overflow-auto">
              {project.description}
            </p>

            <Link href={project.demo_link} className="flex">Demo</Link>

            <Link href={project.github_link} className="flex">Github</Link>
          </div>
        );
      })}
    </>
  );
}