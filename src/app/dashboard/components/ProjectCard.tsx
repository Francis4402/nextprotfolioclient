"use client"

import { TProject } from "@/app/types/Types"
import deleteProject from "@/app/utls/actions/delete/deleteProjects";
import Image from "next/image"
import { useRouter } from "next/navigation";


const ProjectCard = ({project}: {project: TProject}) => {
  
  const router = useRouter();

  const handleDelete = async () => {
    await deleteProject(project._id);
  }

  const handleUpdateId = () => {
    router.push(`/dashboard/project-updates/${project._id}`);
  }

  const handleProjectDetials = () => {
    router.push(`/projects/${project._id}`);
  }
  

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-lg">

      <div className="relative w-full aspect-[16/9] cursor-pointer" onClick={handleProjectDetials}>
        <Image
          width={500}
          height={300}
          src={project.projectImages}
          alt="Blog Cover"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="p-5">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <button onClick={() => window.open(project.links, "_blank")} className="text-sm bg-blue-400 px-4 rounded-lg text-white hover: scale-105 hover:bg-blue-600 duration-150">Link</button>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{project.description}</p>

        <p className="mt-2 text-gray-600 text-sm text-end">{project.tags}</p>
        

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleUpdateId}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update
          </button>
          
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard