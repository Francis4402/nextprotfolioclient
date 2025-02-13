"use server"


const deleteBlogs = async (id: string) => {   
    
    const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error("Failed to delete blogs");
    }

};

export default deleteBlogs