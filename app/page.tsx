import GameList from "@/components/GameList";
import Hero from "@/components/Hero";
import Post from "@/components/Post";
import Search from "@/components/Search";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero />
   <Search />
   <GameList />
   <Post />
   </>
  );
}
