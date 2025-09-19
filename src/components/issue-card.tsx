"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";

type IssueCardProps = {
  index: number;
  title: string;
  desc: string;
  img: string;
  href: string;
};

export default function IssueCard({
  index,
  title,
  desc,
  img,
  href,
}: IssueCardProps) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!imgRef.current) return;

    let x = 0;
    let y = 0;

    switch (index) {
      case 0:
        x = -250;
        break;
      case 1:
        y = -250;
        break;
      case 2:
        y = 250;
        break;
      case 3:
        x = 250;
        break;
      default:
        x = 0;
        y = 0;
    }

    gsap.to(imgRef.current, {
      x,
      y,
      rotateX: 15,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      transformOrigin: "bottom center",
      onComplete: () => {
        router.push(href);
      },
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="issue-card bg-transparent text-center w-md cursor-pointer relative"
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
    >
      <h3 className="font-bold text-xl text-red-700 text-nowrap">{title}</h3>
      <p className="text-gray-700 mt-2 text-sm text-nowrap">{desc}</p>
      <motion.img
        ref={imgRef}
        src={img}
        alt={title}
        className="w-80 h-44 object-cover rounded-lg mt-4 mx-auto relative"
      />
    </motion.div>
  );
}
