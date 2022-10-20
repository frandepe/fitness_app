import "./Bodies.scss";
import { useBody } from "../../hooks/useBody";
import { Excercise } from "../../interfaces/Api";
import { Card } from "../Card";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Presentation } from "../Presentation/Presentation";
import { Loading } from "../Loading/Loading";
import { useState } from "react";
import { Button } from "rsuite";
import { BodyBack } from "../BodyBack/BodyBack";
import { BodyFront } from "../BodyFront/BodyFront";

export const Bodies = () => {
  const { getBodyPart, part, isLoading } = useBody();
  const [imageFit, setImageFit] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="BodyFront__container">
      <Button
        className="BodyFront__button"
        onClick={() => setImageFit(!imageFit)}
      >
        {imageFit ? "Show Back" : "Show Front"}
      </Button>
      <div className="BodyFront__containerImg">
        {imageFit ? (
          <BodyFront getBodyPart={getBodyPart} />
        ) : (
          <BodyBack getBodyPart={getBodyPart} />
        )}
      </div>

      <div className="BodyFront__containerSlider">
        {part.length !== 0 ? (
          <Slider {...settings}>
            {part?.map((e: Excercise) => (
              <Card key={e.id} data={e} />
            ))}
          </Slider>
        ) : (
          <Presentation />
        )}
      </div>
    </div>
  );
};

// border="0" width="495" height="933" orgWidth="495" orgHeight="933"
