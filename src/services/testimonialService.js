import { collection, addDoc, doc, updateDoc, getDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import emailjs from '@emailjs/browser';
import { generateToken, formatDate } from "@/utils/function";

export const submitTestimonial = async (form) => {
    const token = generateToken();
    try {
        const doc = await addDoc(collection(db, "testimonials"), {
            name: form.name,
            email: form.email,
            role: form.role,
            company: form.company,
            rating: form.rating,
            testimonial: form.testimonial,
            status: "pending",
            createdAt: serverTimestamp(),
            token: token
        });
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
                date: formatDate(new Date()),
                testimonial_id: doc.id,
                to_email: import.meta.env.VITE_EMAIL,
                from_name: form.name,
                url: import.meta.env.VITE_BASE_URL,
                portfolio_email: import.meta.env.VITE_EMAIL,
                token: token
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
                date: formatDate(new Date()),
                to_email: form.email,
                from_name: import.meta.env.VITE_NAME,
                url: import.meta.env.VITE_BASE_URL,
                portfolio_email: import.meta.env.VITE_EMAIL
            },
                import.meta.env.VITE_PUBLIC_KEY
            );
        } catch (error) {
            console.log('error to send email for reciver', error)
        }
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};


export const updateTestimonial = async (status, id) => {
    try {
        await updateDoc(doc(db, "testimonials", id), {
            status: status,
            token: null,
        });
        return { success: true };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};
export const getTestimonial = async (id, tokenFromUrl) => {
    try {
        const snap = await getDoc(doc(db, "testimonials", id));

        if (!snap.exists()) {
            return { success: false, message: "التقييم غير موجود" };
        }
        const data = snap.data();
        if (data.token !== tokenFromUrl) {
            return { success: false, message: "توكن غير صحيح" };
        }
        if (data.status !== "pending") {
            return { success: false, message: "تمت المعالجة مسبقاً" };
        }
        return { success: true, data };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};
export const getAcceptedTestimonials = async () => {
    try {
        const q = query(
            collection(db, "testimonials"),
            where("status", "==", "approved")
        );

        const snapshot = await getDocs(q);

        const testimonials = snapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data().name,
            testimonial: doc.data().testimonial,
            date: formatDate(doc.data().createdAt),
            role: doc.data().role,
            company: doc.data().company,
            rating: doc.data().rating,
            status: doc.data().status,
        }));

        return { success: true, testimonials };
    } catch (error) {
        return { success: false, error };
    }
};