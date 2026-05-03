import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/firebase";

export const getVisibleTechnologies = async () => {
    try {
        const q = query(
            collection(db, "technologies"),
            where("visible", "==", true),
            orderBy("order", "asc")
        );

        const snapshot = await getDocs(q);

        const technologies = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return { success: true, technologies };
    } catch (error) {
        return { success: false, error };
    }
};