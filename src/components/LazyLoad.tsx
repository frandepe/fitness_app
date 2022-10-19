import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  alt: string;
  height: string;
  src: string;
  width: string;
}

const LazyLoad = ({ alt, height, src, width }: Props) => {
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      alt={alt}
      height={height}
      width={width}
    />
  );
};

export default LazyLoad;
