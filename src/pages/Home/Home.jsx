import React from "react";
// import "./Home.css";
import RightArrow from "../../assets/img/RightArrow.png";

function Home() {
  return (
    <>
      {/* <!-- Banner --> */}
      <section>
        <div className="main-image">
          <div className="row">
            <div className="con-text col-md-12 text-center col-sm-12 my-5 d-block">
              <h1 id="#try-move">
                KEMBANGKAN TALENTA <span>SENIMU</span> BERSAMA SEREAL
              </h1>
              <p>Belajar digital art, melukis, menari, musik, dan teater kini tidak lagi susah. Terutama untuk kalian kaum pelajar yang ingin mengembangkan talentanya.</p>
              <a href="Explore.html" className="btn btn-explore px-3 my-3">
                Explore Kelas
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End--> */}

      {/* <!-- General Class --> */}
      <section>
        <div className="ex-seni text-center my-5">
          <h2>Explore Pilihan Seni Sesuai Minat mu</h2>
        </div>
        <nav>
          <div className="d-none d-md-flex nav nav-tabs justify-content-center my-5" id="nav-tab" role="tablist">
            <button id="btn-melukis" className="nav-link active" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Melukis
            </button>
            <button id="btn-digital-art" className="nav-link" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              Digital Art
            </button>
            <button id="btn-teater" className="nav-link" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              Teater
            </button>
            <button id="btn-menari" className="nav-link" data-bs-toggle="tab" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              Menari
            </button>
          </div>
        </nav>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="false">
          <div className="container">
            <div className="carousel-inner">{/* <!-- get data from api --> */}</div>
          </div>

          <button className="d-sm-none carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <img src={RightArrow.png} alt="" className="rotate-img" />
          </button>
          <button className="d-sm-none carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <img src={RightArrow.png} alt="" />
          </button>
        </div>
      </section>
      {/* <!-- General Class End--> */}
    </>
  );
}

export default Home;
