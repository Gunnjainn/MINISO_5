"use client";

import { useState } from "react";
import Image from "next/image";

const NewsletterAndTestimonial = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="my-5">
        <div className="flex flex-col md:flex-row justify-around flex-wrap">
          {/* Newsletter */}
          <div className="w-full md:w-[30%] text-center px-4">
            <h2 className="text-[20px] font-montserrat font-semibold text-[#333333] p-10 section-heading">
              THE NEWSLETTER
            </h2>
            <p><b>Get the latest news &amp; updates from Miniso</b></p>
            <input
              type="email"
              placeholder="Enter email"
              className="border p-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />
            <button className="bg-red-600 text-white px-4 py-2">Submit</button>
          </div>

          {/* Testimonial */}
          <div className="w-full md:w-[70%] text-center px-4">
            <h2 className="text-[30px] font-montserrat font-semibold text-[#333333] p-10 section-heading">
              WHAT CUSTOMER SAYS
            </h2>
            <Image src="/avatar.webp" alt="avatar icon" width={96} height={96} className="w-24 h-auto mx-auto" />
            <br />
            <h3 className="font-bold">SHIVANI</h3>
            <p>I am always thrilled to shop at MINISO. Quality products, cute designs and great prices!</p>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default NewsletterAndTestimonial;
