"use client";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import Projects from "../projects/projects";
import Link from "next/link";

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    // Set formatted time string when component mounts
    const now = new Date();
    const formatted = now.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    setTimestamp(formatted);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ykm3z1t", // e.g., service_q9xxxxx
        "template_juu705d", // e.g., template_abxxxx
        form.current,
        "EoIUrt7YbTJ-JjDMQ" // e.g., oPKmxxxxx-xxxx
      )
      .then(
        () => setSent(true),
        () => setError(true)
      );
  };
  return (
    <div className="bg-orange-50">
      <header>
        <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-orange-100">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link className="flex items-center" href="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                KN
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <a
                href="https://www.instagram.com/websitesbykhaula/"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Contact Me
              </a>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="https://www.instagram.com/websitesbykhaula/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <Link
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="main">
        <section className="">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Khaula Nauman
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                A website developer and ui/ux designer
              </p>
              <a
                href="https://www.instagram.com/websitesbykhaula/"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-orange-200 focus:ring-4 focus:ring-black dark:focus:ring-black"
              >
                Get to know me
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="\me.png" alt="mockup" />
            </div>
          </div>
        </section>
        <div className="w-full mx-auto max-w-4xl text-center p-6">
          <h2 className="text-3xl font-bold text-black mb-6">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">HTML5</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">CSS3</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">JavaScript</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">React.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">Next.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                alt="TailwindCSS"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">Node.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">Git</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.worldvectorlogo.com/logos/expressjs.svg"
                alt="ExpressJS"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">ExpressJS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                alt="MongoDB"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">MongoDB</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb-512x512.png"
                alt="Figma"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">Figma</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-orange-100 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-orange-200">
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/975/579/non_2x/wordpress-logo-wordpress-icon-transparent-free-png.png"
                alt="Wordpress"
                className="w-12 h-12 mb-2"
              />
              <span className="text-orange-900">Wordpress</span>
            </div>
          </div>
        </div>
        <Projects />
        <section className="text-[#1a1a1a] w-full mx-auto max-w-4xl text-center p-6 font-serif">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
                Want to <br />
                <em className="italic">start</em> <br />
                <em className="italic">a new</em> <br />
                project?
              </h2>
              <p className="mt-4 text-lg">Or just say hello.</p>
            </div>

            {/* Right Side (Combined) */}
            <div className="space-y-8">
              <div className="flex gap-6 text-2xl justify-center lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/khaula-nauman/"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/websitesbykhaula/"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a href="https://github.com/khaulanauman" aria-label="Spotify">
                  <FaGithub />
                </a>
              </div>

              {/* Contact Form */}
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder-gray-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-black focus:outline-none py-2 placeholder-gray-500"
                />
                <input type="hidden" name="time" value={timestamp} />
                <button
                  type="submit"
                  className="mt-2 text-lg underline hover:scale-105 transition"
                >
                  Send →
                </button>
                {sent && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
                {error && (
                  <p className="text-red-600">
                    Failed to send. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className="footer mt-10">
        <footer className="bg-orange-50 ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                  <span className="self-center text-xl font-semibold whitespace-nowrap ">
                    KN
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase ">
                    Follow Me
                  </h2>
                  <ul className="text-gray-500  font-medium">
                    <li>
                      <a
                        href="https://www.instagram.com/websitesbykhaula/"
                        className="hover:underline"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/khaulanauman"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="https://www.linkedin.com/in/khaula-nauman/"
                        className="hover:underline"
                      >
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 lg:my-8" />
            <div className="flex justify-center items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  KhaulaNauman™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
