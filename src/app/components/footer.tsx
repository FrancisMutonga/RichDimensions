import React from "react";
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-white p-6 mt-10  bottom-0 w-full ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          {/* Logo Section */}
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Company Logo"
              className="hover:opacity-80 transition-opacity duration-300"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold wmb-3">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="text-white text-sm hover:text-blue transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/explore"
                className="text-white text-sm hover:text-forest transition-colors"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white text-sm hover:text-forest transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us Section */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-3">Find Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Rich-Dimensions-Auctioneers/61575191037082/?rdid=QIUXe3JyCxMvSaMU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Z9SngnvqE%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.tiktok.com/search?q=rich.dimensions.a&t=1746598252202"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-white hover:text-blue-900" />
            </a>
            <a
              href="https://www.instagram.com/richdimensions_auctioneers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://wa.me/254755944533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Separator Line and Copyright Notice */}
      <div className="border-t border-white mt-6 pt-4">
        <div className="container mx-auto text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Rich Dimensions Auctioneers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
