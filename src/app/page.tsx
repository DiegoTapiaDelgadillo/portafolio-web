import { Button } from "@/components/shared/Button";
import { Inter } from "next/font/google";
import { TextReveal } from "@/components/shared/TypingAnimation";
import { HtmlSvg } from "@/components/svg/HtmlSvg";
import { ComputerSvg } from "@/components/svg/Computer";
import { CommandLineSvg } from "@/components/svg/CommandLineSvg";
import { CodeSvg } from "@/components/svg/CodeSvg";
import ShineBorder from "@/components/shared/ShineBorder/ShineBorder";
import { TextRevealDemo } from "@/components/shared/TextReveal";
import { ContactForm } from "@/components/home/ContactForm";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const skills = [
    {
      title: "HTML",
      description: "Proficient in writing semantic and accessible HTML.",
      Svg: <HtmlSvg />,
    },
    {
      title: "CSS",
      description:
        "Skilled in creating responsive and visually appealing designs using CSS.",
      Svg: <ComputerSvg />,
    },
    {
      title: "JavaScript",
      description:
        "Experienced in building dynamic and interactive web applications with JavaScript.",
      Svg: <CommandLineSvg />,
    },
    {
      title: "React",
      description:
        "Proficient in building modern and scalable web applications using React.",
      Svg: <CodeSvg />,
    },
    {
      title: "Vite JS",
      description:
        "Proficient in building modern and scalable web applications using Vite JS.",
      Svg: <CodeSvg />,
    },
    {
      title: "Next JS",
      description:
        "Proficient in building modern and scalable web applications using Next JS.",
      Svg: <CodeSvg />,
    },
  ];
  return (
    <main>
      <section id="Home">
        <div className="px-4 sm:px-8 md:px-16 lg:px-36 h-auto flex items-center py-36">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-24 sm:gap-4 items-center">
            <div>
              <TextReveal
                className=" text-black dark:text-white text-7xl"
                text="Hi, I'm Diego Tapia"
              />
              <h2
                className={` text-neutral-500 py-4 text-3xl ${inter.className}`}
              >
                I'm a web developer with a passion for creating beautiful and
                functional websites.
              </h2>
              <div className=" flex gap-4">
                <a href="#Projects">
                  <Button>View Projects</Button>
                </a>
                <a href="#Contact">
                  <button className=" p-6 border rounded-xl text-xl  border-neutral-500 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 ease-in-out duration-300">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
            <figure className=" flex justify-center sm:justify-end w-full">
              <img
                src="/svg/OSLO-14.svg"
                alt="Foto de perfil"
                className="w-96 h-96"
              />
            </figure>
          </div>
        </div>
      </section>
      <section id="About">
        <div className="px-8 md:px-16 lg:px-36 py-36 h-auto flex items-center bg-neutral-200 dark:bg-neutral-950">
          <div className=" grid xl:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="dark:text-white text-3xl sm:text-7xl">About Me</h3>
              <h2
                className={` text-neutral-500 py-4 text-xl sm:text-3xl ${inter.className}`}
              >
                I'm a web developer with over 1 year of experience in building
                modern and responsive websites. I have a strong background in
                HTML, CSS, JavaScript, and various frontend frameworks like
                React. I'm passionate about creating user-friendly and visually
                appealing websites that provide a great experience for users.
                I'm always eager to learn new technologies and techniques to
                improve my skills and deliver the best possible solutions for my
                clients.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section id="Skills">
        <div className="px-8 md:px-16 lg:px-36 py-36">
          <h3 className=" text-black dark:text-white text-3xl sm:text-7xl">
            My Skills
          </h3>
          <div className=" py-8 grid grid-cols-1 xl:grid-cols-3 gap-4">
            {skills.map((skills, index) => (
              <div
                className=" rounded-xl bg-neutral-200 dark:bg-neutral-950 w-full p-8"
                key={index}
              >
                {skills.Svg}
                <h2 className=" text-3xl text-black dark:text-white py-4">
                  {skills.title}
                </h2>
                <p className={` text-neutral-500 text-xl  ${inter.className}`}>
                  {skills.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="Projects">
        <div className="px-8 md:px-16 lg:px-36 py-36 h-auto bg-neutral-200 dark:bg-neutral-950">
          <h3 className="dark:text-white text-3xl sm:text-7xl">My Projects</h3>
          <div className=" py-8">
            <ShineBorder
              className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-transparent"
              color={["#fefce8", "#eab308", "#422006"]}
            >
              <figure className="">
                <img src="img/SM8-Mexico.png" alt="" className=" rounded-xl" />
              </figure>
            </ShineBorder>
            <div className=" pt-4">
              <a
                href="https://www.sm8.com.mx/"
                target="_blank"
                className=" text-black dark:text-white text-start text-xl md:text-3xl hover:text-yellow-500 dark:hover:text-yellow-300 ease-in-out duration-300"
              >
                SM8 Mexico
              </a>
              <p
                className={` text-neutral-500 text-sm md:text-xl  ${inter.className}`}
              >
                This website, built with React, Vite, and Tailwind, elevates the
                brand to an exceptional level. With a strong presence across
                Mexico, boasting over 19 locations, and an international
                expansion that includes multiple sites in Spain, we are
                redefining the reach of our brand.
              </p>
            </div>
          </div>
          <div className=" py-8">
            <ShineBorder
              className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-transparent"
              color={["#eff6ff", "#3b82f6", "#172554"]}
            >
              <figure className="">
                <img src="img/SM8-Espana.png" alt="" />
              </figure>
            </ShineBorder>
            <div className=" pt-4">
              <a
                href="https://www.sm8.es/"
                target="_blank"
                className=" text-black dark:text-white text-start text-xl md:text-3xl hover:text-blue-500 ease-in-out duration-300"
              >
                SM8 Spain
              </a>
              <p
                className={` text-neutral-500 text-sm md:text-xl  ${inter.className}`}
              >
                Discover the SM8 website, a Mexican brand making waves in Spain.
                Built with React, Vite, and Tailwind, this platform is not only
                unique in its design but also positions SM8 as a leader in its
                category.
              </p>
            </div>
          </div>
          <div className=" py-8">
            <ShineBorder
              className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-transparent"
              color={["#fafafa", "#71717a", "#0a0a0a"]}
            >
              <figure className="">
                <img src="img/SM8-Desarrollos.png" alt="" />
              </figure>
            </ShineBorder>
            <div className=" pt-4">
              <a
                href="https://sm8desarrollos.com.mx/"
                target="_blank"
                className=" text-black dark:text-white text-start text-xl md:text-3xl hover:text-neutral-500 ease-in-out duration-300"
              >
                SM8 Desarrollos
              </a>
              <p
                className={` text-neutral-500 text-sm md:text-xl  ${inter.className}`}
              >
                Explore the SM8 Desarrollos website, a unique architectural firm
                in Mexico that captures the art of architecture. Developed with
                React, Vite, and Tailwind, this platform reflects the essence
                and vision of SM8 through innovative and cutting-edge design.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TextRevealDemo />
      <section id="Contact">
        <div className="px-8 md:px-16 lg:px-36 py-36 h-auto bg-neutral-200 dark:bg-neutral-950">
          <h3 className=" text-black dark:text-white text-3xl sm:text-7xl pb-8">
            Contact Me
          </h3>
          <div className=" grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className=" bg-neutral-100 dark:bg-neutral-900 p-4 md:p-8 rounded-xl">
              <p
                className={` text-black dark:text-white text-sm md:text-xl  ${inter.className}`}
              >
                Get in Touch
              </p>
              <p
                className={` text-neutral-500 text-sm md:text-xl  ${inter.className}`}
              >
                Feel free to reach out to me for any inquiries or collaboration
                opportunities.
              </p>
              <ContactForm />
            </div>
            <div className=" bg-neutral-100 dark:bg-neutral-900 p-4 md:p-8 rounded-xl">
              <p
                className={` text-black dark:text-white text-sm md:text-xl  ${inter.className}`}
              >
                Find Me Online
              </p>
              <p
                className={` text-neutral-500 text-sm md:text-xl  ${inter.className}`}
              >
                Connect with me on various social platforms.
              </p>
              <div className=" py-4 flex items-center gap-4">
                <a
                  href="https://github.com/DiegoTapiaDelgadillo"
                  target="_blank"
                >
                  <img
                    src="img/github.png"
                    alt="github icon"
                    className="w-20 h-20 hover:brightness-50 ease-in-out duration-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-alejandro-tapia-delgadillo-469783268/"
                  target="_blank"
                >
                  <img
                    src="img/linkedin.png"
                    alt="linkedin icon"
                    className="w-20 h-20 hover:brightness-50 ease-in-out duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
