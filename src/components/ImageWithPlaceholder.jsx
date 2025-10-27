import React, { useState, useEffect } from 'react';

const ImageWithPlaceholder = ({ src, alt, className, loading = "lazy", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`image-container ${className || ''}`}>
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={{ display: isLoaded ? 'block' : 'none' }}
        {...props}
      />
    </div>
  );
};

export default ImageWithPlaceholder;