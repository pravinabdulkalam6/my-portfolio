import React, { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  fallbackText = "PAK" 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="profile-image-container w-72 h-72 rounded-full flex items-center justify-center profile-shadow relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border-4 border-blue-500/30">
      {!imageError && (
        <img 
          src={src}
          alt={alt}
          className={`profile-image w-full h-full object-cover rounded-full relative z-10 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          style={{
            objectPosition: 'center center',
            // Reduced lighting compensation
            filter: 'brightness(1.1) contrast(1.05) saturate(1.05) hue-rotate(1deg) blur(0px)',
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      {/* Fallback initials - shown while loading or on error */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-4xl font-bold text-white rounded-full transition-opacity duration-500 ${
          imageLoaded && !imageError ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {fallbackText}
      </div>
      
      {/* Enhanced overlay for better contrast and lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-teal-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
      
      {/* Subtle lighting enhancement overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/3 via-transparent to-transparent opacity-20 rounded-full"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-400/3 opacity-25 rounded-full"></div>
      
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 rounded-full shadow-inner"></div>
      
      {/* Loading indicator */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 animate-pulse"></div>
      )}
    </div>
  );
};

export default ProfileImage;
