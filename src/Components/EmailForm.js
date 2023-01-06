import React from "react";
import { useState } from "react";

export default function EmailForm(){

    const [emailField, setEmailField] = useState("")

    const apiBodyData = {
        records: [
            {
                fields: {
                    Email: emailField
                }
            }
        ]
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        fetch('https://api.airtable.com/v0/appSHNyKIRPfxWh3r/tblu2aNtNlJRwZaqn',{
            method: "POST",
            mode: "cors",
            headers: {"Content-type": "application/json", "Authorization" : "Bearer pattVvD1XATs2iunz.b8940e6daeb84f34ac233725763b47799e76b9765cacb702b013c0c47192e0d9"},
            body: JSON.stringify(apiBodyData)
        })
        .then(() => {
            console.log("email sent")
        })


        setEmailField("")
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label> Enter Email:
                <input type = "text" required value = {emailField} onChange = {(e) => setEmailField(e.target.value)}  />
            </label>
            <input type="submit" />
        </form>
        </>
    )
}