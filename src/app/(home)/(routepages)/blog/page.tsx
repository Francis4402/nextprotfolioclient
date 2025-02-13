import { BlogsDataResponse } from '@/app/types/Types';
import getBlogs from '@/app/utls/actions/getData/getBlogs';
import type { Metadata } from 'next'
import BlogCardhome from '../PojectRouteCards/BlogCard';


export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blogs'
}

const Blogs = async () => {


  const blogs: BlogsDataResponse = await getBlogs();

  return (
    <div>
        <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/bgimages.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="text-white lg:h-[400px] h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
              <h1  className="md:text-4xl text-2xl font-serif">My Blogs</h1>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto justify-center items-center lg:px-0 px-5">
            <div className="my-20">
              <p className="font-serif text-gray-500">Total Project : {blogs?.data?.length}</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-20">
                {
                  blogs?.data?.length > 0 ? (
                    blogs?.data?.map(blog => (
                      <BlogCardhome key={blog._id} blog={blog} />
                    ))
                  ) : <div>No Projects Added Yet</div>
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs