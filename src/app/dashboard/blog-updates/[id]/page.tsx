

import { BlogsDataResponse } from '@/app/types/Types';
import updateBlogs from '@/app/utls/actions/update/updateBlogs';
import Form from 'next/form';

export async function generateMetadata({ params } : { params: Promise<{id: string}>}) {

  const {id} = await params;
  

  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    cache: "no-store",
  })

  const blog: BlogsDataResponse = await res.json();

  const data = blog.data[0];

  return {
    title: data.title,
    description: data.description,
  }
}


const BlogDetails = async ({params}: {params: Promise<{id: string}>}) => {

  const {id} = await params;

  const res = await fetch(`${process.env.BACKEND_URL}/blogs/${id}`, {
    cache: "no-store",
  })

  const blog: BlogsDataResponse = await res.json();

  const data = blog.data[0];

  const handleSubmit = async (formData: FormData) => {
    "use server";
    await updateBlogs(formData, data._id);
  };


  return (
    <div className="flex flex-1 flex-col justify-center items-center p-6">
      <div className="w-full max-w-lg bg-gray-900 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Blogs</h2>
        <Form action={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={data.title}
              required
              className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              name="description"
              defaultValue={data.description}
              required
              className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          
          <div>
            <label htmlFor="projectImages" className="block text-sm font-medium text-gray-700">
              Project Image URL
            </label>
            <input
              id="projectImages"
              type="text"
              name="projectImages"
              defaultValue={data.blogImages}
              className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 px-4 text-white font-semibold bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Project
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default BlogDetails