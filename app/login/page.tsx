'use client'
import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch, userAppSelector} from "@/redux/store";
import {z} from "zod";
import {onLogIn, onLogout} from "@/redux/features/auth-slice";

export default function LoginPage() {
    const [userName, setUserName] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>()
    const userNameVal = userAppSelector((state) => state.authReducer.value.userName)
    const loggedIn = userAppSelector((state) => state.authReducer.value.auth)
    const moderatorNot = userAppSelector((state) => state.authReducer.value.isModerator)
    const userNameType = z.string({
        required_error: "Name Is Required",
        invalid_type_error: "Name Must Be A String"
    }).length(5)

    function loginFun() {
        try {
            const parsedUserName = userNameType.parse(userName)
            dispatch(onLogIn(parsedUserName))
        } catch (err) {
            console.error(err)
        }
    }

    function logOutFun() {
        console.log(moderatorNot)
        setUserName((prev) => "")
        dispatch(onLogout())
    }

    function toggleValue(e: ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={"flex flex-col w-1/4 h-56 border-2 rounded-lg justify-center"}>
                <h1 className={"mx-auto text-xl font-mono"}>{loggedIn ? userNameVal : 'Login First!'}</h1>
                <input className={"font-mono h-8 pl-1 outline-0 rounded w-1/2 mx-auto my-2 text-black"} value={userName}
                       type={"text"} onChange={toggleValue}/>
                <button className={"font-mono h-8 rounded bg-blue-500 w-1/2 mx-auto my-2"} onClick={loginFun}>LogIn
                </button>
                <button className={"font-mono h-8 rounded bg-blue-500 w-1/2 mx-auto my-2"} onClick={logOutFun}>LogOut
                </button>
            </div>
        </main>
    )
}