import React from "react";
import "./blog.css";

import Article from "../../components/article/Article";

import blogpic1 from "../../assets/blog01.png";
import blogpic2 from "../../assets/blog02.png";
import blogpic3 from "../../assets/blog03.png";
import blogpic4 from "../../assets/blog04.png";
import blogpic5 from "../../assets/blog05.png";

export default function Blog() {
  return (
    <div className="blog section_padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient-text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      
      <div className="blog-articles">
        <div className="blog-article-A">
          <Article pic={blogpic1} date={"Sep 26, 2021"} heading={"APT-3 and Open  AI is the future. Let us exlore how it is?"} link={"/"}></Article>
        </div>
        <div className="blog-article-B">
          <Article pic={blogpic2} date={"Sep 26, 2021"} heading={"APT-3 and Open  AI is the future. Let us exlore how it is?"} link={"/"}></Article>
          <Article pic={blogpic5} date={"Sep 26, 2021"} heading={"APT-3 and Open  AI is the future. Let us exlore how it is?"} link={"/"}></Article>
          <Article pic={blogpic3} date={"Sep 26, 2021"} heading={"APT-3 and Open  AI is the future. Let us exlore how it is?"} link={"/"}></Article>
          <Article pic={blogpic4} date={"Sep 26, 2021"} heading={"APT-3 and Open  AI is the future. Let us exlore how it is?"} link={"/"}></Article>
        </div>
      </div>
    </div>
  );
}
