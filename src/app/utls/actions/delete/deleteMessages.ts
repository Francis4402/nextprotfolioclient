"use server"

import { redirect } from "next/navigation";


const deleteMessages = async (id: string) => {   
    
    const res = await fetch(`${process.env.BACKEND_URL}/messages/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        redirect('/dashboard/messages');
    }

};

export default deleteMessages