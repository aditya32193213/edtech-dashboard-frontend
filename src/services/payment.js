import api from "./api";

export const createCheckoutSession = async ({
  courseId,
  title,
  price,
}) => {
  const response = await api.post(
    "/payments/create-checkout-session",
    {
      courseId,
      title,
      price,
    }
  );

  return response.data;
};
