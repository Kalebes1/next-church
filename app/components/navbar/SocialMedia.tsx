"use client";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";

import MenuItem from "./MenuItem";

const SocialMedia = () => {
  return (
    <div>
      <div className="w-fullpy-2 cursor-pointer text-2xl transition-all max-[500px]:hidden">
        <div className="flex items-center justify-between text-[#122140] ">
          <MenuItem onClick={() => {}} icon={TbBrandYoutubeFilled} />
          <MenuItem onClick={() => {}} icon={SiFacebook} />
          <MenuItem onClick={() => {}} icon={SiInstagram} />
          <MenuItem onClick={() => {}} icon={SiTiktok} />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
