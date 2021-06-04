import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Singlepost() {
  const { id } = useParams();

  const url = `https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles/${id}`;
  const [singlePost, setPost] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, [url]);

  if (singlePost) {
    return (content = (
      <div className="container img-100">
        <div className="row cust-row">
          <div className="col-md-3">
            <img src={singlePost.imageLocation} alt="img" />
          </div>
          <div className="col-md-9">
            <p className="title">{singlePost.name}</p>
            <p className="price">£{singlePost.price}</p>
            <p className="description">{singlePost.description}</p>
            <button className="btn btn-sm btn-primary">Add to cart</button>
            <button className="btn btn-sm btn-success">Buy now</button>
          </div>
        </div>
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Singlepost;
