"use client";
import { TBlog } from '@/app/types/Types';
import deleteBlogs from '@/app/utls/actions/delete/deleteBlogs';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteBlogs(blog._id);
  };

  const handleUpdateId = () => {
    router.push(`/dashboard/blog-updates/${blog._id}`);
  };

  const handleBlogDetails = () => {
    router.push(`/blog/${blog._id}`);
  };

  return (
    <div className="bg-gray-900 shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-lg flex flex-col">
      <div className="relative w-full aspect-[16/9] cursor-pointer" onClick={handleBlogDetails}>
        <Image
          width={500}
          height={300}
          src={blog.blogImages}
          alt="Project Cover"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-200">{blog.title}</h3>
        <p className="mt-2 text-gray-300 text-sm">{blog.description}</p>

        {/* Keep buttons at the bottom */}
        <div className="flex justify-between items-center mt-auto pt-4">
          <button
            onClick={handleUpdateId}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
