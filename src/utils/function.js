export const generateToken = () => {
  return crypto.randomUUID();
};
export const formatDate = (value) => {
  if (!value) return "";

  const date = value.toDate ? value.toDate() : new Date(value);

  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};