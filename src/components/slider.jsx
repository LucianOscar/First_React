import React, { useState } from "react";

const Slider = () => {  
    return(
    <section className="relative flex flex-col justify-center items-center py-20 lg:py-32 w-full bg-gradient-to-br from-[var(--color-secondary)] via-[#E5DEFF] to-[var(--color-primary)] overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-darkpurple mb-4 drop-shadow-lg">
            The Ultimate 
            <span className="text-transparent 
            bg-clip-text bg-gradient-to-r
             from-[#9b87f5] to-[#0EA5E9]">
             Super Service
            </span>
        </h1>
        <p className="text-lg md:text-2xl text-shadow-md
         text-[var(--color-text-primary)] 
         mb-8 font-medium">
            All your needs—chatting, shopping, streaming, Leading, and more—united in one powerful, beautiful platform.
        </p>
        <div className="flex justify-center space-x-4">
            <a
            href="#"
            className="px-6 py-3 rounded-lg bg-[#8B5CF6] text-white font-semibold shadow hover:bg-[#9b87f5] transition"
            >
            Start Exploring
            </a>
            <a
            href="#"
            className="px-6 py-3 rounded-lg bg-white text-[#8B5CF6] font-semibold border border-[#8B5CF6] hover:text-white hover:bg-[#8B5CF6] transition"
            >
            Join Waitlist
            </a>
        </div>
        </div>
    </section>
    )};





const AnimateSlider = () => {
  const images = [
    "https://picsum.photos/id/1018/400/400",
    "https://picsum.photos/id/1025/400/400",
    "https://picsum.photos/id/1027/400/400",
    "https://picsum.photos/id/1035/400/400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPositionStyle = (index) => {
    const position = (index - currentIndex + images.length) % images.length;

    if (position === 0) {
      return {
        transform: "translateX(15%) scale(1)",
        zIndex: 3,
        opacity: 1,
        pointerEvents: "none",
        cursor: "default",
      };
    } else if (position === 1) {
      return {
        transform: "translateX(250px) scale(0.7)",
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: "auto",
        cursor: "pointer",
      };
    } else if (position === images.length - 1) {
      return {
        transform: "translateX(-250px) scale(0.7)",
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: "auto",
        cursor: "pointer",
      };
    } else {
      return {
        transform: "scale(0.5)",
        zIndex: 1,
        opacity: 0,
        pointerEvents: "none",
      };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gray-800">
      <div className="relative w-[70%] h-full m-auto overflow-hidden ">
        {images.map((src, index) => {
          const style = getPositionStyle(index);
          return (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              onClick={() => {
                const pos = (index - currentIndex + images.length) % images.length;
                if (pos === 1) goToNext();
                if (pos === images.length - 1) goToPrev();
              }}
              className="absolute top-0 left-1/2 w-full md:w-[40%] h-[250px] object-cover rounded-xl border-4 border-white shadow-xl transition-all duration-700"
              style={{
                transform: `${style.transform} translateX(-60%)`,
                zIndex: style.zIndex,
                opacity: style.opacity,
                pointerEvents: style.pointerEvents,
                cursor: style.cursor,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};




export default Slider;
export { AnimateSlider }; // Export styles if needed