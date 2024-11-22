"use client"
import List from "@/public/List";
import { useEffect, useState } from "react";

export default function GameList(){
    const [games, setGame] = useState<{ id: number; name: string; image: string; }[]>([]);
    console.log(List);
    useEffect(()=>{
        setGame(List);
    },[]);

    return(
        <>
        <div className="flex items-center w-screen justify-center gap-x-8">
            {List.map((item) => (
                <div key={item.id} className="flex items-center justify-center  mt-8">
                    <div className="flex items-center justify-center ">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full hover:animate-bounce duration-150 transition-all"/>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h2>
                    </div>
                </div>
            ))}
        </div>
        </>
    )

}