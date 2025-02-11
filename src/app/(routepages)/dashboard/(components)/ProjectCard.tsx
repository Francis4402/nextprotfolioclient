import { TProject } from "@/app/types/Types"
import Image from "next/image"


const ProjectCard = ({project}: {project: TProject}) => {
  return (
    <div className="flex flex-col border rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
        <Image src={project.projectImages} alt={project.title} width={300} height={300} />

        <div className="p-5 flex flex-col gap-4">
            <h3><strong>title: </strong>{project.title}</h3>
            <p className="text-gray-700 text-sm"><strong>description: </strong>{project.description}</p>
            <p className="text-gray-700 text-sm">{project.tags}</p>
        </div>
    </div>
  )
}

export default ProjectCard