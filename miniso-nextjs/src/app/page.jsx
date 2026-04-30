import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TopCategories from "@/components/TopCategories";
import NewArrivals from "@/components/NewArrivals";
import TopSellers from "@/components/TopSellers";
import AboutMiniso from "@/components/AboutMiniso";
import VideoBanner from "@/components/VideoBanner";
import NewsletterAndTestimonial from "@/components/NewsletterAndTestimonial";
import LatestBlogs from "@/components/LatestBlogs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="m-0 font-roboto">
      <Header />
      <Navbar />
      <HeroBanner />
      <TopCategories />
      <NewArrivals />
      <TopSellers />
      <AboutMiniso />
      <VideoBanner />
      <NewsletterAndTestimonial />
      <LatestBlogs />
      <Footer />
    </div>
  );
}
