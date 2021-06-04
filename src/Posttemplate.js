import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Posttemplate(props) {
  return (
    <Fragment>
      <div className="container">
        <Link to={`/eventsblogs/${props.post.id}`}>
          <div className="row cust-row">
            <div className="col-md-2">

              <div className="image">
                <img src={props.post.imageLocation} alt="img" />
              </div>

            </div>
            <div className="col-md-10">
              <p className="title">{props.post.name}</p>
              <p className="price">£{props.post.price}</p>
            </div>

          </div>
        </Link>
      </div>

    </Fragment>
  );
}

export default Posttemplate;
