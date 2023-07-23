import { useState } from "react";
import "../../css/post.css";

function Post() {
  const [collapse, setCollapse] = useState(true);
  return (
    <section id="separate">
      <div className="container">
        <div className="post_image">
          <img
            src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
            alt=""
          />
        </div>
        <div className="separate_post">
          <div className="user">
            <div className="user_image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="30x30"
              />
            </div>
            <div className="user_info">
              <h5>Andrew Jonson </h5>
              <p>Posted on 27th January 2022</p>
            </div>
          </div>
          <div className="post_title">
            <h1>Step-by-step guide to choosing great font pairs</h1>
          </div>
          <div className="post_hashtag">
            <span> Startup (#business, #screen, #life)</span>
          </div>
          <div className="show-more-container">
            <div
              className={`post_description  ${
                collapse ? "gradient maxHeight" : ""
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus. Sociis natoque
                penatibus et magnis dis parturient montes. Ridiculus mus mauris
                vitae ultricies leo. Neque egestas congue quisque egestas diam.
                Risus in hendrerit gravida rutrum quisque non. Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Non illo corrupti ad
                mollitia voluptatem error veniam voluptatibus quo, sint, officia
                necessitatibus dolore. Quam at nostrum ab sunt eligendi eaque
                repudiandae magni assumenda hic est, qui sapiente vitae
                similique a expedita esse quae iure corporis iste necessitatibus
                dolor adipisci obcaecati laudantium.
              </p>
            </div>
          </div>
          <div className="button">
            {collapse && (
              <span className="show-more">
                <p onClick={() => setCollapse(false)}>Show</p>
              </span>
            )}
            {!collapse && (
              <span onClick={() => setCollapse(true)} className="show-less">
                <p>Hide</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
