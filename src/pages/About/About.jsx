/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import "../../assets/css/style-about.css";

function About() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;
  return (
    <section class="section-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="section-title">The Team Behind SEREAL</h2>

            <p class="section-subtitle">{message}</p>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" class="team-img" alt="pic" />
              <h3>JOHNATHAN HAWKINS</h3>
              <div class="team-info">
                <p>Team Backend</p>
              </div>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />

              <h3>ALEXANDRA SMITHS</h3>

              <div class="team-info">
                <p>Team Frontend</p>
              </div>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" class="team-img" alt="pic" />

              <h3>ALEXANDRA SMITHS</h3>

              <div class="team-info">
                <p>Team Backend</p>
              </div>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" class="team-img" alt="pic" />

              <h3>ELISA JOHANSON</h3>

              <div class="team-info">
                <p>Marketing Manager</p>
              </div>

              <ul class="team-icon">
                <li>
                  <a href="#" class="twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="pinterest">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a href="#" class="dribble">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
