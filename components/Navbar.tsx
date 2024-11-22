"use client";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Navbar(){
  const router =useRouter();

  const { data:session } = useSession();
  const name=session?.user?.name
  
    return(
        <div className="flex justify-between bg-base-100 px-5 ">
  <div className="flex-1">
    <a 
    href="/" 
    className="btn btn-ghost text-xl">
      {!session?"USER":
        name
  }
      </a>
  </div>

  <div className="flex   gap-2">

    <div className="flex ">
    <button
    onClick={()=>{router.push("/create")}}
     type="button"
     className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create Post</button>
    
    {!session?
     <button 
     onClick={()=>{signIn()}}
     type="button"
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign in</button>
      : <button
      onClick={()=>{signOut()}} 
      type="button"
       className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign out</button>
    }
   
    </div>

      
        <div className="w-10 ">
          <img
          className="rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      
    

  </div>

</div>
    )
}