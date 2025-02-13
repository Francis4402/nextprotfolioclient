"use server"

import { redirect } from "next/navigation";

const updateProjects = async (data: FormData, id: string) => {

    const projectData = Object.fromEntries(data.entries());

    console.log("Backend URL:", `${process.env.BACKEND_URL}/projects/${id}`);
    
    const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
        method: "PUT",
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

export default updateProjects;