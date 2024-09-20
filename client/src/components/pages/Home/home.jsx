import React, { useEffect, useRef, useState } from "react";
import "../../css/index.css";
import background from "../../image/background.png";

import Header from "../../Header.jsx";
import HeroSection from "./HeroSection.js";
import About from "./about.jsx";
import Featured from "./featured.jsx";
import Artist from "./artist.jsx";
import Feedback from "./feedback.jsx";
import { Route, Routes } from "react-router-dom";
import Price from "./Price.jsx";
import Footer from "../../Footer.jsx";
import BookingPage from "../Booking/bookingPage.jsx";

const Home = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const artistRef = useRef(null);
  const priceRef = useRef(null);
  const feedbackRef = useRef(null);
  const [activeSection, setActiveSection] = useState("Header");

  // Kiểm tra người dùng click hay scroll
  const [isScrolling, setIsScrolling] = useState(false);

  // Bắt sự kiện khi người dùng bắt đầu scroll

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Function xử lý scroll khi đến 1 section nào đó sẽ lưu tên section vào currentSection
  const handleScroll = () => {
    if (isScrolling) return; // Nếu isScrolling = true thì sẽ không thực hiện hàm này

    const sections = document.querySelectorAll("section");
    let currentSection = "Header";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);
  };

  // Function scroll đến section khi click trên navbar
  const scrollToSection = (section) => {
    // Khi người dùng click trên navbar và thực thi hàm này sẽ chuyển biến ktra thành true
    // Để tránh việc thực thi 2 hàm cùng lúc
    setIsScrolling(true);

    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    } else if (section === "products" && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    } else if (section === "artist" && artistRef.current) {
      artistRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    } else if (section === "price" && priceRef.current) {
      priceRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    } else if (section === "feedback" && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveSection("Header");
    }

    // Sau khi click trên navbar xong thì chờ 1000ms và set biến ktra lại thành false
    setTimeout(() => setIsScrolling(false), 1000);
  };
  return (
    <div className="Mainlayout">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* Nếu reponsive có kích thước thừ 768px trở lên thì sẽ hiện thì header và tiêu đề này */}
              <div
                className="layout relative w-full flex-col md:flex hidden"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Header
                  activeSection={activeSection}
                  onNavigate={scrollToSection}
                  setActiveSection={setActiveSection}
                />

                {/* Slogan và thông tin liên hệ của website */}
                <div className="body relative px-12 lg:px-24 flex w-full pb-0 md:pb-32 py-6 z-10 justify-center">
                  <HeroSection />
                </div>
              </div>
              {/* Nếu responsive dưới 768px thì sẽ ẩn div phía trên và sử dụng div phia đưới đây */}
              <div className="Mainlayout relative w-full flex-col md:hidden flex">
                <div className="body relative flex w-full px-12 pb-6 md:pb-32 py-6 z-10 justify-center">
                  <HeroSection />
                </div>
              </div>
              <section
                id="about"
                ref={aboutRef}
                className="Mainlayout px-12 lg:px-24 relative py-8 w-full flex-col flex"
              >
                {/* Section về Neki's Tattoo */}
                <About />
              </section>
              <section
                id="products"
                ref={productsRef}
                className=" px-12 lg:px-24 relative py-8 w-full flex-col flex"
              >
                {/* TranSection sản phẩm tiêu biểu*/}
                <Featured />
              </section>
              <section
                id="artist"
                ref={artistRef}
                className="px-12 lg:px-24 relative py-8 w-full flex-col flex"
              >
                {/* Section thợ xăm*/}
                <Artist />
              </section>
              <section
                id="price"
                ref={priceRef}
                className="px-12 lg:px-24 relative py-8 w-full flex-col flex"
              >
                {/* Section bảng giá*/}
                <Price />
              </section>
              <section
                id="feedback"
                ref={feedbackRef}
                className="px-12 lg:px-24 relative py-8 w-full flex-col flex"
              >
                {/* Section feedback khách hàng*/}
                <Feedback />
              </section>{" "}
            </div>
          }
        ></Route>
        <Route path="booking" element={<BookingPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
