import React from "react";
import axios from "axios";
let dua_kolom_kelas = document.getElementById('dua-kolom-kelas')
let api_link_kelas = 'https://63492926a59874146b18c2bb.mockapi.io/tes/Kelas'


export const eksploreServices = {
  getExploreList,
};

async function getExploreList() {
  return axios
    .get("https://63492926a59874146b18c2bb.mockapi.io/tes/Kelas")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error.message);
    });
}

let displayCardKelas = (item) => {
  return (
    <div>
      <div className="col my-3">
        <div className="card flex-row ">
          <img src="${item.img}" height="100%" className="col-centered" alt="..." />
          <div className="card-body">
            <h5 className="card-title">${'{'}item.judul{'}'}</h5>
            <p className="card-text">${'{'}item.desc{'}'}</p>
            <div className="d-flex justify-content-between">
              <a href>${'{'}item.level{'}'}</a>
              <a href="${item.link}" className="btn btn-main-color" id="card-button">Lihat Kelas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getDataKelas = async () => {
  let res = await fetch(api_link_kelas);
  let kelas_array = await res.json();
  let cards = "";
  kelas_array.forEach(item => {
      cards += displayCardKelas(item);
      dua_kolom_kelas.innerHTML = cards
  });
}
getDataKelas()

const getMelukisKelas = async () => {
let res = await fetch(api_link_kelas);
let kelas_array = await res.json();
let cards = "";
let melukis = []

kelas_array.forEach( (item) => {
  if (item.cat.includes("Melukis")){
    melukis.push(item)
  }
});
melukis.forEach( (item) => {
  cards += displayCardKelas(item)
  dua_kolom_kelas.innerHTML = cards
});
}

const getDigitalKelas = async () => {
let res = await fetch(api_link_kelas);
let kelas_array = await res.json();
let cards = "";
let digital = []

kelas_array.forEach( (item) => {
  if (item.cat.includes("Digital-art")){
    digital.push(item)
  }
});
digital.forEach((item) => {
  cards += displayCardKelas(item)
  dua_kolom_kelas.innerHTML = cards
});
}