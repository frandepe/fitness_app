import { PopoverZoom } from "../PopoverZoom";

import bodyFrontJPG from "../../screens/bodyFrontJPG.jpg";
import zoomUpperArmsL from "../../screens/zoom-upper-armsL.jpg";
import zoomUpperArmsR from "../../screens/zoom-upper-armsR.jpg";
import zoomLowerArmsL from "../../screens/zoom-lower-armsL.jpg";
import zoomLowerArmsR from "../../screens/zoom-lower-armsR.jpg";
import zoomLowerLegsL from "../../screens/zoom-lower-legsL.jpg";
import zoomLowerLegsR from "../../screens/zoom-lower-legsR.jpg";
import zoomUpperLegs from "../../screens/zoom-upper-legs.jpg";
import zoomChest from "../../screens/zoom-chest.jpg";
import zoomNeck from "../../screens/zoom-neck.jpg";
import zoomWaist from "../../screens/zoom-waist.jpg";

interface Props {
  getBodyPart: (partBody: string) => Promise<void>;
}

export const BodyFront = ({ getBodyPart }: Props) => {
  return (
    <>
      <img
        id="Image-Maps-Com-image-maps-2022-10-15-021734"
        src={bodyFrontJPG}
        style={{ border: "0", width: "470px", height: "100vh" }}
        useMap="#image-maps-2022-10-15-021734"
        alt="noBody"
        className="BodyFront__body"
      />
      <map
        name="image-maps-2022-10-15-021734"
        id="ImageMapsCom-image-maps-2022-10-15-021734"
      >
        <area
          shape="rect"
          coords="468,932,470,934"
          alt="Image Map"
          style={{ outline: "none" }}
          title="Image Map"
        />
        <PopoverZoom zoomImg={zoomUpperArmsL} placement="right">
          <area
            id="upper-armsL"
            alt="upper-armsL"
            title="upper-armsL"
            shape="poly"
            coords="311,329,321,290,309,236,279,237,273,268,276,296"
            style={{ outline: "none" }}
            onClick={() => getBodyPart("upper arms")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomUpperArmsR} placement="left">
          <area
            id="upper-armsR"
            alt="upper-armsR"
            title="upper-armsR"
            shape="poly"
            coords="150,325,182,299,185,268,176,236,147,243,138,284,141,313"
            style={{ outline: "none" }}
            onClick={() => getBodyPart("upper arms")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomLowerArmsL} placement="right">
          <area
            id="lower-armsL"
            alt="lower-armsL"
            title="lower-armsL"
            shape="poly"
            coords="278,234,311,226,294,188,265,154,247,162"
            target="_self"
            onClick={() => getBodyPart("lower arms")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomLowerArmsR} placement="left">
          <area
            id="lower-armsR"
            alt="lower-armsR"
            title="lower-armsR"
            shape="poly"
            coords="142,239,181,232,191,190,208,166,189,156,158,183"
            // style={{ outline: "none" }}
            // target="_self"
            onClick={() => getBodyPart("lower arms")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomNeck} placement="right">
          <area
            id="neck"
            alt="neck"
            title="neck"
            shape="poly"
            coords="209,295,209,317,229,332,250,318,252,300"
            onClick={() => getBodyPart("neck")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomChest} placement="right">
          <area
            id="chest"
            alt="chest"
            title="chest"
            shape="poly"
            coords="190,307,229,338,270,305,308,337,305,379,286,415,259,389,203,389,174,419,158,384,155,345"
            onClick={() => getBodyPart("chest")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomWaist} placement="right">
          <area
            id="waist"
            alt="waist"
            title="waist"
            shape="poly"
            coords="176,432,207,397,253,392,284,419,287,493,237,508,176,497"
            onClick={() => getBodyPart("waist")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomUpperLegs} placement="right">
          <area
            id="upper-legs"
            alt="upper-legs"
            title="upper-legs"
            shape="poly"
            coords="287,507,237,565,171,516,144,587,148,644,196,663,236,572,287,665,323,643,333,589"
            onClick={() => getBodyPart("upper legs")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomLowerLegsL} placement="right">
          <area
            id="lower-legsL"
            alt="lower-legsL"
            title="lower-legsL"
            shape="poly"
            coords="332,668,298,684,297,719,331,802,357,796,355,720"
            onClick={() => getBodyPart("lower legs")}
          />
        </PopoverZoom>
        <PopoverZoom zoomImg={zoomLowerLegsR} placement="left">
          <area
            id="lower-legsR"
            alt="lower-legsR"
            title="lower-legsR"
            shape="poly"
            coords="142,679,177,695,173,747,144,817,123,801,120,729"
            onClick={() => getBodyPart("lower legs")}
          />
        </PopoverZoom>
      </map>
    </>
  );
};
