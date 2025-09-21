import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from './styles.module.css'

// Define the shape of each slide's data
interface SlideData {
  id: number;
  bgColor: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

// Define the props for the Carousel component
interface CarouselProps {
  data: SlideData[];
  activeSlide: number;
}

// Define the props for the SliderContent component
interface SliderContentProps {
  bgColor: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ data, activeSlide: initialActiveSlide }) => {
  const [activeSlide, setActiveSlide] = useState<number>(initialActiveSlide);

  const next = () => {
    if (activeSlide < data.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prev = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const getStyles = (index: number): React.CSSProperties => {
    if (activeSlide === index) {
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    } else if (activeSlide - 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    } else if (activeSlide + 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    } else if (activeSlide - 2 === index) {
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    } else if (activeSlide + 2 === index) {
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    } else if (index < activeSlide - 2) {
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    } else {
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
    }
  };

  return (
    <>
      {/* carousel */}
      <div className="slideC">
        {data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft as IconProp}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight as IconProp}
          color="#fff"
          size="2x"
        />
      </div>
    </>
  );
};

const SliderContent: React.FC<SliderContentProps> = ({ icon, title, desc }) => {
  return (
    <div className="sliderContent">
      {icon}
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Carousel;