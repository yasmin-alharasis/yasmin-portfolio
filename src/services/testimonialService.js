import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import emailjs from '@emailjs/browser';

export const submitTestimonial = async (form) => {
    try {
        const doc = await addDoc(collection(db, "testimonial"), {
            name: form.name,
            email: form.email,
            role: form.role,
            company: form.company,
            rating: form.rating,
            testimonial: form.testimonial,
            status: "pending",
            createdAt: serverTimestamp()
        });
        console.log('testimonial_id', doc.id);
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TESTIMONIAL_TEMPLATE_ID,
            {
                testimonial_id: doc.id,
                name: form.name,
                email: form.email,
                role: form.role,
                company: form.company,
                rating: form.rating,
                testimonial: form.testimonial,
                date: new Date().toLocaleString()
            },
            import.meta.env.VITE_PUBLIC_KEY,
        );

        console.log("Testimonial + Email sent ✅");
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};