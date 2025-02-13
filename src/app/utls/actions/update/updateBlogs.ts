"use server"

import { redirect } from "next/navigation";

const updateBlogs = async (data: FormData, id: string) => {

    const blogsData = Object.fromEntries(data.entries());

    console.log("Backend URL:", `${process.env.BACKEND_URL}/blogs/${id}`);
    
    const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(blogsData),
    });

    const blogsInfo = await res.json();

    if (res.ok) {
        redirect('/dashboard/blogs');
    }

    return blogsInfo;
};

export default updateBlogs;