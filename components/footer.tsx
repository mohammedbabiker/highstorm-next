import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";

export const Footer = () => {
  const links = [
    {
      title: "Home",
      href: "https://www.youtube.com/channel/UCv1fFr7v9sE7bZjZb7H4i8w",
      icon: <XIcon className="h-8 w-8" />,
    },
    {
      title: "About",
      href: "/about",
      icon: "",
    },
    {
      href: "malito:babai20@protonmail.ch",
      icon: <EmailIcon className="w-8 h-8" />,
    },
  ];
  return (
    <div className="text-center pb-8">
      <div className="flex text-center justify-center space-x-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="hover:opacity-45 transition duration-300"
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="text-sm text-slate-100/50 pt-3">All right reserved</p>
    </div>
  );
};

export default Footer;
