import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus } from "lucide-react";

function Header() {
  return (
   <div className="flex justify-between bg-white shadow-sm p-5 border-b">
     <Link href="/dashboard" className="text-2xl" >
     PDF  <span className="text-indigo-600">Chatbot</span>
     </Link>
     
     <SignedIn>
     <div className="flex items-center space-x-2">
     <Button asChild variant='link' className="hidden md:flex">
     <Link
     href="/dashboard/upgrade" >Pricing
     </Link>
     </Button>
     
     <Button asChild variant='outline' className="">
     <Link
     href="/dashboard/upgrade" >My Document
     </Link>
     </Button>
     
     <Button asChild variant='outline' className="">
     <Link
     href="/dashboard/upload" >
        <FilePlus size={20} className="mr-2 text-indigo-600" /> Upload
     </Link>
     </Button>
     
     <UserButton />
     </div>
     
     </SignedIn>
  </div>
  );
}

export default Header;