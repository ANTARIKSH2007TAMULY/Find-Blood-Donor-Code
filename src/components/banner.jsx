import React from "react";

function Banner() {
  return (
    <div
      className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1615461066841-6116e61058f4')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Why Blood Donation is Important
        </h1>

        <p className="text-lg md:text-xl leading-relaxed">
          Blood donation saves millions of lives every year. A single donation
          can help accident victims, surgery patients, cancer patients, and
          individuals suffering from severe anemia. Your small act of kindness
          can make a life-saving difference.
        </p>
      </div>
    </div>
  );
}

export default Banner;
