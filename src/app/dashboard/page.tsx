import { getServerSession } from "next-auth"
import { authOptions } from "../utls/authOptions"
import { BlogsDataResponse, MessagesDataResponse, ProjectDataResponse } from "../types/Types";
import getBlogs from "../utls/actions/getData/getBlogs";
import getProjects from "../utls/actions/getData/getProjects";
import getMessages from "../utls/actions/getData/getMessages";



const Dashboard = async () => {

  const session = await getServerSession(authOptions);

  const blogs: BlogsDataResponse = await getBlogs();

  const projects: ProjectDataResponse = await getProjects();

  const messages: MessagesDataResponse = await getMessages();


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {session?.user?.name}!</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Projects Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Projects</h2>
          <p className="text-4xl font-bold text-blue-600">{projects?.data.length || 0}</p>
          <p className="text-sm text-gray-500">Total projects created</p>
        </div>

        {/* Blogs Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Blogs</h2>
          <p className="text-4xl font-bold text-green-600">{blogs?.data.length || 0}</p>
          <p className="text-sm text-gray-500">Total blogs published</p>
        </div>

        {/* Messages Card */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
          <p className="text-4xl font-bold text-purple-600">{messages?.data.length || 0}</p>
          <p className="text-sm text-gray-500">Total messages received</p>
        </div>
      </div>

      {/* Recent Messages Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Messages</h2>
        <div className="space-y-4">
          
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Messages</h2>
        <div className="space-y-4">
          {messages.data
            ?.filter((msg) => {
              const messageDate = new Date(msg.createdAt);
              const now = new Date();
              const timeDifference = now.getTime() - messageDate.getTime();
              const hoursDifference = timeDifference / (1000 * 60 * 60);

              return hoursDifference <= 24;
            })
              .map((msg) => (
                <div key={msg.name} className="border-b pb-4">
                  <p className="text-sm text-gray-500">Your Email: {msg.email}</p>
                  <p className="text-gray-800">{msg.message}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    ({Math.floor((new Date().getTime() - new Date(msg.createdAt).getTime()) / (1000 * 60 * 60))} hours ago)
                  </p>
                </div>
              ))}
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard