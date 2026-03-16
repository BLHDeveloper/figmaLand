import React from "react";
import SecondHeadline from "@/components/SecondHeadline";
import Avatar from "@/components/avatar";
import Link from "@/components/Link";
import Subtitle from "@/components/Subtitle";
import Paragraph from "./Paragraph";

const testimonials = [
  {
    id: 1,
    imageUrl: "/images/Elipes2.png",
    name: "Claire Bell",
    role: "Designer",
  },
  {
    id: 2,
    imageUrl: "/images/Elipes3.png",
    name: "Ralph Fisher",
    role: "Designer",
  },
  {
    id: 3,
    imageUrl: "/images/Elipes4.png",
    name: "Francisco Lane",
    role: "Designer",
  },
  {
    id: 4,
    imageUrl: "/images/Elipes5.png",
    name: "Jorge Murphy",
    role: "Designer",
  },
];

const TestimonialCard = ({ imageUrl, name, role }) => (
  <div className="flex flex-col p-8 sm:p-10 gap-6 rounded-[var(--radius-md)] border border-white/10 bg-[var(--surface)] card-hover hover:border-[var(--accent)]/30 transition-colors duration-300">
    <div className="flex items-center gap-3">
      <Avatar imageUrl={imageUrl} />
      <div className="flex flex-col">
        <Link href="#" text={name} className="!text-left !text-base" />
        <Subtitle text={role} />
      </div>
    </div>
    <Paragraph
      paragraph="Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
      className="!text-white/60"
    />
  </div>
);

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container-main section-inner">
        <SecondHeadline text="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
