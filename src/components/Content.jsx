import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import SubHeading from "@/components/SubHeading";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Button from "@/components/Button";
import Image from "next/image";

const ContentCard = ({ title, description, buttonText, imageSrc, imageAlt, imageWidth, imageHeight }) => (
  <div className="flex flex-col items-center w-full py-10 gap-8 rounded-[var(--radius-md)] border border-[#D3D3D3] bg-white shadow-[0px_4px_31px_0px_rgba(0,0,0,0.15)] card-hover">
    <div className="flex flex-col items-center gap-3 px-6 text-center">
      <Title title={title} className="!text-[#000]" />
      <Paragraph
        paragraph={description}
        className="!text-[#5C5C5C] text-center max-w-[320px]"
      />
    </div>
    <Button text={buttonText} />
    <div className="px-6 w-full flex justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="rounded-xl w-full max-w-[400px] h-auto"
      />
    </div>
  </div>
);

const Content = () => {
  return (
    <section className="section">
      <div className="container-main section-inner">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3">
          <SecondHeadline text="Contents" />
          <SubHeading paragraph="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <ContentCard
            title="Work"
            description="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
            buttonText="Sign Up"
            imageSrc="/images/Macbook.png"
            imageAlt="Macbook showing transaction dashboard"
            imageWidth={405}
            imageHeight={227}
          />
          <ContentCard
            title="Design with real data"
            description="Ever wondered if you're too reliant on a client for work? Slate helps you identify."
            buttonText="Try For Free"
            imageSrc="/images/Board.jpeg"
            imageAlt="Board showing project management view"
            imageWidth={379}
            imageHeight={276}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
