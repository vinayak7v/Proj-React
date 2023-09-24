import React, { useContext } from "react";
import { Store } from "../Data/DataStore";
import { Link } from "react-router-dom";
import "./TopPost.css";

function TopPost() {
  const [BlogData] = useContext(Store);
  return (
    <div>
      <h2>
        Top Posts
        <hr className="hr-line"/>
      </h2>

      {BlogData.filter(
        (item) =>
          item.id % 11 === 0 &&
          (item.categorey === "Technology" || item.categorey === "Food")
      ).map((data) => {
        return (
          <>
 <div className="Uni-data">
            <Link to={"/Discription/" + data.id} className="link-data">
             
              <div className="whole-data">
              <div className="img-data">
              <img
                src={data.image}
                alt="Not Found"
                width={300}
                height={200}
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 4px",
                  marginRight: "5px",
                }}
              />
              </div>
              <div className="head-subhead">
              <h2>{data.heading.slice(0,25)}</h2>
              <p className="subhead-data">{data.subheading.slice(0,100)}</p> {data.categorey} /{data.date}
              </div>
              </div>
              <hr />
            </Link>
            </div>
          </>
        );
      })}

      <div className="advertise">
        <h1>Advertisement 1</h1>
      </div>
      <div className="advertise">
      <h1>Advertisement 2</h1>
      </div>
      <div className="advertise">
      <h1>Advertisement 3</h1>
      </div>
      <div className="advertise">
      <h1>Advertisement 4</h1>
      </div>
      <div className="advertise">
      <h1>Advertisement 5</h1>
      </div>
    </div>
    
  );
}

export default TopPost;
