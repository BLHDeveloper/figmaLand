import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import SubHeading from "@/components/SubHeading";
import Button from "@/components/Button";
import Image from "next/image";

const galleryImages = [
  { src: "/images/Card.png", alt: "Dashboard analytics view" },
  { src: "/images/Card2.png", alt: "Project management board" },
  { src: "/images/Card3.png", alt: "Team collaboration interface" },
  { src: "/images/Card4.png", alt: "Task tracking overview" },
  { src: "/images/Card5.png", alt: "Financial reporting dashboard" },
  { src: "/images/Card6.png", alt: "Design system components" },
  { src: "/images/Card7.png", alt: "User analytics panel" },
];

const GalleryItem = ({ src, alt }) => (
  <div className="img-hover-zoom rounded-[var(--radius-md)] shadow-lg">
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="w-full h-full object-cover"
    />
  </div>
);

const Gallery = () => {
  return (
    <section className="section">
      <div className="container-main section-inner">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3">
          <SecondHeadline text="Gallery" />
          <SubHeading paragraph="We focus on ergonomics and meeting you where you work. It's only a keystroke away." />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {galleryImages.slice(0, 4).map((image, index) => (
            <GalleryItem key={index} {...image} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {galleryImages.slice(4).map((image, index) => (
            <GalleryItem key={index} {...image} />
          ))}
        </div>

        <Button text="See more" variant="secondary" />
      </div>
    </section>
  );
};

export default Gallery;
