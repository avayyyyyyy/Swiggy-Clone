import { useEffect, useState, useRef } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import "/src/index.css";

const TopHero = () => {
  const [category, setCategory] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    async function fetchCategory() {
      try {
        let raw = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        let data = await raw.json();
        setCategory(data.categories || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategory();
  }, []);

  const scrollMenu = (direction) => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = 200;
      if (direction === "left") {
        scrollContainer.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <div className="h-[80px]"></div>
      <div className="flex justify-center flex-col items-center m-8 gap-3 p-3">
        <div className="w-[92%] flex justify-between">
          <div>
            <h6 className="font-bold text-2xl "> What&apos;s on your mind?</h6>
          </div>
          <div className="flex items-center gap-2 hover:cursor-pointe">
            <span
              className="hover:text-orange-500 transition-all hover:cursor-pointer text-2xl"
              onClick={() => scrollMenu("left")}
            >
              <FaRegArrowAltCircleLeft />
            </span>
            <span
              className="hover:text-orange-500 transition-all hover:cursor-pointer text-2xl"
              onClick={() => scrollMenu("right")}
            >
              <FaRegArrowAltCircleRight />
            </span>
          </div>
        </div>
        <div className="w-[92%] overflow-x-auto scroll-smooth" ref={scrollRef}>
          <div className="flex justify-start gap-3 w-fit ">
            {category.map((e) => (
              <div
                className="select-none flex flex-col justify-evenly items-center font-medium p-2 w-40 h-28 text-[.9em] rounded-md hover:cursor-pointer"
                key={e.idCategory}
              >
                <img src={e.strCategoryThumb} alt="" />
                {e.strCategory}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHero;
