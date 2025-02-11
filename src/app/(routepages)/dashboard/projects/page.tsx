
import { ApiResponse } from "@/app/types/Types";
import ProjectCard from "../(components)/ProjectCard";


const Projects = async () => {

  const res = await fetch("https://nextportfolioserver.vercel.app/api/projects", {
    cache: "no-store",
  });

  const projects: ApiResponse = await res.json();


  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <h1>Add Project</h1>
      </div>
      <div className="grid grid-cols-4 justify-center items-center gap-10">
        {projects?.data?.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects