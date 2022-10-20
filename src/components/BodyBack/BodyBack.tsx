import { PopoverZoom } from "../PopoverZoom";

import bodyBackJPG from "../../screens/bodyBackJPG2.jpg";
import zoomBack from "../../screens/zoom-back.jpg";
import zoomShoulderL from "../../screens/zoom-shoulderL.jpg";
import zoomShoulderR from "../../screens/zoom-shoulderR.jpg";

interface Props {
  getBodyPart: (partBody: string) => Promise<void>;
}

export const BodyBack = ({ getBodyPart }: Props) => {
  return (
    <>
      <img
        id="Image-Maps-Com-image-maps-2022-10-19-030832"
        src={bodyBackJPG}
        useMap="#image-maps-2022-10-19-030832"
        alt="noBodyBack"
        className="BodyFront__body"
        style={{ border: "0", width: "470px", height: "100vh" }}
      />
      <map
        name="image-maps-2022-10-19-030832"
        id="ImageMapsCom-image-maps-2022-10-19-030832"
      >
        <area
          shape="rect"
          coords="493,931,495,933"
          alt="Image Map"
          title="Image Map"
          href="https://www.image-maps.com/"
        />
        <PopoverZoom zoomImg={zoomBack} placement="left">
          <area
            id="back"
            alt="back"
            title="back"
            shape="poly"
            coords="159,242,221,223,232,180,291,182,336,209,367,274,345,313,312,422,316,442,161,436,162,400,148,330"
            onClick={() => getBodyPart("back")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomShoulderR} placement="right">
          <area
            id="shoulderR"
            alt="shoulderR"
            title="shoulderR"
            shape="poly"
            coords="318,187,344,206,373,254,392,210,380,193,337,182"
            onClick={() => getBodyPart("shoulders")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomShoulderL} placement="left">
          <area
            id="shoulderL"
            alt="shoulderL"
            title="shoulderL"
            shape="poly"
            coords="162,233,213,212,218,173,193,158,161,161,132,172,142,204"
            onClick={() => getBodyPart("shoulders")}
          />
        </PopoverZoom>
      </map>
    </>
  );
};
