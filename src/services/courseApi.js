import api from "./api";

export const fetchCourses = async (search = "") => {
  const response = await api.get("/courses", { params: { search } });
  return response.data;
};

export const fetchCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

export const fetchMyCourses = async () => {
  const response = await api.get("/courses/my-courses");
  return response.data;
};

export const createCourse = async (courseData) => {
  const response = await api.post("/courses", courseData);
  return response.data;
};

export const updateCourse = async (id, courseData) => {
  const response = await api.put(`/courses/${id}`, courseData);
  return response.data;
};

export const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};