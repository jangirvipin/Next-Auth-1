

import prisma from "@/lib/db"
import Card from "./Display";
import Modal from "./PostModal";

declare global {
    interface Window {
        my_modal_1: {
            showModal: () => void;
        };
    }
}

async function Find(){
    await prisma.$connect();
    const post= await  prisma.post.findMany({
    })  
    return post;
}

export default async function Post(){
    const post = await Find();

    return (
        <>
            <div>
               
            <div className="max-w-4xl mt-12 mx-auto grid grid-cols-2">

            {post.map((post,index) => (
                <div >
                       <Card post={post} key={index}/>
                    
                </div>
            ))}

            </div>
            </div>
          
      
      
        
        
        </>
    )
}