"use client"

import { signIn } from "next-auth/react";
import Link from "next/link"
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/schema/userSchema";
import { useRouter } from "next/navigation";
import loginUser from "@/app/utls/actions/loginUser";
import toast from "react-hot-toast";
import { z } from "zod";



export type loginData = z.infer<typeof loginSchema>;

const Login = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<loginData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: loginData) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        toast.success("Login successful");
        localStorage.setItem('accessToken', res.accessToken)
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-400">
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder='email'
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-400">
                Password
              </label>
              <div className="mt-2">
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder='password'
                  className="block w-full rounded-md bg-gray-800 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register
            </Link>
          </p>

          <div className="flex justify-center items-center gap-5 my-5">
            <div className="bg-gray-800 hover:bg-gray-700 duration-200 rounded-full w-fit p-2" onClick={() => signIn("github", {
              callbackUrl: "http://localhost:3000"
            })}>
              <FaGithub size={40}/>
            </div>

            <div className="bg-gray-800 hover:bg-gray-700 duration-200 rounded-full w-fit p-2" onClick={() => signIn("google", {
              callbackUrl: "http://localhost:3000"
            })}>
              <FaGoogle size={40}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login