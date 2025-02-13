"use server"



const getMessages = async () => {
    
    
    const res = await fetch(`${process.env.BACKEND_URL}/messages`, {
        cache: "no-store",
    });

    const messageInfo = await res.json();


    return messageInfo;
};

export default getMessages