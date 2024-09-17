import { InlineWidget } from "react-calendly";
import { Separator } from "./ui/seprator";

export const Calendy = () => {
  return (
    <div className="text-center" id="calendy">
      <h1 className="pb-4 font-bold tracking-tight text-4xl lg:text-5xl">
        Take your site to next level <br />
        book a free design console{" "}
      </h1>
      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>
      <InlineWidget
        styles={{
          height: "1000px",
          borderRadius: "5px",
        }}
        url="https://calendly.com/realtestone1/30min"
      />
    </div>
  );
};

export default Calendy;
