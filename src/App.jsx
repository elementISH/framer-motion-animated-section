import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import Text from "./components/Text";
import Terminal from "./components/Terminal";
import { useState } from "react";

function App() {
  const { scrollY } = useScroll({ offset: [0, 0] });
  const [stickyTranslateX, setStickyTranslateX] = useState(0);
  const [triggeredTexts, setTriggeredTexts] = useState([]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    document.querySelectorAll(".text-element").forEach((textElement) => {
      const textElementTop =
        textElement.getBoundingClientRect().top + window.scrollY;
      const textElementBottom =
        textElement.getBoundingClientRect().bottom + window.scrollY;

      const isInView = latest >= textElementTop && latest <= textElementBottom;
      const isTriggered = triggeredTexts.includes(textElement.id);

      if (isInView && !isTriggered) {
        setStickyTranslateX((prev) => (prev === 0 ? 100 : 0));
        setTriggeredTexts((prev) => [...prev, textElement.id]);
      } else if (!isInView && isTriggered) {
        setTriggeredTexts((prev) => prev.filter((id) => id !== textElement.id));
      }
    });
  });

  return (
    <>
      <div className="demo-page-content--upper w-screen h-screen bg-gray-400 grid justify-center items-center">
        <h1 className="text-4xl font-bold">DEMO CONTENT</h1>
      </div>
      <div className="demo-page-content--upper w-screen h-screen bg-gray-400 grid justify-center items-center">
        <h1 className="text-4xl font-bold">DEMO CONTENT</h1>
      </div>
      <div className="animation-section w-screen bg-gray-50 relative pt-20 h-full">
        <motion.div
          className={`sticky w-[50vw] top-0 z-10`}
          animate={{ transform: `translateX(${stickyTranslateX}%)` }}
        >
          <Terminal />
        </motion.div>
        <div className="flex flex-col gap-96 w-full px-10 -translate-y-96">
          <Text odd={true} id={"first_text"} className="text-element" />
          <Text odd={false} id={"second_text"} className="text-element" />
          <Text odd={true} id={"third_text"} className="text-element" />
          <Text odd={false} id={"fourth_text"} className="text-element" />
        </div>
      </div>
      <div className="demo-page-content--lower w-screen h-screen bg-gray-400 grid justify-center items-center">
        <h1 className="text-4xl font-bold">DEMO CONTENT</h1>
      </div>
      <div className="demo-page-content--lower w-screen h-screen bg-gray-400 grid justify-center items-center">
        <h1 className="text-4xl font-bold">DEMO CONTENT</h1>
      </div>
    </>
  );
}

export default App;
