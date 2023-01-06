import React from "react";

export default function NavBar(){
    return(
        <>
        <div className=" bg-altbackground h-[10vh] flex items-center border-b-2 border-[white]">
            <div className="flex flex-intial h-[5] items-end">
             <h1 className="text-primarytext text-xl font-bold flex-initial ml-10" >YOULETTER</h1>
             <h2 className="text-primary text-s font-bold flex-initial ml-1" >beta</h2>
            </div>
        </div>
        </>
    );
}