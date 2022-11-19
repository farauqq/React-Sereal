import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";

function Gallery() {
  return (
    <>
      <div className="container text-center">
        <h1 className="fw-bold">Something Awesome Is Coming Soon!</h1>
        <p className="text-secondary">It's going to be amazing! For now, you can check our class</p>
        <Link to="/explore" className="btn btn-join px-3 py-2">
          Go to class
        </Link>
      </div>
    </>
  );
}

export default Gallery;
