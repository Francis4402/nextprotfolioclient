"use server"



const getProjects = async () => {
    
    
    const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
        cache: "no-store",
    });

    const projectInfo = await res.json();


    return projectInfo;
};

export default getProjects