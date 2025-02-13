import { ProjectDataResponse } from "../../types/Types";
import WorkSectionProjectCard from "./WorkSectionProjectCard";
import WorkSectionToptext from "./WorkSectionToptext";


const Works = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    cache: "no-store",
  });

  const projects: ProjectDataResponse = await res.json();

  return (
    <div className="justify-center flex mb-20">
      <div className="container">
        <WorkSectionToptext />

        <div className="mt-20 flex flex-wrap gap-7 lg:justify-start justify-center cursor-default">
          {projects.data?.map((project, index) => (
            <WorkSectionProjectCard key={project._id} index={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
