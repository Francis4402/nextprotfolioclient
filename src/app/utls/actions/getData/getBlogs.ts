"use server"



const getBlogs = async () => {
    
    
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
        cache: "no-store",
    });

    const blogsInfo = await res.json();


    return blogsInfo;
};

export default getBlogs