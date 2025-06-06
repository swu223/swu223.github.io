import Link from "next/link";

const projectItems = [
  {
    name: "Mock EMR app",
    date: "January 2025-Present",
    languages: [
      "Javascript", 
      "Node.js",
      "Express.js",
      "PostgreSQL"
    ],
    demo_link: "",
    github_link: "https://github.com/swu223/emr-mock-server",
    description: "A mock Electric Medical Records app for doctors, office staff and patients"
  },
  {
    name: "Nextjs dashboard",
    date: "Oct 2024",
    languages: [ 
      "Node.js",
      "Typescript",

    ],
    demo_link: "https://nextjs-dashboard-4tpa1pajk-sarah-w-sus-projects.vercel.app/",
    github_link: "https://github.com/swu223/nextjs-dashboard",
    description: "A basic dashboard utilizing the next.js framework and based on the tutorial from https://nextjs.org/learn."
  },
  {
    name: "Banking App",
    date: "May 2024",
    languages: [
      "Javascript", 
      "Node.js",
      "MongoDB",
      "AWS",
    ],
    demo_link: "https://www.youtube.com/watch?v=2l8vcHCzn5U&ab_channel=SarahWSu",
    github_link: "https://github.com/swu223/swu223.github.io/tree/main/MITxPro/Sarah-SuBankingApplication",
    description: "A mock banking application that allows a user to sign up, login, withdraw and deposit into their bank account"
  }
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

            <div className="flex flex-row flex-wrap gap-2">
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