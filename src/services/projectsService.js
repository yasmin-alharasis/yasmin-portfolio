import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

export const getVisibleProjects = async () => {
    try {
        const q = query(
            collection(db, "projects"),
            where("visible", "==", true)
        );

        const snapshot = await getDocs(q);

        const projects = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return { success: true, projects };
    } catch (error) {
        return { success: false, error };
    }
};