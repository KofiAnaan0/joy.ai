import React from "react";
import LogoCloud from "../logo-cloud";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";

const Hero = () => {
  return (
    <Section className="pt-36 md:pt-38 ">
      {/* main content */}
      <Main data-aos="fade-up">
        {/* Title */}
        <H1>Take control of your IT</H1>

        {/* description */}
        <P className="max-w-2xl mx-auto">
          Monitor, manage, and secure your IT infrastructure with
          enterprise-grade solutions built from the ground up.
        </P>

        {/* CAT */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full">
          {/* try */}
          <Button className="border-black w-full md:w-fit">Book a Demo</Button>

          {/* Demo */}
          <Button
            variant="outline"
            size="default"
            className="w-full md:w-fit"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("openChatWidget"));
            }}
          >
            Call Us
          </Button>
        </div>

        {/* video explanation */}
        <div
          className="mx-auto flex items-center justify-center max-w-4xl w-full"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/kRsNl4xyNeA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Brands */}
        {/* <LogoCloud /> */}
      </Main>
    </Section>
  );
};

export default Hero;