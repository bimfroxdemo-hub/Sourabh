import React from "react";
import Header from "../componant/Header";


import HeroSection from "../Home/HeroSection";
import Categery from "../Home/Catogery";
import WhyChooseUs from "../Home/WhyChooseUs";
import CTASection from "../Home/CTASection";
import Exprience from "./Exprience"; // (Your file name is Exprience, so kept the same)
import Industries from "./Industries";
import ServicePartners from "../componant/ServicePartners";

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col w-full"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #cfe9f9 30%, #91c8f0 100%, #62b2e6 100%)",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full overflow-hidden">
        
        <section className="w-full">
          <HeroSection />
        </section>

        <section className="w-full">
          <Categery />
        </section>

        <section className="w-full">
          <ServicePartners />
        </section>
      
        <section className="w-full">
          <Industries />
        </section>
        <section
          className="w-full"
          style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #d7eaff 40%, #a6cff5 100%, #7bb6ee 100%)",
            }}
          >
          <Exprience />
        </section>


        <section className="w-full">
          <WhyChooseUs />
        </section>

        <section className="w-full">
          <CTASection />
        </section>

      </main>

   
    </div>
  );
};

export default Index;
