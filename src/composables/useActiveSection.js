import { ref, onMounted, onUnmounted } from "vue";

export const useActiveSection = () => {
  const activeSection = ref("");

  let observer;

  onMounted(() => {
    setTimeout(() => {
      const sections = document.querySelectorAll("section");

      observer = new IntersectionObserver(//أداة تراقب العناصر إذا دخلت الشاشة أو لا
        (entries) => {//كل سكشن له entry
          entries.forEach((entry) => {
            if (entry.isIntersecting) {// السكشن ظاهر على الشاشة
              activeSection.value = entry.target.id;// خزن اسم السكشن
            }
          });
        },
        {
          threshold: 0.6, // لازم 60% من السكشن يكون ظاهر
        }
      );

      sections.forEach((section) => {
        //خلى observer يراقب كل السكشنات
        if (section.id) observer.observe(section);
      });
    }, 0);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();// لما الكومبوننت يختفي:نوقف المراقبة
  });

  return { activeSection };
};