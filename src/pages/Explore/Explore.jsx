import React, { useEffect, useState } from "react";
import BgExplore from "../../assets/img/bg-explore.jpg";
import "../../assets/css/style-profile.css";
import "../../assets/css/style.css";
import { eksploreServices } from "../../services/eksploreServices";

const Explore = () => {
  const [listExplore, setListExplore] = useState();
  useEffect(() => {
    eksploreServices.getExploreList().then((response) => {
      setListExplore(response);
    });
  }, []);

  console.log(listExplore);
  return (
    <>
      {/* <!-- Banner/ Carousel --> */}
      <section className="row">
        <div id="carouselExampleInterval" className="carousel slide col-centered" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-caption my-md-5">
                <h1>Explore Kelas</h1>
                <p>Ikuti dan pelajari kelas yang ada di Sereal</p>
              </div>
              <img src={BgExplore} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-10"></div>
      </section>
      {/* <!-- Banner/ Carousel End --> */}
      {/* <!-- Categories --> */}
      <section className="tab-container my-4">
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color active" id="pills-all" onClic="getDataKelas()" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
              Semua Kelas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link nav-main-color" id="pills-melukis" onClick="getMelukisKelas()" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">
              Melukis
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color" id="pills-digital" onClick="getDigitalKelas()" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
              Digital Art
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color" id="pills-teater" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
              Teater
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link main-color" id="pills-menari" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">
              Menari
            </button>
          </li>
        </ul>
        {/* <div className="tab-content" id="pills-tabContent">
          <div className="row">
            {listExplore.map((item) => (
              <div class="col my-3">
                <div class="card flex-row ">
                  <img src="${item.img}" height="100%" class="col-centered" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">""</h5>
                    <p class="card-text">"</p>
                    <div class="d-flex justify-content-between">
                      <a href="">Tets</a>
                      <a href="${item.link}" class="btn btn-main-color" id="card-button">
                        Lihat Kelas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Explore;
