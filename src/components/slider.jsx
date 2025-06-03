import React from "react";
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
    "https://imgs.search.brave.com/0CTItFDk9qX8fgtKfu38grP5aOcii1ezPjLa6ljTlBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNC8xNS9v/bmxpbmUtc2hvcHBp/bmctY2FydG9vbi13/b21hbi1tYWtlcy1w/dXJjaGFzZXMtdmVj/dG9yLTM2NTAxNDE1/LmpwZw",
    "https://imgs.search.brave.com/0HmAYfxkDaZ0HLFcoQTwLHfFFhR9WqOx-54FbJtP5aU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/bWFuLXdvbWFuLWNo/YXR0aW5nLW9ubGlu/ZS1wZW9wbGUtdXNp/bmctbW9iaWxlLXBo/b25lcy1zcGVlY2gt/YnViYmxlLWRpc3Rh/bmNlLWZsYXQtdmVj/dG9yLWlsbHVzdHJh/dGlvbi1jb21tdW5p/Y2F0aW9uLWludGVy/bmV0Xzc0ODU1LTg0/NDAuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA",
    "https://imgs.search.brave.com/ywr1KhO3ujCNe6gXFlIgjzlDr0hnXTWFAUvHhA8AvOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81MC85My93/ZWItZGVzaWduLWZv/ci1vbmxpbmUtc2hv/cHBpbmctc2Vydmlj/ZS1hcHAtdmVjdG9y/LTM1MTk1MDkzLmpw/Zw",
    "https://imgs.search.brave.com/-DGwPfUif3uuRr1MGB4C_2jXMLedehQpRUWaE2WVTlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MTcwNTQ3NC92ZWN0/b3IvZW1wbG95ZWVz/LWdpdmluZy1oYW5k/cy1hbmQtaGVscGlu/Zy1jb2xsZWFndWVz/LXRvLXdhbGstdXBz/dGFpcnMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWJ1WUFq/YnB0cExMaURQR3p0/MW5mcjBJZl9heC1i/ZVBhdmtncGluLUIt/VVU9",
  ];

  return (
    <div className="flex justify-center items-center h-[500px] bg-[var(--color-main)]">
      <div className="relative w-[200px] h-[200px] animate-rotate">
        {images.map((src, index) => (
          <span
            key={index}
            style={{
              "--i": index,
              transform: `rotateY(${index * 90}deg) translateZ(400px)`,
            }}
            className="absolute w-full h-full"
          >
            <img
              className="w-full h-full object-cover border-2 border-white rounded-lg shadow-lg"
              src={src}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
export { AnimateSlider }; // Export styles if needed