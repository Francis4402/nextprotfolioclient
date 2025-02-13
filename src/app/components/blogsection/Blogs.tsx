import { BlogsDataResponse } from "../../types/Types";
import BlogCardSection from "./BlogCardSection";
import BlogTextSection from "./BlogTextSection";


const Blogs = async () => {
    const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
        cache: "no-store",
    });

        const blogs: BlogsDataResponse = await res.json();

        return (
        <div>
            {
                blogs.data?.length > 0 ? (
                    <div className="justify-center flex">
                        <div className="container">
                        <BlogTextSection/>

                        <div className="mt-20 flex flex-wrap gap-7 lg:justify-start justify-center cursor-default">
                            {blogs?.data?.map((blog, index) => (
                                <BlogCardSection key={blog._id} index={index} blog={blog} />
                            ))}
                        </div>
                        </div>
                    </div>
                ) : <div>No Blogs Posted Yet</div>
            }
        </div>
    );
}

export default Blogs