import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import BrandLogo from "./BrandLogo";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { smoother } from "./utils/gsapSmoother";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.current?.scrollTop(0);
    smoother.current?.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.matchMedia("(min-width: 1025px)").matches) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          smoother.current?.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a
          href="/#"
          className="navbar-brand"
          aria-label="MCT — home"
          data-cursor="disable"
        >
          <BrandLogo variant="navbar" />
        </a>
        <a
          href="mailto:chaturvedtejasmarati22@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          chaturvedtejasmarati22@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
