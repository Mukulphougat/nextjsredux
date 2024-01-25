'use client'
import Link from "next/link";

export default function NavBar(){
    return(
        <div className={"h-12 w-full flex flex-row"}>
            <Link href={"/"} className={"text-white my-2 font-mono text-xl w-12 mx-6 underline"}>HOME</Link>
            <Link href={"/login"} className={"text-white my-2 font-mono text-xl w-12 underline"}>LOGIN</Link>
        </div>
    )
}