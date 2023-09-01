import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";
import Products from "@/components/Products";
import { Categories } from "@/components/Categories";
import ReviewCard from "@/components/ReviewCard";

const page = () => {
  return (
    <div>
      <div className="pt-10">
        <Hero />

        <div className="mt-2 mb-3">
          <Header title={"Categories"} />
        </div>
        <Categories />

        <div className="mt-8 mb-3">
          <Header title={"Products"} />
        </div>
        <Products />

        <div className="mt-10 mb-3">
          <Header title={"Reviews"} />
        </div>
        <ReviewCard
          img={
            "https://images.pexels.com/photos/3229336/pexels-photo-3229336.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          title="Top Quality"
          desc="Product Quality: I was quite pleased with the quality of the t-shirts I ordered from this website. The fabrics used were comfortable and had a good weight to them. The printing and designs were well-executed, and the colors remained vibrant even after several washes. It's evident that attention to detail and a commitment to delivering a quality product are important to your brand."
        />
        <ReviewCard
          img={
            "https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          title="Top Quality"
          desc="Product Quality: I was quite pleased with the quality of the t-shirts I ordered from this website. The fabrics used were comfortable and had a good weight to them. The printing and designs were well-executed, and the colors remained vibrant even after several washes. It's evident that attention to detail and a commitment to delivering a quality product are important to your brand."
        />
      </div>
    </div>
  );
};

export default page;
