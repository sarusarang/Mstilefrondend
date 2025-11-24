import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImgZoom({ src, alt, className }: { src: string, alt: string, className?: string }) {
    return (
        <Zoom >
            <img loading="lazy" src={src} className={`w-full object-cover hover:cursor-pointer ${className}`} alt={alt} />
        </Zoom>
    );
}
