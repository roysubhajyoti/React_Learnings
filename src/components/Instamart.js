import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className=" border-2 border-black ">
      <div className="flex justify-between bg-purple-300 h-10 hover:bg-purple-600 hover:text-white">
        <h1 className="font-bold text-xl">{title}</h1>

        {isVisible ? (
          <button
            className=" rounded-md p-2 w-20 "
            onClick={() => {
              setIsVisible(false);
            }}
          >
            <IoIosArrowUp />
          </button>
        ) : (
          <button
            className="  rounded-md p-2 w-20"
            onClick={() => {
              setIsVisible(true);
            }}
          >
            <IoIosArrowDown />
          </button>
        )}
      </div>
      {isVisible && (
        <p className="bg-purple-100 text-lg leading-tight p-5">{description}</p>
      )}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div className="w-full min-h-screen p-5  flex flex-col gap-2">
      <h1 className="font-bold text-3xl text-center">INSTAMART</h1>
      <Section
        title={"About Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Facilities At Instamart"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
        }
        isVisible={visibleSection === "facilities"}
        setIsVisible={() => setVisibleSection("facilities")}
      />

      <Section
        title={"Careers"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, "
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
