import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/firebase";


export const getExperiences = async () => {
    try {
        const q = query(
            collection(db, "experiences"),
            where("visible", "==", true),
            orderBy("order", "asc")
        );
        const snapshot = await getDocs(q);

        const experiences = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return { success: true, experiences };
    } catch (error) {
        console.error("Error", error);
        return { success: false, error };
    }
};