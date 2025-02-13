"use server"

import { redirect } from "next/navigation";


const createBlogs = async (data: FormData) => {

    const blogsData = Object.fromEntries(data.entries());

    console.log("new blog", blogsData);
    
    
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
        method: "POST",
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

export default createBlogs