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
        //send email to Receiver
        try {
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TESTIMONIAL_TEMPLATE_ID, {
                title: "📩 New Testimonial Received",
                subtitle: "From your portfolio website",
                intro: "You have received a new testimonial.",
                testimonial_title: "Testimonial",
                date_label: "Submitted at",
                button_text: "View Portfolio",
                footer_text: "This email was automatically sent from your portfolio form.",
                is_admin: true,

                name: form.name,
                email: form.email,
                role: form.role,
                company: form.company,
                rating: form.rating,
                testimonial: form.testimonial,
                date: new Date().toLocaleString(),
                testimonial_id: doc.id,
                to_email: import.meta.env.VITE_EMAIL,
                from_name: form.name
            },
                import.meta.env.VITE_PUBLIC_KEY
            );
        } catch (error) {
            console.log('error to send email for receiver', error)
        }
        // send email confirmation to sender
        try {
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TESTIMONIAL_TEMPLATE_ID, {
                title: "🙏 Thank You for Your Feedback!",
                subtitle: "Your testimonial has been received",
                intro: "We appreciate your feedback. Your testimonial is currently under review.",
                testimonial_title: "Your Testimonial",
                date_label: "Submitted at",
                button_text: "Visit Portfolio",
                footer_text: "Thank you for your support 💛",

                is_admin: false,

                name: form.name,
                rating: form.rating,
                testimonial: form.testimonial,
                date: new Date().toLocaleString(),
                to_email: form.email,
                from_name: import.meta.env.VITE_NAME
            },
                import.meta.env.VITE_PUBLIC_KEY
            );
        } catch (error) {
            console.log('error to send email for reciver', error)
        }
        console.log("Testimonial + Email sent ✅");
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};