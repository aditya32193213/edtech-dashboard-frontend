import api from "./api";

export const enrollAfterPayment = async (courseId) => {
  try {
    if (!courseId) {
      throw new Error("Course ID is missing");
    }

    const res = await api.post("/enrollments/after-payment", {
      courseId,
    });

    return res.data;
  } catch (error) {
    console.error("Enrollment failed:", error?.response?.data || error.message);
    throw error;
  }
};

export const fetchMyEnrollments = async () => {
  try {
    const res = await api.get("/enrollments");
    return res.data;
  } catch (error) {
    console.error(
      "Failed to fetch enrollments:",
      error?.response?.data || error.message
    );
    throw error;
  }
};
