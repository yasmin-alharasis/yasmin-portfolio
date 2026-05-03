<template>
  <div class="views">👀 {{ views }}</div>
</template>
<script setup>
import { setDoc } from "firebase/firestore";
import { ref, onMounted } from "vue";
import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const views = ref("...");

const handleViews = async () => {
  try {
    const refDoc = doc(db, "views", "global");
    let snap = await getDoc(refDoc);

    if (!snap.exists()) {
      await setDoc(refDoc, { count: 1 });
      views.value = 1;
      localStorage.setItem("viewed", "true");
      return;
    }

    views.value = snap.data().count;

    const alreadyViewed = localStorage.getItem("viewed");
    if (alreadyViewed) return;

    await updateDoc(refDoc, {
      count: increment(1),
    });

    localStorage.setItem("viewed", "true");

    const updatedSnap = await getDoc(refDoc);
    views.value = updatedSnap.data().count;
  } catch (error) {
    console.log("error counting view", error);
  }
};
onMounted(() => {
  handleViews();
});
</script>
<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/media' as *;

.views {
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 5px 15px;
  border: 1px solid $light-gray;
  border-radius: 15px;
}
// Mobile
@include mobile {
  .views {
    display: none;
  }
}
</style>
