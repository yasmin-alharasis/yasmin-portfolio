import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import emailjs from '@emailjs/browser';

export const sendMessage = async (form) => {
    try {
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
            },
            import.meta.env.VITE_PUBLIC_KEY,
        );
        await addDoc(collection(db, "messages"), {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            createdAt: new Date(),
        });
        console.log("Message + Email sent ✅");
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};