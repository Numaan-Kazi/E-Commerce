import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FooterLinks } from "@/components/custom/Footer/FooterLinks";
import { Link } from "react-router-dom";
import { About, Connect_with_Us, Help_Center } from "@/Data/staticData";

export function Footer() {
  return (
    <footer className="bg-[#191919] p-10">
      <div className="grid grid-cols-4 px-20">
        <FooterLinks Heading="About" Links={About} />
        <FooterLinks Heading="Help Center" Links={Help_Center} />
        <FooterLinks Heading="Connect with Us" Links={Connect_with_Us} />

        <div className="border-l border-gray-700 pl-6 space-y-3 text-gray-300 leading-relaxed">
          <p className="text-gray-300 text-lg font-semibold tracking-wide uppercase">
            Registered Office Address:
          </p>

          <span className="block text-sm">
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </span>

          <span className="block">
            CIN : U51109KA2012PTC066107 <br />
            Telephone:{" "}
            <span className="text-blue-500">91565538381 / 9191919191</span>
          </span>
        </div>
      </div>
      <hr className="border-t border-gray-700 my-8" />

      <div className="flex items-center justify-between">
        <span className="flex gap-5 text-white">
          <Link to="https://www.whatsapp.com/" target="_blank">
            <BsWhatsapp
              size={22}
              className="cursor-pointer hover:bg-green-700 hover:rounded-4xl transition-colors"
            />
          </Link>
          <Link to="https://www.instagram.com/nk.__014" target="_blank">
            <SiInstagram
              size={22}
              className="cursor-pointer  transition-colors hover:bg-pink-500"
            />
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <FiTwitter
              size={22}
              className="cursor-pointer hover:bg-blue-500  transition-colors"
            />
          </Link>
        </span>
        <p className="text-white text-sm font-medium">
          © 2025 Your Company. All rights reserved.
        </p>
        <span className="grid grid-cols-3 gap-3">
          <div className="w-20 h-7 bg-white/95  flex items-center justify-center">
            <p className="text-[#5f259f] font-bold text-sm">PhonePe</p>
          </div>

          <div className="w-20 h-7 bg-white/95  flex items-center justify-center">
            <p className="text-[#00baf2] font-bold text-sm">
              Pay<span className="text-[#002970]">tm</span>
            </p>
          </div>

          <div className="w-20 h-7 bg-white/95  flex items-center justify-center ">
            <p className="text-[#5f6368] font-bold text-sm">Google Pay</p>
          </div>
        </span>
      </div>
    </footer>
  );
}
