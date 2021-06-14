import React, {useState} from 'react';
import './ImageContainer.scss';
import Loader from "../Loader/Loader";

interface ImageContainerProps {
    src: string;
    alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    src,
    alt
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(!!src);

    return (
        <div className="pf-image-wrapper">
            {
                isValidSrc ? (
                    <img
                        data-testid={"pf-image--id"}
                        className={`pf-image pf-image--${ imageLoaded ? 'visible' : 'hidden'}`}
                        src={src}
                        alt={alt}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setIsValidSrc(false)}
                    />
                ) : (
                    <div className="pf-image--invalid-src">{ alt }</div>
                )
            }
            {
                !imageLoaded && <Loader/>
            }
        </div>
    )
}

export default ImageContainer;
