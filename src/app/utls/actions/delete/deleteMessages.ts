"use server"


const deleteMessages = async (id: string) => {   
    
    const res = await fetch(`${process.env.BACKEND_URL}/messages/${id}`, {
        method: "DELETE",
    });

    if (res.ok) {
        throw new Error("Failed to delete messages");
    }

};

export default deleteMessages