"use server"

import { redirect } from "next/navigation";

const createMessages = async (data: FormData) => {

    const messageData = Object.fromEntries(data.entries());

    console.log(messageData);
   
    
    const res = await fetch(`${process.env.BACKEND_URL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
    });


    const messageinfo = await res.json();

    if (res.ok) {
        redirect('/dashboard/messages');
    }


    return messageinfo;
};

export default createMessages