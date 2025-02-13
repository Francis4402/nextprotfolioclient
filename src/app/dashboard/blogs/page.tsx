import { BlogsDataResponse } from '@/app/types/Types';
import BlogCard from '../components/BlogCard';
import BlogModel from '../AddModels/BlogModel';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Dashboard-Blogs',
    description: 'Blogs'
}
  

const Blogs = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
        cache: "no-store",
    });

    const blogs: BlogsDataResponse = await res.json();


    return (
        <div className="container mx-auto flex flex-col gap-10 p-6 md:p-12">

            <div className="flex justify-between items-center border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
                <BlogModel />
            </div>
    

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {
                    blogs?.data?.length > 0 ? blogs?.data?.map(blog => (
                        <BlogCard key={blog.title} blog={blog} />
                    )) : <p>No Blogs Posted Yet</p>
                }
            </div>
        </div>
    )
}

export default Blogs
