"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react";
import {useRouter} from "next/navigation"
import MyForm from "@/components/Form";

export default function Create(){

    const router=useRouter();
    const {data:session}=useSession();

    
    return(
        <>
        <MyForm />
        </>
    )
}