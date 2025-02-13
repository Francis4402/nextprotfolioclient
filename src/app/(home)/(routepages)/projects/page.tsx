
import ProjectCard from "@/app/dashboard/components/ProjectCard";
import { ProjectDataResponse } from "@/app/types/Types";
import getProjects from "@/app/utls/actions/getData/getProjects";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My Projects'
}

const Projects = async () => {

  const projects: ProjectDataResponse = await getProjects();


  return (
      <div>
        <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/bgimages.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="text-white lg:h-[400px] h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
              <h1  className="md:text-4xl text-2xl font-serif">My Projects</h1>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto justify-center items-center lg:px-0 px-5">
            <div className="my-20">
              <p className="font-serif text-gray-500">Total Project : {projects?.data?.length}</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {
                  projects?.data?.length > 0 ? (
                    projects?.data?.map(project => (
                      <ProjectCard key={project._id} project={project} />
                    ))
                  ) : <div>No Projects Added Yet</div>
                }
            </div>
        </div>
    </div>
  )
}

export default Projects