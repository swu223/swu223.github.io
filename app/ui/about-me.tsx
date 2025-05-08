import { 
  AiFillGithub, 
  AiFillLinkedin,
  AiOutlineMail
} from "react-icons/ai";
import Link from "next/link";

const languages =[
  "Javascript",
  "Node.js",
  "Typescript",
  "Express.js",
  "React.js",
  "Next.js",
  "MongoDB",
  "AWS",
  "Python",
  "R Statistical Tool"
]

const contact= [
  {
    name: "email",
    icon: AiOutlineMail,
    link: "mailto:sarahwu223@gmail.com"
  },
  {
    name: "github",
    icon: AiFillGithub,
    link: "https://github.com/swu223"
  },
  {
    name: "linkedin",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sarah-w-su/"
  }
]

export default function AboutMe() {

  return (
    <div className="flex flex-col px-8"> 
      
      <h1 id="about-me " className="text-xl py-4"> Sarah W Su </h1>
      
      <div className="row-span-4 flex-col space-y-2 md:grid grid-cols-3 grid-rows-3 grid-flow-col">
        
        <div id="profile-pic" className="row-span-2">
          Photo
        </div>

        <div className="flex flex-col gap-2">
          <div id="languages-used" className="flex flex-wrap gap-2 justify-start content-start">
            {languages.map((language) =>{
              return (
              <div
                key={language}
                className="rounded-full bg-slate-700 px-2 h-6 text-center"
              >
                {language}
              </div>)
            })}
          </div>
          <div id="contact-info" className="flex flex-wrap gap-2">
            {contact.map((method) => {
              const Linkicon = method.icon
              return (
                <Link
                  key={method.name}
                  href={method.link}
                >
                <Linkicon className="size-8"/>
                </Link>
              )
            })}
          </div>
        </div>

        <div id="Summary" className="col-span-2 border-2 border-slate-200 rounded-md p-2">
          <div> Summary </div>
          <p> 
          Versatile professional with 8+ years of experience across education, healthcare, and non-profit field transitioning to software development. Strong communicator, problem solver, project manager and efficiency optimizer. Seeking to leverage diverse work experience, excellent analytical skills and passion for continuous learning in a junior software developer role. 
          </p>
        </div>

        
        <div id="resume" className="col-start-2 col-span-2 row-start-2 row-span-2 border-2 border-slate-200 rounded-md p-2">
          <h2> Resume </h2> 
          <div className="h-72 overflow-auto">
            <Link
              href="https://drive.google.com/file/d/1npx3TKhwjCGEud41PvyIU24wKkRJxV1u/view?usp=sharing"
            >
              Resume PDF
            </Link>
            <p>
              {/* To do: make the resume populate via a function and a text document so that the formatting updates accordingly...? */}
              Future feature: Resume items will show here as individual items
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}