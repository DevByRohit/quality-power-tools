import { useEffect, useRef } from "react";
import "./HeroCarousel.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
// import thumbnail from "../../../public/Thumbnail.jpeg";
// import blower from "../../../public/Thumbnail.jpeg"
// import butterfly1 from "../../../public/butterfly1.jpeg";
// import butterfly2 from "../../../public/butterfly2.jpg";
// import crow from "../../../public/crow.jpg";
// import eagel1 from "../../../public/eagel1.jpg";
// import eagel2 from "../../../public/eagel3.jpg";
// import owl1 from "../../../public/owl1.jpg";
// import owl2 from "../../../public/owl2.jpg";

export default function HeroCarousel() {
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const timerRef = useRef(null);
  const autoNextTimerRef = useRef(null);
  const timeBarRef = useRef(null);

  const images = [
    {
      title: "SLIDER",
      name: "OWL",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: blower,
    },
    {
      title: "SLIDER",
      name: "EAGLE",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: owl2,
    },
    {
      title: "SLIDER",
      name: "CROW",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: crow,
    },
    {
      title: "SLIDER",
      name: "EAGEL ONE",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: eagel1,
    },
    {
      title: "SLIDER",
      name: "EAGEL TWO",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: eagel2,
    },
    {
      title: "SLIDER",
      name: "BUTTERFLY",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: butterfly1,
    },
    {
      title: "SLIDER",
      name: "BUTTERFLY",
      des: "Incepted in the year 2009, at Ahmadabad (Gujarat, India), we are leading Manufacturer and Supplier of a commendable array of Power Tools (Hand Tools).",
      img: butterfly2,
    },
  ];

  // Reset time animation bar
  const resetTimeBar = () => {
    const bar = timeBarRef.current;
    if (!bar) return;

    bar.style.animation = "none";
    bar.offsetHeight; // trigger reflow
    bar.style.animation = "runningTime 7s linear 1 forwards";
  };

  const showSlider = (type) => {
    const list = listRef.current;
    const carousel = carouselRef.current;

    if (!list || !carousel) return;

    const items = list.querySelectorAll(".item");

    if (type === "next") {
      list.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      list.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      carousel.classList.remove("next");
      carousel.classList.remove("prev");
    }, timeRunning);

    clearTimeout(autoNextTimerRef.current);
    autoNextTimerRef.current = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    resetTimeBar();
  };

  useEffect(() => {
    autoNextTimerRef.current = setTimeout(
      () => showSlider("next"),
      timeAutoNext
    );
    resetTimeBar();
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(autoNextTimerRef.current);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {images.map((item, i) => (
          <div
            key={i}
            className="item"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>

              <div className="hero-btns">
                <button className="btn btn-14 btn-contact">
                  <MdContactPhone
                    size={22}
                    className="btn-icon btn-icon--contact"
                  />
                  Contact us
                </button>

                <button className="btn btn-14 btn-explore">
                  Explore more
                  <FaArrowRightLong
                    size={22}
                    className="btn-icon btn-icon--arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev" onClick={() => showSlider("prev")}>
          &lt;
        </button>
        <button className="next" onClick={() => showSlider("next")}>
          &gt;
        </button>
      </div>

      <div className="timeRunning" ref={timeBarRef}></div>
    </div>
  );
}
