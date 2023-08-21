import * as React from "react";
import Link from "next/link";
import logo from "public/images/logos/woodys-logo-orange.svg";
import Image from "next/image";
import InputBox from "./../../components/form/input/inputs";

const Footer = () => {
  const footerMenu = [
    {
      name: "What We Treat",

      children: [
        {
          name: "Erectile Disfunction",
          link: "#",
        },
        {
          name: "Testosterone Therapy",
          link: "#",
        },
        {
          name: "Supplements",
          link: "#",
        },
      ],
    },
    {
      name: "About Us",

      children: [
        {
          name: "Success Stories",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
      ],
    },
    {
      name: "Support",

      children: [
        {
          name: "FAQs",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
        {
          name: "Shipping & Returns",
          link: "#",
        },
      ],
    },
  ];
  const quickMenu = [
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "T&Cs",
      link: "#",
    },
    {
      name: "Terms of Sale",
      link: "#",
    },
    {
      name: "Pharma Terms",
      link: "#",
    },
    {
      name: "Sitemap",
      link: "#",
    },
  ];
  return (
    <footer className="text-yellow-50 bottom-0">
      <div className="bg-zinc-900 md:pt-11 md:pb-14 py-7">
        <div className="container">
          <div className="mb-8 md:mb-10.5 flex items-center">
            <Link href="#" className="inline-block align-middle logo" legacyBehavior>
              <Image src={logo} width="140" alt="woody-logo" />
            </Link>
            <div className="md:hidden ml-5">
              <span className="block font-bold">Woody’s Medical</span>
              <span className="block">123 Street Name, City, State, ZIP</span>
            </div>
          </div>
          <div className="md:flex justify-between gap-x-5">
            <div className="max-w-[386px] mb-8 md:mb-0">
              <h6 className="md:text-base font-semibold md:mb-3">
                Subscribe to our newsletter for news and promotions
              </h6>
              <div className="relative mb-10">
                <InputBox
                  type="email"
                  placeholder="Enter email address.."
                  error={true}
                  infoTextShow={true}
                  infoText={<>Please enter a valid email address</>}
                />
                <button
                  type="submit"
                  className="absolute top-3 right-0 w-5 text-sm focus:text-rose-500"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <div className="hidden md:block">
                <span className="block font-bold">Woody’s Medical</span>
                <span className="block">123 Street Name, City, State, ZIP</span>
              </div>
            </div>
            <div className="lg:grid grid-flow-col auto-cols-auto lg:gap-x-12 xl:gap-x-25">
              <div className="grid grid-flow-col auto-cols-auto gap-x-5 lg:gap-x-12 xl:gap-x-25 mb-5 lg:mb-0">
                {footerMenu.map((item, index) => (
                  <div className="mb-6 md:mb-0" key={index}>
                    <h6 className="font-semibold mb-2 md:mb-6">{item.name}</h6>
                    <ul className="footer-menu">
                      {item.children.map((footerMenu, index) => (
                        <li key={index}>
                          <Link href={footerMenu.link} legacyBehavior>{footerMenu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h6 className="font-semibold mb-2 md:mb-6">Follow Us</h6>
                <div className="social-icon">
                  <Link href="#" className="text-2xl" legacyBehavior>
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="#" className="text-lg" legacyBehavior>
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="#" className="text-2xl" legacyBehavior>
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 py-3 md:py-6.5">
        <div className="container">
          <div className="md:flex justify-between">
            <p className="font-semibold">©2023 Woodys Medical Limited</p>
            <ul className="quick-link">
              {quickMenu.map(({ name, link }, index) => {
                return (
                  <li key={index}>
                    <Link href={link} className="" legacyBehavior>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
