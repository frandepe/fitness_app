import { Popover, Whisper } from "rsuite";
import { Placement } from "../interfaces/Whisper";
import LazyLoad from "./LazyLoad";

interface Props {
  //   children: JSX.Element | JSX.Element[];
  children: any;
  zoomImg: string;
  placement: Placement;
}

export const PopoverZoom = ({ children, zoomImg, placement }: Props) => {
  return (
    <Whisper
      followCursor
      placement={placement}
      speaker={
        <Popover
          style={{ background: "rgba(190, 190, 190, 0.2)" }}
          arrow={false}
        >
          <LazyLoad
            width="100px"
            height="100px"
            // style={{ width: "100px", height: "100px" }}
            src={zoomImg}
            alt="sd"
          />
        </Popover>
      }
    >
      {children}
    </Whisper>
  );
};
