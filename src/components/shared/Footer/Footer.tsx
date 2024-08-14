import Image from "next/image";
interface FooterProps {
  navLinks: Array<{ to: string; text: string }>;
}
export const Footer = ({ navLinks }: FooterProps) => {
  return (
    <footer className=" w-full bg-black px-4 py-8 sm:px-8 md:px-16 lg:px-36 grid grid-cols-1 gap-4 sm:flex sm:justify-between">
      <a className=" text-white font-bold md:text-xl lg:text-3xl" href="#Home">
        Diego Tapia
      </a>
      <ul className="">
        <li className=" text-white text-base sm:text-xl">Menu</li>
        {navLinks.map((link, index) => (
          <li
            className=" text-neutral-500 text-base sm:text-xl hover:text-white ease-in-out duration-300 cursor-pointer"
            key={index}
          >
            <a href={link.to}>{link.text}</a>
          </li>
        ))}
      </ul>
      <div>
        <p className=" text-white text-base sm:text-xl pb-4">
          My Social Media:
        </p>
        <div className=" flex gap-4">
          <a href="https://github.com/DiegoTapiaDelgadillo" target="_blank">
            <figure>
              <Image
                src="/img/github.png"
                alt="github icon"
                className="w-12 h-12 hover:brightness-50 ease-in-out duration-300"
                width={100}
                height={100}
              />
            </figure>
          </a>
          <a
            href="https://www.linkedin.com/in/diego-alejandro-tapia-delgadillo-469783268/"
            target="_blank"
          >
            <figure>
              <Image
                src="/img/linkedin.png"
                alt="linkedin icon"
                className="w-12 h-12 hover:brightness-50 ease-in-out duration-300"
                width={100}
                height={100}
              />
            </figure>
            <img />
          </a>
        </div>
      </div>
    </footer>
  );
};
