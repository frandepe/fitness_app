import "./Presentation.scss";
import videoPresentation from "./presentation.mp4";

export const Presentation = () => {
  return (
    <section className="Presentation__container">
      <video className="Presentation__background--video" autoPlay loop muted>
        <source src={videoPresentation} type="video/mp4" />
      </video>
      <div className="Presentation__text">
        <h1 className="Presentation__h1--arrow">{"<———————"}</h1>
        <h1 className="Presentation__h1--text">
          Select a part of the body to know the exercises that strengthen it
        </h1>
      </div>
    </section>
  );
};
