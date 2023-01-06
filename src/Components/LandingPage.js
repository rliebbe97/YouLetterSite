import React from "react";
import EmailForm from "./EmailForm";
import NavBar from "./NavBar";

export default function LandingPage(){
    return(
        <>
        <NavBar></NavBar>
        <div className=" bg-altbackground h-[90vh] flex items-center">
            <EmailForm></EmailForm>
        </div>
        </>
    );
}