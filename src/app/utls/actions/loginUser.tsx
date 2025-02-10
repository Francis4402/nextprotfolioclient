"use server"

import { loginData } from "@/app/(authpages)/login/page";


const loginUser = async (data: loginData) => {
    const res = await fetch(`${process.env.BACKEND_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });

    const userInfo = await res.json();

  return userInfo;
}

export default loginUser