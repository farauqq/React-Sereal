import React from "react";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";

function Gallery() {
  return (
    <>
      <div class="container text-center">
        <h1 class="fw-bold">Something Awesome Is Coming Soon!</h1>
        <p class="text-secondary">It's going to be amazing! For now, you can check our class</p>
        {/* <!-- <a href="Explore.html#pills-digital" class="btn btn-join px-3 py-2">Go to class</a> direct langsung ke explore class-->  */}
        <a href="Explore.html" class="btn btn-join px-3 py-2">
          Go to class
        </a>
      </div>
    </>
  );
}

export default Gallery;
