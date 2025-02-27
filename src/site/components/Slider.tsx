import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";

type SliderProps = {
  elements: ReactNode[];
  interval?: number;
  className?: string;
};

const ITEMS_PER_PAGE = 2;

export const Slider: React.FC<SliderProps> = ({
  elements,
  interval = 5000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);
  const totalPages = Math.ceil(elements.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!hovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [hovered, totalPages, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="flex flex-col gap-4 w-full h-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full flex">
        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{
            x: `calc(-${currentIndex * 100}% - ${currentIndex * 16}px)`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ width: "100%", display: "flex" }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full flex gap-4 justify-center items-center shrink-0"
            >
              {elements
                .slice(
                  pageIndex * ITEMS_PER_PAGE,
                  (pageIndex + 1) * ITEMS_PER_PAGE
                )
                .map((element, idx) => (
                  <div className={className} key={idx}>
                    {element}
                  </div>
                ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-full flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 border-3 border-gray-400 rounded-full bg-gray-400 ${
              currentIndex === index ? "bg-gray-800" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
