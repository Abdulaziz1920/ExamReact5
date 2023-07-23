import { useEffect, useState } from "react";
import "../../css/allposts.css";
import request from "../../server/request";

function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await request.get("post?page=2&limit=10");
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  console.log(data);
  return (
    <section>
      <div className="container">
        <div className="all_posts">
          <div className="searching">
            <input className="search" type="text" placeholder="Search" />
          </div>
          <div className="posts__title">
            <h1>All posts</h1>
          </div>
          {data.map((el) => {
            return (
              <div className="posts__cards" key={el.id}>
                <div className="post_image">
                  <img src={el.category.photo} alt="300" />
                </div>
                <div className="post_about">
                  <span>{el.category.name}</span>
                  <h2>{el.title}</h2>
                  <p>{el.category.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );  
}

export default Posts;
