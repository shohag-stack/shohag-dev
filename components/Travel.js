import React from 'react'

export default function Travel() {
  const photos = [
    {
      img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80",
      label: "Lake Adventure",
      large: true,
    },
    {
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80",
      label: "Mountain Town",
    },
    {
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
      label: "Paragliding",
    },
    {
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&q=80",
      label: "Flight View",
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
      label: "Portrait",
    }
  ];

  return (
    <section className="bg-black py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="text-white/45 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            BEYOND THE SCREEN
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
          >
            Travel Diaries
          </h2>
          <p className="text-white/45 text-sm max-w-sm mx-auto">
            I find inspiration in every journey. Here are some moments from my
            adventures around the world.
          </p>
        </div>

        {/* Grid matching screenshot: big on left, 2+4 on right */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Big image — spans 2 cols and 2 rows */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
            <img
              src={photos[0].img}
              alt={photos[0].label}
              className="w-full h-full object-cover min-h-[280px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                <span className="text-white text-lg">▶</span>
              </div>
            </div>
          </div>
          {/* Smaller images */}
          {photos.slice(1).map((p) => (
            <div
              key={p.label}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={p.img}
                alt={p.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-white text-xs font-medium">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
