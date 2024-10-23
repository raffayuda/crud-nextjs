import Link from "next/link"
import {IoAddSharp} from "react-icons/io5"



export const CreatedButton = () => {
    return (
        <Link href="/contacts/create">
            <button className="bg-blue-500 hover:bg-blue-700 text-white inline-flex items-center space-x-1 px-5 py-[9px] rounded-sm text-sm">
                <IoAddSharp size={20}/> 
                Create
            </button>
        </Link>

    )
}