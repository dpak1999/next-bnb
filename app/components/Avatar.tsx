"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}
    />
  );
};

export default Avatar;
