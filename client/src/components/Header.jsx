import React, { useEffect } from "react";
import More from "./svg/more";
import { Link } from "react-router-dom";

const Header = ({ activeSection, onNavigate }) => {
  // Bắt sự kiện khi người dùng scroll sẽ gọi đến function isSticky
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // Function isSticky kiểm tra vị trí cuộn trang.
  // Khi người dùng bắt đầu scroll và cách top 1px thì sẽ thêm 'is-Sticky' và phần tử có className="header-container" được lưu vào biến header và nếu các top dưới 1 thì xóa "is-Sticky đi"
  const isSticky = (e) => {
    const header = document.querySelector(".header-container");
    const scrollTop = window.scrollY;
    scrollTop >= 1
      ? header.classList.add("is-Sticky")
      : header.classList.remove("is-Sticky");
  };

  return (
    <header className="header-container flex w-full px-6 sm:px-12 py-6 z-10 justify-center">
      <div className="container w-full flex items-center">
        <a
          href="/"
          className="logo w-3/4 md:w-2/4 lg:w-1/4 md:text-[32px] text-[24px]  text-[#FEAE3F]"
        >
          Neki's Tattoo
        </a>
        <div className="navbar md:w-2/4 lg:w-3/4 pl-6 md:flex justify-end hidden">
          <ul className="navbar-list flex flex-wrap gap-6 text-[14px] justify-center font-bold">
            <li
              className={`${
                activeSection === "Header" ? "active" : ""
              } cursor-pointer`}
              onClick={() => onNavigate("Header")}
            >
              Trang chủ
            </li>

            <li className="">
              <Link
                to="#"
                onClick={() => onNavigate("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                Về Neki's Tattoo
              </Link>
            </li>

            <li className="">
              <Link
                to="#"
                onClick={() => onNavigate("products")} // => scrollToSection("products")
                className={activeSection === "products" ? "active" : ""}
              >
                Tác phẩm
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                onClick={() => onNavigate("artist")}
                className={activeSection === "artist" ? "active" : ""}
              >
                Thợ xăm
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                onClick={() => onNavigate("price")}
                className={activeSection === "price" ? "active" : ""}
              >
                Bảng giá
              </Link>
            </li>
            <li className="">
              <Link
                to="#"
                onClick={() => onNavigate("feedback")}
                className={activeSection === "feedback" ? "active" : ""}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown-menu w-1/4 md:relative md:hidden flex justify-end">
          <More />
        </div>
      </div>
    </header>
  );
};

export default Header;
