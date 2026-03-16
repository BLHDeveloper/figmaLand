import React from "react";
import Image from "next/image";
import Title from "./Title";
import Paragraph from "./Paragraph";
import SecondHeadline from "@/components/SecondHeadline";
import SubHeading from "@/components/SubHeading";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
        <path
          d="M7.64636 13.6088L11.4197 9.83542L3.16636 1.59542C2.52636 0.95542 1.41969 1.12875 1.01969 1.95542C0.073024 3.94209 0.419691 6.38209 2.05969 8.03542L7.64636 13.6088ZM16.6864 11.1954C18.7264 12.1421 21.593 11.4754 23.713 9.35542C26.2597 6.80875 26.753 3.15542 24.793 1.19542C22.8464 -0.751246 19.193 -0.271246 16.633 2.27542C14.513 4.39542 13.8464 7.26208 14.793 9.30208L2.71302 21.3821C2.46372 21.6314 2.32366 21.9695 2.32366 22.3221C2.32366 22.6747 2.46372 23.0128 2.71302 23.2621C2.96233 23.5114 3.30046 23.6514 3.65302 23.6514C4.00559 23.6514 4.34372 23.5114 4.59302 23.2621L12.8464 15.0354L21.0864 23.2754C21.2098 23.3989 21.3563 23.4968 21.5176 23.5636C21.6789 23.6304 21.8518 23.6648 22.0264 23.6648C22.2009 23.6648 22.3738 23.6304 22.5351 23.5636C22.6964 23.4968 22.8429 23.3989 22.9664 23.2754C23.0898 23.152 23.1877 23.0054 23.2545 22.8441C23.3213 22.6829 23.3557 22.51 23.3557 22.3354C23.3557 22.1608 23.3213 21.988 23.2545 21.8267C23.1877 21.6654 23.0898 21.5189 22.9664 21.3954L14.7264 13.1554L16.6864 11.1954Z"
          fill="#02E4C0"
        />
      </svg>
    ),
    title: "A single source of truth",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M12.5495 13.3949C14.0285 15.8549 13.811 18.7499 12.042 19.9199C10.273 21.0599 7.634 19.9949 6.1405 17.5349C4.6615 15.0749 4.8935 12.1499 6.6625 11.0099C8.4315 9.86988 11.0705 10.9349 12.5495 13.3949ZM15 23.6249C17.9 23.6249 18.625 22.4999 18.625 22.4999C18.625 22.4999 17.9 25.4999 15 25.4999C12.1 25.4999 11.375 22.5449 11.375 22.4999C11.375 22.4999 12.1 23.6249 15 23.6249ZM23.3375 11.0099C25.1065 12.1499 25.3385 15.0749 23.8595 17.5349C22.366 19.9949 19.727 21.0599 17.958 19.9199C16.189 18.7499 15.9715 15.8549 17.4505 13.3949C18.9295 10.9349 21.5685 9.86988 23.3375 11.0099ZM15 26.9999C18.625 26.9999 26.6 19.2899 26.6 13.4999C26.6 7.70988 21.3945 2.99988 15 2.99988C8.6055 2.99988 3.4 7.70988 3.4 13.4999C3.4 19.2899 11.375 26.9999 15 26.9999ZM15 -0.00012207C22.975 -0.00012207 29.5 6.05988 29.5 13.4999C29.5 19.6199 21.264 29.9999 15 29.9999C8.736 29.9999 0.5 19.6199 0.5 13.4999C0.5 6.05988 7.025 -0.00012207 15 -0.00012207Z"
          fill="#02E4C0"
        />
      </svg>
    ),
    title: "Intuitive interface",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="19" viewBox="0 0 42 19" fill="none">
        <path
          d="M32.275 4.03437e-05C29.815 4.03437e-05 27.4917 0.988885 25.8346 2.70171L13.825 13.7203C12.7317 14.8504 11.2796 15.4684 9.725 15.4684C6.53042 15.4684 3.91667 12.8021 3.91667 9.50002C3.91667 6.19798 6.53042 3.53163 9.725 3.53163C11.2796 3.53163 12.7317 4.14966 13.8933 5.3504L15.8238 7.1162L18.4375 4.75003L16.2508 2.79C15.3953 1.90238 14.3782 1.19881 13.2581 0.719939C12.1379 0.241065 10.9371 -0.0036143 9.725 4.03437e-05C4.63417 4.03437e-05 0.5 4.27327 0.5 9.50002C0.5 14.7268 4.63417 19 9.725 19C12.185 19 14.5083 18.0112 16.1654 16.2983L28.175 5.27977C29.2683 4.14966 30.7204 3.53163 32.275 3.53163C35.4696 3.53163 38.0833 6.19798 38.0833 9.50002C38.0833 12.8021 35.4696 15.4684 32.275 15.4684C30.7375 15.4684 29.2683 14.8504 28.1067 13.6496L26.125 11.8662L23.5625 14.2324L25.7492 16.21C26.607 17.0932 27.625 17.7927 28.7448 18.2684C29.8646 18.7442 31.0643 18.9868 32.275 18.9823C37.3658 18.9823 41.5 14.7268 41.5 9.50002C41.5 4.20263 37.3658 4.03437e-05 32.275 4.03437e-05Z"
          fill="#02E4C0"
        />
      </svg>
    ),
    title: "Or with rules",
    description:
      "When you add work to your Slate calendar we automatically calculate useful insights.",
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-start gap-3">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5">
        {icon}
      </div>
      <Title title={title} />
    </div>
    <Paragraph
      paragraph={description}
      className="!text-white/60 max-w-[280px]"
    />
  </div>
);

const Feature = () => {
  return (
    <section className="section">
      <div className="container-main section-inner">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5">
          <SecondHeadline text="FEATURES" />
          <SubHeading paragraph="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule." />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">
          <div className="flex justify-center">
            <Image
              src="/images/Frame 19.png"
              alt="Feature illustration showing chat interface"
              width={752}
              height={759}
              className="w-full max-w-[600px] h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
