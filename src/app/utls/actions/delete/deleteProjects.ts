"use server"


const deleteProject = async (id: string) => {   
    
    const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        throw new Error("Failed to delete projects");
    }

};

export default deleteProject