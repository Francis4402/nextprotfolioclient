
import { ProjectDataResponse } from "@/app/types/Types";
import ProjectCard from "../components/ProjectCard";
import ProjectModel from "../AddModels/ProjectModel";
import getProjects from "@/app/utls/actions/getData/getProjects";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard-Projects',
    description: 'All Projects'
}


const Projects = async () => {


  const projects: ProjectDataResponse = await getProjects();


  return (
    <div className="container mx-auto flex flex-col gap-10 p-6 md:p-12">

        <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-bold text-white">All Prjects</h1>
        <ProjectModel />
        </div>


        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {
              projects?.data?.length > 0 ? projects?.data?.map(project => (
                <ProjectCard key={project._id} project={project} />
              )) : <p>No Projects Added Yet</p>
            }
        </div>
      </div>
  )
}

export default Projects