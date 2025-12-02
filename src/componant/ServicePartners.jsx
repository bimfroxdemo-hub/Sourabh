// src/components/ServicePartners.jsx
import React from "react";

const brands = [
  { name: "Britannia", logo: "../../src/assets/company/Britannia_Logo_fcce3225c0.webp" },
  { name: "Navdeep_Chemicals", logo: "../../src/assets/company/navdeep.png" },
  { name: "Coromandel", logo: "../../src/assets/company/coromandel.png" },
  { name: "Deluxe", logo: "../../src/assets/company/Deluxe-Chemical-Industries-Logo-2048x728.webp" },
  { name: "Shree_Ganesh_Chemicals", logo: "../../src/assets/company/download.png" },
  { name: "Ketix", logo: "../../src/assets/company/ketix-logo.png" },
  { name: "Pure_Chem", logo: "../../src/assets/company/logo (1).png" },
  { name: "Mahavir_Minerals", logo: "../../src/assets/company/logo (2).png" },
  { name: "Orientbell_Tiles", logo: "../../src/assets/company/Orient-bell.png" },
  { name: "Zauba_Corp", logo: "../../src/assets/company/logo-Zauba.webp" },
  { name: "GreenBerry_Foils", logo: "../../src/assets/company/GREENBERRY.png" },
];

export default function ServicePartners() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h4 className="text-center text-2xl font-bold mb-4 font-peckham">
          Authorized Service Partners
        </h4>
        {/* <p className="text-center text-slate-600 mb-6">
          Premium AC brands we support
        </p> */}

        <style>{`
          .marquee-wrap { overflow: hidden; position: relative; }
          .marquee-track { display: flex; width: max-content; align-items: center; gap: 2rem; }
          .marquee { display: inline-block; will-change: transform; animation: marquee-left 18s linear infinite; }
          .marquee:hover { animation-play-state: paused; }
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="marquee-wrap">
          <div className="marquee">
            <div className="marquee-track">
              {brands.map((b, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md flex items-center justify-center p-5 transition-transform duration-300 hover:scale-110 rounded-4xl"
                  style={{ height: "110px", width: "140px" }}
                >
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}

              {brands.map((b, i) => (
                <div
                  key={`copy-${i}`}
                  className="bg-white shadow-md flex items-center justify-center p-5 transition-transform duration-300 hover:scale-110 rounded-4xl"
                  style={{ height: "110px", width: "140px" }}
                >
                  <img
                    src={b.logo}
                    alt={`${b.name}-copy`}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
