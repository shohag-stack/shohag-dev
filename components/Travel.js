import React, { useState } from "react";


export default function Travel() {
  const photos = [
    {
      video: "/assets/video/paraglyding.mp4",
      label: "Lake Adventure",
      large: true,
    },
    {
      img: "/assets/img/skuba.png",
      label: "Mountain Town",
    },
    {
      img: "/assets/img/paraglyding.png",
      label: "Paragliding",
    },
    {
      img: "/assets/img/sea-smile.png",
      label: "Flight View",
    },
    {
      img: "/assets/img/handsup.png",
      label: "Portrait",
    },
    {
      img: "/assets/img/airview.png",
      label: "airview",
    },
    {
      img: "/assets/img/thai-beach.png",
      label: "Portthai-beach",
    },
  ];
   const [selected, setSelected] = useState(null);

  return (
    <section id="travel" className="py-20 md:py-28 border-t border-white/5">
      {/* ...heading same as before... */}
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            BEYOND THE SCREEN
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Travel Diaries
          </h2>
          <p className="text-white/45 text-sm max-w-sm mx-auto">
            I find inspiration in every journey. Here are some moments from my
            adventures around the world.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-[900px]">
        {/* LEFT SIDE */}
        <div className="col-span-2 grid grid-rows-2 gap-2">
          <div className="row-span-1 relative group overflow-hidden">
            <video src={photos[0].video} className="w-full h-full object-cover" autoPlay muted loop playsInline controls />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {photos.slice(1, 3).map((p) => (
              <div key={p.label} onClick={() => setSelected(p.img)} className="relative group overflow-hidden cursor-pointer">
                <img src={p.img} alt={p.label} className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2">
          {photos.slice(3, 7).map((p) => (
            <div key={p.label} onClick={() => setSelected(p.img)} className="relative group overflow-hidden cursor-pointer">
              <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl leading-none"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={selected}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
