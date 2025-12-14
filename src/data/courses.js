import webDev from "../assets/webdev.png";
import dataScience from "../assets/datasciencewithpython.jpeg";
import ai from "../assets/artificialintelligence.webp";

const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    category: "Web Development",
    level: "Beginner",
    duration: "12 Weeks",
    instructor: "John Doe",
    image: webDev,
  },
  {
    id: "2",
    title: "Data Science with Python",
    category: "Data Science",
    level: "Intermediate",
    duration: "10 Weeks",
    instructor: "Jane Smith",
    image: dataScience,
  },
  {
    id: "3",
    title: "Artificial Intelligence Fundamentals",
    category: "Artificial Intelligence",
    level: "Advanced",
    duration: "14 Weeks",
    instructor: "Alex Brown",
    image: ai,
  },
];

export default courses;
