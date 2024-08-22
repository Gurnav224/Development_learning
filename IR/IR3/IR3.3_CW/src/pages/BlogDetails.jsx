import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogs = [
  {
    id: 1,
    title: "Blog 1",
    content:
      "JavaScript is a versatile programming language used for web development. This blog covers the basics of JavaScript, including variables, data types, and basic syntax.",
    dateposted: "2024-08-22",
  },
  {
    id: 2,
    title: "Blog 2",
    content:
      "Docker is a powerful tool for containerization. In this blog, we'll explore the basics of Docker, how to create Docker images, and how to run containers.",
    dateposted: "2024-08-21",
  },
  {
    id: 3,
    title: "Blog 3",
    content:
      "React is a popular library for building user interfaces. This blog dives into the creation and management of React components, focusing on state, props, and component lifecycle.",
    dateposted: "2024-08-20",
  },
];

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogs.find((blog) => blog.id == blogId);
  console.log(blog);
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{blog.title}</h1>
        <small>Posted on: {blog.dateposted}</small>
        <p className="pt-3">{blog.content}</p>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
