import VideoSofiaFarro from "@/assets/video/video-sofia-farro-hero.mp4";
import VideoMarly from "@/assets/video/video-marly.mp4";

export default function ImagesModels() {
  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] grid grid-cols-2 grid-rows-5 gap-x-2 lg:gap-x-10 gap-y-10 mb-10 mt-14 ">
      <div className="col-span-1 row-span-4 flex items-center justify-center">
        <video loop autoPlay className="rounded-xl h-[420px]">
          <source src={VideoSofiaFarro} type="video/mp4" />
          gif-farro-sofia
        </video>
      </div>
      <div className="col-span-1 row-span-4 flex items-center justify-center ">
        <video loop autoPlay className="rounded-xl h-[480px]">
          <source src={VideoMarly} type="video/mp4" />
          gif-marley
        </video>
      </div>
    </section>
  );
}
