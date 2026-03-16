import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import Button from "./Button";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="section">
      <div className="container-main">
        <div className="flex flex-col lg:flex-row items-center rounded-[var(--radius-xl)] bg-[var(--surface-elevated)] shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="flex flex-col items-start gap-8 p-10 sm:p-14 lg:w-1/2">
            <SecondHeadline text="OpenType features and Variable fonts" />
            <Button text="Try For Free" />
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <Image
              src="/images/Chart.png"
              alt="Chart illustration showing analytics data"
              width={585}
              height={453}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
