import { ref } from "vue"

export function useToast() {
  const statusVisible = ref(false)
  const statusMessage = ref("")
  const status = ref("")

  const showToast = (msg, type = "success") => {
    statusVisible.value = true
    statusMessage.value = msg
    status.value = type

    setTimeout(() => {
      statusVisible.value = false
    }, 3000)
  }

  return {
    statusVisible,
    statusMessage,
    status,
    showToast,
  }
}