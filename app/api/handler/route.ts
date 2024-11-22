import Post from "@/components/Post";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

type Post = {
    title: string;
    description: string;
    date: Date;
    location: string;
    image: string;
}

export async function POST(req:NextRequest) {
    
    await prisma.$connect();
    const { title, description:Description, date:createdAt, location}: Post = await req.json();
    console.log(title, Description, createdAt, location);

    const data = await prisma.post.create({
        data: {
            title,
            Description,
            createdAt,
            location,
            image:"https://media.gettyimages.com/id/478821794/photo/skyscrapers-of-los-angeles-skyline-architecture-urban-cityscape.jpg?s=612x612&w=gi&k=20&c=U6nJ6S2LdKNEurOJV2p86FMFBKoU5FAKSHgFgecYMwY=",
        }
    });

    return NextResponse.json({createdAt,location}, { status: 201 });
}