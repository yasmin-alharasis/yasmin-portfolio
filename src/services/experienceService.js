import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";


export const getExperiences = async () => {
    try {
        const snap = await getDocs(collection(db, "experiences"));
        const experiences = snap.docs.map(doc => ({
            id: doc.id,
            type: doc.data().type,
            company: doc.data().company,
            duration: doc.data().duration,
            place: doc.data().place,
            position: doc.data().position,
            role: doc.data().role,
            technologies: doc.data().technologies,
            achievements: doc.data().achievements,
        }))
        return { success: true, experiences };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};