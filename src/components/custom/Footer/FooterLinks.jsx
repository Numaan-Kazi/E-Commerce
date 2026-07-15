import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export function FooterLinks({ Heading, Links = [] }) {
  // const navigate = useNavigate();
  const linksClassName =
    "cursor-pointer hover:text-blue-500 transition-all duration-700";
  return (
    <div className="space-y-2">
      <h2 className="text-gray-300 text-lg font-semibold tracking-wide uppercase">
        {Heading}
      </h2>
      <ul className="space-y-2 text-md text-gray-200">
        {Links.map((link, index) => (
          <Link key={index} to={link?.path}>
            <li className={linksClassName}>{link?.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
