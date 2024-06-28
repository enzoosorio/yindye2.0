"use client";

import { useEffect, useState } from "react";
import VideoSofiaFarro from "../../public/video/video-sofia-farro-hero.mp4";
import VideoMarly from "/public/video/video-marly.mp4";

export default function ImagesModels() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-11/12 mx-auto md:w-full 2xl:w-[1080px]  flex flex-col lg:flex-row justify-between items-center gap-10 mb-10 mt-14 ">
      <div className="flex items-center justify-center w-3/4 lg:w-full lg:h-[450px]">
        <video loop autoPlay muted className="rounded-xl h-full">
          <source
            src={"https://tarpuy-resources-storage.s3.amazonaws.com/video1.mp4"}
            type="video/mp4"
          />
          gif-farro-sofia
        </video>
      </div>
      <div className="flex items-center justify-center w-3/4 lg:w-full lg:h-[450px]">
        <video loop autoPlay muted className="rounded-xl h-full">
          <source
            src={"https://tarpuy-resources-storage.s3.amazonaws.com/video2.mp4"}
            type="video/mp4"
          />
          gif-marley
        </video>
      </div>
    </section>
  );
}
