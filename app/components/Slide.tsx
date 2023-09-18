import React from 'react';

interface SlideProps {
  slide: {
    image: string;
    title: string;
    description: string;
  };
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="slide">
      <img src={slide.image} alt={slide.title} />
    </div>
  );
};

export default Slide;