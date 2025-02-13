"use server"

import { redirect } from "next/navigation";


const deleteBlogs = async (id: string) => {   
    
    const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        redirect('/dashboard/blogs');
    }

};

export default deleteBlogs