import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { list } from "../utils/constants";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkMode = useSelector((store) => store.app.isDarkMode);

  const class1 = isMenuOpen
    ? "flex ml-40 fixed w-screen -z-10"
    : "flex fixed pl-4 w-screen -z-10";

  const class2 = isDarkMode ? "bg-[#0f0f0f]" : "bg-white";

  const combinedClass = `${class1} ${class2}`;

  return (
    <div className="mt-20 ml-2">
      <div
        className={combinedClass}
      >
        {list.map((item, index) => (
          <ButtonList name={item} key={index} />
        ))}
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
