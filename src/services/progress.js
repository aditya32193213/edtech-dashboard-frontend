import api from "./api";

export const fetchProgressByCourse = async (courseId) => {
  const res = await api.get(`/progress/course/${courseId}`);
  return res.data;
};

export const updateProgress = async (courseId, completedPercentage) => {
  const res = await api.patch(`/progress/course/${courseId}`, {
    completedPercentage,
  });
  return res.data;
};
