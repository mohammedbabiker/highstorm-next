import { Separator } from "./ui/seprator";
import Link from "next/link";
import { Avatar } from "@mui/material";

export const Channels = () => {
  const channels = [
    {
      logo: "",
      name: "lorm",
      subs: "233092",
      link: "https://www.youtube.com/channel/UCv1fFr7v9sE7bZjZb7H4i8w",
    },
    {
      logo: "",
      name: "fsflsi",
      subs: "1230140",
      link: "https://www.youtube.com/channel/UCv1fFr7v9sE7bZjZb7H4i8w",
    },
  ];

  const style = {
    width: {
      xs: 50,
      sm: 100,
      md: 150,
    },
    height: {
      xs: 50,
      sm: 100,
      md: 150,
    },
  };
  return (
    <div className="text-center">
      <h1 className="pd-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Channels
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <div className="flex items-center justify-center mx-auto sm:space-x-4 lg:space-x-8">
        {channels.map((channel, index) => (
          <div key={index} className="mt-10 flex">
            <div className="flex flex-col items-center">
              <Link href={channel.link}>
                <Avatar sx={style} src={channel.logo} alt={channel.name} />
              </Link>
              <h1 className="font-semibold text-xl mt-4">{channel.name}</h1>
              <p className="text-lg mt-2">{channel.subs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channels;
