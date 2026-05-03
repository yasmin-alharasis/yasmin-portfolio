import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { formatDate } from "@/utils/function";
import { db } from "@/firebase";
import emailjs from '@emailjs/browser';

export const sendMessage = async (form) => {
    try {
        const baseData = {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
        };
        //send email to Receiver
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_MESSAGE_TEMPLATE_ID,
            {
                ...baseData,
                to_email: import.meta.env.VITE_EMAIL,
                from_name: form.name,
                date: formatDate(new Date()),
                portfolio_email: import.meta.env.VITE_EMAIL,
                title: "📩 New Contact Message",
                intro: "You received a new message from your portfolio.",
                footer: "Sent from your portfolio 🚀",
            },
            import.meta.env.VITE_PUBLIC_KEY
        );

        // send email confirmation to sender
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_MESSAGE_TEMPLATE_ID,
            {
                ...baseData,
                to_email: form.email,
                from_name: import.meta.env.VITE_NAME,
                date: formatDate(new Date()),
                portfolio_email: import.meta.env.VITE_EMAIL,

                title: "🙏 Thank You for Contacting Me",
                intro: "I’ve received your message and will get back to you soon.",
                footer: "Thank you for reaching out 💛",
            },
            import.meta.env.VITE_PUBLIC_KEY
        );
        await addDoc(collection(db, "messages"), {
            ...baseData,
            createdAt: serverTimestamp(),
        });
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};