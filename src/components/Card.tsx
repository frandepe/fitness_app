import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonToolbar, Modal, Button } from "rsuite";
import { Outlet } from "react-router";
import TimerView from "./Timer/TimerView";
import { useLocation } from "react-router-dom";
import LazyLoad from "./LazyLoad";

interface Props {
  data: {
    gifUrl: string;
    name: string;
    target: string;
    equipment: string;
    id?: any;
    bodyPart?: string;
  };
}

export const Card = ({ data }: Props) => {
  let { gifUrl, name, target, equipment, id, bodyPart } = data;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const location = useLocation();

  const handleImg = () => {
    navigate(`/home/${id}`);
  };

  return (
    <div className="a-box">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <ButtonToolbar>
              {location?.pathname === "/home" ? (
                <div onClick={handleOpen}>
                  <LazyLoad
                    onClick={handleImg}
                    src={gifUrl}
                    alt={name}
                    className="img-home"
                  />
                </div>
              ) : (
                <div>
                  <LazyLoad src={gifUrl} alt={name} />
                </div>
              )}
            </ButtonToolbar>
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{equipment}</h3>
        <div>
          {name} / {target}
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => {
          navigate(`/home`);
          handleClose();
        }}
      >
        <Modal.Title className="Modal__title">{bodyPart}</Modal.Title>

        <Modal.Body>
          <div className="Modal__container">
            <Outlet />
            <TimerView />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="red"
            onClick={() => {
              navigate(`/home`);
              handleClose();
            }}
            appearance="primary"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
