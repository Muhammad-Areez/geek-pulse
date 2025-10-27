import React, { useState } from 'react';

const ImageWithPlaceholder = ({ src, alt, className, loading = "lazy", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

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
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isLoaded ? 'block' : 'none' }}
        {...props}
      />
    </div>
  );
};

export default ImageWithPlaceholder;