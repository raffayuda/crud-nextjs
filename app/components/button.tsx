import Link from "next/link"
import {IoAddSharp, IoPencil, IoTrashOutline} from "react-icons/io5"



export const CreatedButton = () => {
    return (
        <Link href="/contacts/create" className="bg-blue-500 hover:bg-blue-700 text-white inline-flex items-center space-x-1 px-5 py-[9px] rounded-sm text-sm"> 
                <IoAddSharp size={20}/> 
                Create
        </Link>

    )
}

export const EditButton = () => {
    return (
        <Link href="/contacts/create" className="rounded-sm border p-1 hover:bg-gray-100">    
                <IoPencil size={20}/> 
        </Link>

    )
}

export const DeleteButton = () => {
    return (
            <button className="rounded-sm border p-1 hover:bg-gray-100">
                <IoTrashOutline size={20}/> 
            </button>
    )
}