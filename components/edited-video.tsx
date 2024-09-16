import Youtube from "react-youtube";
import { Separator } from "./ui/seprator";

export const EditVideo = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
    width: "480",
    height: "270",
    className: "rounded-xl",
  };
  return (
    <div className="text-center">
      <h1 className="bp-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Hello world
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          <Youtube opts={videoOptions} videoId="dEpWeHI1jLQ" />
          <Youtube opts={videoOptions} videoId="F5qKc3sG9mo" />
          <Youtube opts={videoOptions} videoId="9CNG6j47cq4" />
          <Youtube opts={videoOptions} videoId="s3vE5WERO6I" />
        </div>
      </div>
    </div>
  );
};

export default EditVideo;
