import React, { useEffect, useState } from "react";

import "./Blogs.css";
import { request } from "../utils/Request";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await request({
          url: "/api/website/articles",
        });
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching brands data:", error);
      }
    };
    getBlogs();
  }, []);

  return (
    <section className="blogs">
      <div className="headers flex">
        <button className="custom-link-ouline">
          <img src="arrow.svg" alt="" />
          عرض الكل
        </button>
        <div>
          <h3> أحدث المقالات</h3>
          <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
        </div>
      </div>
      <div className="wrapper">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <img src="BLOG3.png" alt="" />
            <h2> {blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
