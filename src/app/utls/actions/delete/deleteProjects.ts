"use server"

import { redirect } from "next/navigation";


const deleteProject = async (id: string) => {   
    
    const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        redirect('/dashboard/projects');
    }

};

export default deleteProject