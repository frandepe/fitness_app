import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  alt: string;
  height?: string;
  src: string;
  width?: string;
  onClick?: () => void;
  className?: any;
}

const LazyLoad = ({ alt, height, src, width, onClick, className }: Props) => {
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      alt={alt}
      height={height}
      width={width}
      onClick={onClick}
      className={className}
    />
  );
};

export default LazyLoad;
