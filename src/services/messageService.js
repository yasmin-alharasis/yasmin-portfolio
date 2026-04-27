import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const sendMessage = async (form) => {
    try {
        await addDoc(collection(db, "messages"), {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            createdAt: new Date,
        });
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};