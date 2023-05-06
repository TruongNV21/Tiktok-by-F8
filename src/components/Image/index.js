import { useState, forwardRef } from "react";
import images from "~/assets/images";

function Image({src, alt, ...props},ref) {
    const [fallback, setFallback] = useState('');
    const handleError= ()=>{
        setFallback(images.noImage)
    }
    return ( 
        <img src={fallback || src} alt={alt} ref={ref} {...props} onError={handleError} />
     );
}

export default forwardRef(Image);