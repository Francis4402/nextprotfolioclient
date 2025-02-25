"use server"

import { redirect } from "next/navigation";


const createProject = async (data: FormData) => {

    const projectData = Object.fromEntries(data.entries());

    console.log("new blog", projectData);
    
    
    const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
    });


    const projectInfo = await res.json();

    if (res.ok) {
        redirect('/dashboard/projects');
    }

    return projectInfo;
};

export default createProject