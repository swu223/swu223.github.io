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
            <p>
              {/* To do: make the resume populate via a function and a text document so that the formatting updates accordingly...? */}
              rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravida nulla lacus. Vivamus eleifend augue luctus risus luctus, ut vehicula eros malesuada. Morbi a porta nunc, vitae tincidunt quam. Proin congue laoreet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

              Pellentesque a erat erat. In ornare facilisis nulla. Praesent varius scelerisque felis nec malesuada. Donec malesuada dui vitae ante consectetur blandit. Sed scelerisque malesuada diam ac sagittis. Donec ultricies interdum commodo. Duis sed odio nec libero convallis eleifend id eget lorem. Nam pulvinar scelerisque felis, at placerat turpis imperdiet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis dignissim sollicitudin. Aliquam et massa vel orci faucibus ultrices. Nulla fringilla sed felis eget iaculis. Phasellus pretium malesuada pharetra. Nam cursus mauris nec neque accumsan, non sagittis libero euismod.

              Sed id metus quis nulla gravida laoreet vitae eget dui. Curabitur eget nunc orci. Aenean facilisis hendrerit nisl, eget condimentum diam venenatis nec. Nulla facilisi. Sed pretium enim nunc, eget sagittis orci accumsan ut. Quisque feugiat quam et nisi gravida faucibus a vel tellus. Sed vitae cursus mauris, sit amet varius arcu. Cras quis enim eu dolor facilisis aliquam mollis nec neque. Praesent convallis justo mauris, pulvinar placerat ipsum aliquet ac. Mauris sodales laoreet semper. Fusce sed orci odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam egestas euismod convallis.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}