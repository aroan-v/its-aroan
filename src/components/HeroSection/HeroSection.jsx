import React from "react";
import DaisyWrapper from "../DaisyWrapper";
import NightContainer from "../NightContainer";

function HeroSection() {
  return (
    <DaisyWrapper>
      <div className="ds-hero bg-base-200 min-h-screen">
        <div className="ds-hero-content text-center">
          <div className="max-w-md space-y-6">
            <div>
              <h1 className="text-5xl font-bold">Josh</h1>
              <p className="text-xl text-muted-foreground">
                Junior React / Next.js Developer
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Turning ideas into projects through logical problem-solving,
              creative experimentation, and attention to detail. Builds on
              strong fundamentals to create modern, interactive applications.
            </p>

            <button className="ds-btn ds-btn-primary">View my work</button>
          </div>
        </div>
      </div>
    </DaisyWrapper>
  );
}

export default HeroSection;
