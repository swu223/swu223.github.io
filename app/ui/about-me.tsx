export default function AboutMe() {
  return (
    <div className="flex flex-col px-8"> 
      
      <h1 id="about-me " className="text-xl py-4"> Sarah W Su </h1>
      
      <div className="row-span-4 grid grid-cols-3 grid-rows-3">
        <div id="profile-pic" className="">
          Photo
        </div>
        <div id="Summary" className="col-span-2">
          <div> Summary </div>
          <p> 
            alsdkja;sle;asjdkas;d
          </p>
        </div>
        <div id="resume" className="h-72 overflow-auto col-start-2 col-span-2 row-span-2">
          <h2> Resume </h2> 
          <p>
            {/* To do: make the resume populate via a function and a text document so that the formatting updates accordingly...? */}
            rem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget mauris sit amet arcu scelerisque blandit eget id leo. Quisque vitae gravida nulla, non commodo risus. Nullam lobortis arcu ac massa sollicitudin vulputate. Proin id ipsum tempor, cursus erat tempus, pulvinar lacus. Vestibulum gravida nulla lacus. Vivamus eleifend augue luctus risus luctus, ut vehicula eros malesuada. Morbi a porta nunc, vitae tincidunt quam. Proin congue laoreet viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

            Pellentesque a erat erat. In ornare facilisis nulla. Praesent varius scelerisque felis nec malesuada. Donec malesuada dui vitae ante consectetur blandit. Sed scelerisque malesuada diam ac sagittis. Donec ultricies interdum commodo. Duis sed odio nec libero convallis eleifend id eget lorem. Nam pulvinar scelerisque felis, at placerat turpis imperdiet nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis dignissim sollicitudin. Aliquam et massa vel orci faucibus ultrices. Nulla fringilla sed felis eget iaculis. Phasellus pretium malesuada pharetra. Nam cursus mauris nec neque accumsan, non sagittis libero euismod.

            Sed id metus quis nulla gravida laoreet vitae eget dui. Curabitur eget nunc orci. Aenean facilisis hendrerit nisl, eget condimentum diam venenatis nec. Nulla facilisi. Sed pretium enim nunc, eget sagittis orci accumsan ut. Quisque feugiat quam et nisi gravida faucibus a vel tellus. Sed vitae cursus mauris, sit amet varius arcu. Cras quis enim eu dolor facilisis aliquam mollis nec neque. Praesent convallis justo mauris, pulvinar placerat ipsum aliquet ac. Mauris sodales laoreet semper. Fusce sed orci odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam egestas euismod convallis.
          </p>
        </div>
      </div>
      
    </div>
  )
}