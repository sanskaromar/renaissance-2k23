import { React, useState, useEffect } from "react";
import { RiArrowDropUpLine } from "react-icons/ri";

const ButtonBacktoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHideFrom = 700;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) !isVisible && setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    isVisible && (
      <>
        <div className="TopButton flex w-full  lg:items-end justify-end pr-8 pb-5 fixed bottom-2 right-2">
          <button
            className="bg-[#CAD2C5] h-[47px] w-[47px] flex items-center justify-center shadow-2xl"
            onClick={ScrollToTop}
          >
            <RiArrowDropUpLine className="text-[30px]" />
          </button>
        </div>
      </>
    )
  );
};

export default ButtonBacktoTop;
