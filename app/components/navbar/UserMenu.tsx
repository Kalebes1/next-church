"use client";
import { useCallback, useState } from "react";
import clsx from "clsx";
import MenuItem from "./MenuItem";

import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Avatar from "../Avatar";

const NavBarItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="flex w-auto py-2 transition-all">
      <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition ">
        <AiOutlineMenu size={20} onClick={toggleOpen} />
        <Avatar src={null} />
      </div>
      <div
        className={clsx(
          " fixed h-full w-screen bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
          isOpen && `translate-x-0`
        )}
      >
        :
        <div className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 md:w-[25%] w-[60%] flex md:text-xl text-lg">
          <IoCloseOutline
            onClick={toggleOpen}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />
          <MenuItem onClick={() => {}} label="Início" />
          <MenuItem onClick={() => {}} label="Adexp" />
          <MenuItem onClick={() => {}} label="Localização" />
          <MenuItem onClick={() => {}} label="Eventos" />
          <MenuItem onClick={() => {}} label="Conteúdos" />
        </div>
      </div>
    </div>
  );
};

export default NavBarItems;
