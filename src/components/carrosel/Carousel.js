import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import "./Carousel.css";
import { Grid } from "@mui/material";

function Carrosel() {
  var items = [
    {
      img: "https://maisarteblog.files.wordpress.com/2016/06/panorc3a2mica-3.jpg?w=1680",
    },
    {
      img: "https://static.todamateria.com.br/upload/oq/ue/o-que-sao-artes-visuais-og.jpg",
    },
    {
      img: "https://artout.com.br/wp-content/uploads/2019/01/Arte-Contempor%C3%A2nea-3.jpg",
    },
  ];

  return (
    <>

        <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={3000} showArrows={true} className="carrosel-container">
          {items.map((item) => (
            <>
              <img className="img-carrosel" src={item.img} alt="Item" />
            </>
          ))}
        </Carousel>

    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carrosel />, rootElement);

export default Carrosel;
