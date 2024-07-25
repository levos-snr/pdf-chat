'use client'
import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function Placeholder(){
        const router = useRouter();
        const handleClick = () => {
                //check if user is free tier and if they over the file limit,push to upgrade page
                router.push('/dashboard/upload')

        }        
            
        return(
                <Button  onClick={handleClick}className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
            <PlusCircleIcon className="h-16 w-16" />
            <p>Add a Document </p>
            </Button>
        )
}

export default Placeholder;