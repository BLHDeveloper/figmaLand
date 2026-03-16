import React from "react";
import Link from "@/components/Link";

const sections = [
  { title: "Fingertip", links: ["Home", "Examples", "Pricing", "Updates"] },
  { title: "Resources", links: ["Home", "Examples", "Pricing", "Updates"] },
  { title: "About", links: ["Home", "Examples", "Pricing", "Updates"] },
];

const Footer = () => {
  return (
    <footer className="section border-t border-white/10">
      <div className="container-main">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Link Columns */}
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              <span className="text-lg font-['font-med']">{section.title}</span>
              <div className="flex flex-col gap-3">
                {section.links.map((link, idx) => (
                  <Link key={idx} href="#" text={link} className="!text-white/50 hover:!text-white !text-left !p-0" />
                ))}
              </div>
            </div>
          ))}

          {/* Contact & Social */}
          <div className="flex flex-col gap-6">
            <span className="text-lg font-['font-med']">Contact</span>
            <div className="flex flex-col gap-4">
              {/* Location */}
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 46 47" fill="none" className="flex-shrink-0">
                  <path d="M21.8885 41.8806C22.2129 42.1123 22.6015 42.2368 23.0001 42.2368C23.3987 42.2368 23.7874 42.1123 24.1118 41.8806C24.6945 41.4686 38.389 31.5805 38.3335 19.2371C38.3335 10.7827 31.4545 3.90381 23.0001 3.90381C14.5457 3.90381 7.66679 10.7827 7.66679 19.2276C7.61121 31.5805 21.3058 41.4686 21.8885 41.8806Z" fill="white" />
                </svg>
                <span className="text-sm text-white/50">7480 Mockingbird Hill</span>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 36" fill="none" className="flex-shrink-0">
                  <path d="M23.3333 2.02881H11.6666C9.24579 2.02881 7.29163 3.98298 7.29163 6.40381V29.7371C7.29163 32.158 9.24579 34.1121 11.6666 34.1121H23.3333C25.7541 34.1121 27.7083 32.158 27.7083 29.7371V6.40381C27.7083 3.98298 25.7541 2.02881 23.3333 2.02881Z" fill="white" />
                </svg>
                <span className="text-sm text-white/50">(239) 555-0108</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {/* Twitter */}
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 41 42" fill="none">
                  <path d="M37.145 10.2488C35.9202 10.7771 34.5873 11.1574 33.2144 11.3055C34.6398 10.4586 35.7072 9.12084 36.2164 7.54301C34.8788 8.33869 33.4136 8.89663 31.8855 9.19208C31.2469 8.50935 30.4745 7.96545 29.6165 7.59428C28.7585 7.22311 27.8332 7.03262 26.8983 7.03468C23.1159 7.03468 20.0739 10.1007 20.0739 13.8631C20.0739 14.3915 20.1379 14.9198 20.242 15.4281C14.5783 15.1319 9.52705 12.4262 6.16887 8.28349C5.55697 9.32863 5.23632 10.5186 5.24026 11.7297C5.24026 14.0993 6.44505 16.1886 8.28224 17.4174C7.19955 17.3748 6.14222 17.0772 5.19624 16.5489V16.6329C5.19624 19.9511 7.54176 22.7009 10.6678 23.3333C10.0808 23.4857 9.47704 23.5637 8.87062 23.5654C8.42633 23.5654 8.00606 23.5214 7.58178 23.4613C8.44634 26.1671 10.964 28.1324 13.9619 28.1964C11.6164 30.0336 8.67849 31.1143 5.48843 31.1143C4.91605 31.1143 4.38771 31.0943 3.83936 31.0303C6.86532 32.9715 10.4556 34.0922 14.3222 34.0922C26.8743 34.0922 33.7428 23.6935 33.7428 14.6676C33.7428 14.3714 33.7428 14.0753 33.7227 13.7791C35.0516 12.8064 36.2164 11.6016 37.145 10.2488Z" fill="white" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 42 42" fill="none">
                  <path d="M36.2103 4.55322H6.75117C6.04271 4.55322 5.47034 5.12559 5.47034 5.83405V35.2932C5.47034 36.0016 6.04271 36.574 6.75117 36.574H36.2103C36.9187 36.574 37.4911 36.0016 37.4911 35.2932V5.83405C37.4911 5.12559 36.9187 4.55322 36.2103 4.55322ZM32.5119 13.8993H29.9542C27.9489 13.8993 27.5607 14.8519 27.5607 16.2528V19.3388H32.3478L31.7234 24.17H27.5607V36.574H22.5694V24.174H18.3947V19.3388H22.5694V15.7765C22.5694 11.6418 25.0951 9.38836 28.7855 9.38836C30.5546 9.38836 32.0716 9.52045 32.5159 9.58048V13.8993H32.5119Z" fill="white" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="opacity-50 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 42 42" fill="none">
                  <path d="M36.1981 4.55322H6.73896C6.0305 4.55322 5.45813 5.12559 5.45813 5.83405V35.2932C5.45813 36.0016 6.0305 36.574 6.73896 36.574H36.1981C36.9065 36.574 37.4789 36.0016 37.4789 35.2932V5.83405C37.4789 5.12559 36.9065 4.55322 36.1981 4.55322ZM14.9563 31.8389H10.2052V16.557H14.9563V31.8389ZM12.5828 14.4677C11.5 14.4677 10.6355 13.2349 10.6355 11.7139C10.6355 11.1692 11.0141 10.6368 11.4 10.1839C11.7 9.73109 12.1 9.37813 12.6 9.1697C13.1 8.96127 13.6 8.90674 14.0 9.013C14.5 9.11925 15.0 9.38152 15.3 9.76665C15.7 10.1518 15.9 10.6424 16.0 11.1766C16.1 11.7108 16.1 12.2645 15.9 12.7677C15.7 13.2709 15.3 13.701 14.9 14.0036C14.5 14.3061 14.0 14.4677 14.9563 14.4677H12.5828ZM32.7438 31.8389H27.9968V24.4061C27.9968 22.633 27.9647 20.3555 25.5272 20.3555C23.0576 20.3555 22.6773 22.2847 22.6773 24.278V31.8389H17.9342V16.557H22.4892V18.6464H22.5532C23.1856 17.4456 24.7346 16.1768 27.0481 16.1768C31.8593 16.1768 32.7438 19.3428 32.7438 23.4575V31.8389Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
