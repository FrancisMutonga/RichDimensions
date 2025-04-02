"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Review {
  name: string;
  profilePic: string;
  testimony: string;
  date: string;
}

interface ReviewsProps {
  className?: string;
}

const Reviews: React.FC<ReviewsProps> = ({ className }) => {
  const reviews: Review[] = [
    {
      name: "James N.",
      profilePic: "/review1.jpg",
      testimony:
        "RDA Auctioneers handled my property sale efficiently and professionally. Their transparency and expertise made the process stress-free!",
      date: "March 12, 2024",
    },
    {
      name: "Cynthia W.",
      profilePic: "/review3.jpg",
      testimony:
        "I was impressed by their professionalism in asset recovery. They followed due process and kept me informed at every stage.",
      date: "Feb 27, 2024",
    },
    {
      name: "Michael O.",
      profilePic: "/review2.jpg",
      testimony:
        "The team at RDA Auctioneers made my first auction experience seamless. Their process is structured and fair. Highly recommend!",
      date: "Jan 15, 2024",
    },
    {
      name: "Grace M.",
      profilePic: "/reviewg4.jpg",
      testimony:
        "Needed to auction a commercial property, and RDA delivered! Their experience and market knowledge got me the best deal.",
      date: "Dec 5, 2023",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  return (
    <section className={`${className}`}>
      <div className="mx-auto p-4 w-full">
        <h2 className="text-2xl font-bold text-teal-700 text-center mb-12">What Our Clients Say</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review, index) => (
              <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] p-4">
                <div className="bg-gradient-to-b from-teal-700 to-red-400 shadow-xl rounded-xl p-[2.0px] flex flex-col justify-between transition-transform hover:scale-105">
                  <div className="bg-stone-300 w-full h-full rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.profilePic}
                        alt={`${review.name}'s profile`}
                        width={100}
                        height={100}
                        className="rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h3 className="text-xl text-teal-700 font-bold">{review.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">{`"${review.testimony}"`}</p>
                    <p className="text-sm text-red-400 text-right">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
