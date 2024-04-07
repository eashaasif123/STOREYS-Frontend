import * as React from "react";

export default function Header1() {
    return (
        <div className="flex gap-5 justify-between max-md:flex-wrap px-10 mt-2">
            <div className="flex gap-5 justify-between px-5 my-auto whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <img className="h-[40px] w-auto" src='/assets/logo.png' alt=''/>
            </div>
            <div className="flex gap-5 justify-between px-5 text-xl font-medium leading-8">
                <a href="/login" className="my-auto text-zinc-800">Login</a>
                <a href="/register" className="justify-center px-6 py-2 text-center text-white bg-indigo-400 rounded max-md:px-5">
                    Register
                </a>
            </div>
        </div>
    );
}

