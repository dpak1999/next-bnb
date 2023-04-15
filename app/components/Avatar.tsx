"use client";

import Image from "next/image";
import { FC } from "react";

const Avatar: FC<{ src?: string | null | undefined }> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={
        src || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
      }
    />
  );
};

export default Avatar;
