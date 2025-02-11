import createProject from '@/app/utls/actions/createProjects';
import Form from 'next/form'



const CreateProject = () => {


  return (
    <div className="flex flex-1 flex-col justify-center lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          action={createProject}
          className="flex gap-5 flex-1 flex-col justify-center px-6 lg:px-8"
        >

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-400">
              Title
            </label>
            <input
              id="title"
              type="text"
              name='title'
              required
              placeholder="Title"
              className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base border-2 outline-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            />
          </div>


          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-400">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              name='description'
              required
              placeholder="Description"
              className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base border-2 outline-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            />
          </div>


          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-400">
              Tags
            </label>
            <input
              id="tags"
              type="text"
              name='tags'
              required
              placeholder="Tags"
              className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base border-2 outline-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            />
          </div>

 
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-400">
              Project Image
            </label>
            <input
              id="projImage"
              type="file"
              name='projectImages'
              placeholder="ProjectImages"
              className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base border-2 outline-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 sm:text-sm"
            />
          </div>


          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CreateProject