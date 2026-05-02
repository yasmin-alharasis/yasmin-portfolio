export const generateToken = () => {
  return crypto.randomUUID();
};
export const formatDate = (timestamp) => {
  if (!timestamp) return "";

  return timestamp
    .toDate()
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
};