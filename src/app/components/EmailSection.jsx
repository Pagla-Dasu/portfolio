"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

const EmailSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:snehasishbabin2001@gmail.com?subject=${formData.subject}&body=Hi, ${formData.message} (${formData.email})`;
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is alaways
          open. Wheather you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!😎{" "}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/Pagla-Dasu" target="_blank">
            <Image src={GithubIcon} alt="GitHub Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/snehasish-dey-9966411ab/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action=""
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your e-mail
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium"
            >
              Subject
            </label>
            <input
              {...register("subject")}
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying Hi!!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              {...register("message")}
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about...."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
