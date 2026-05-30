"use client"
import GoogleLogo from "@/components/ui/icons/google-logo"
import { Quicksand } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";



const quicksand=Quicksand({
  weight:"400"
})
export default function SignIn(){
  const router=useRouter()

    return(
        <div className={cn(quicksand.className," flex min-h-screen w-full items-center justify-center bg-gray-16 px-4 dark:bg-neutral-950 flex-col")}>
      <div className="w-full max-w-md  p-4 m-2 rounded-2xl shadow-xl/20 shadow-slate-50 ">
        <h1
          className="font-medium
    text-lg flex justify-center text-slate-50"
        >
          Sign in to your account
        </h1>
        <p className="text-sm m-4 text-gray-400 mb-8 flex justify-center">
          Welcome back! Please enter your details.
        </p>
        <form className="flex flex-col w-full">
          <label className="text-sm flex justify-start m-1 text-slate-50">Email</label>
          <input
            type="text"
            className="mb-4 rounded-lg px-4 py-3 bg-neutral-800 text-gray-500 w-full"
            placeholder="example@gmail.com"
          />
          <div className="flex justify-between text-sm">
            <div className="w-full">
              <div className="flex justify-between">
                <label htmlFor="" className="m-1 text-sm flex justify-start text-slate-50">
                  Password
                </label>
                <a href="" className="hover:text-gray-500 m-1 text-white">
                  Forget?
                </a>
              </div>
              <input
                type="password"
                className="mb-4  rounded-lg px-4 py-3 bg-neutral-800 text-gray-500 w-full"
                placeholder="........"
              />
            </div>
          </div>
          <button className="ring-2 ring-slate-300 bg-white rounded-lg text-black py-2 cursor-pointer mt-2">
            Sign In
          </button>
          <p className=" pt-4 flex justify-center text-gray-500"> Don&apos;t have account ?<span className="pl-1 text-white hover:text-gray-500 hover:underline cursor-pointer" onClick={() =>{
            router?.push("/signup")
          }}>Sign Up</span></p>

          <div className="flex items-center gap-2 py-4">
            <div className="flex-1 h-px bg-neutral-700" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-neutral-700" />
          </div>

          <div className="ring-2 ring-slate-300 flex justify-center items-center bg-white text-black rounded-lg cursor-pointer  ">
            <GoogleLogo ></GoogleLogo>
            <p className="p-2 text-lg">Continue with Google</p>
            
          </div>
        </form>
      </div>
    </div>
    )
}