import SectionHeading from "../Utilities/SectionHeading";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    setSendStatus(null);

    const serviceId = "service_paw991g";
    const templateId = "template_631s234";
    const publicKey = "eIP8WFT10UhyT5z17";

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSendStatus("success");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSendStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen p-4">
      <SectionHeading spanValue="Contact" data="Me" />

      <div className="flex flex-wrap justify-center mt-8 md:pr-8 md:pl-14">
        {/* Contact Info Side */}
        <div className="flex-[1_1_30rem] p-10 pb-0">
          <h3 className="uppercase text-[var(--color-white)] text-3xl pb-5">
            contact info
          </h3>

          <div className="flex-[1_1_48rem] normal-case">
            <h3 className="flex items-center text-2xl text-[var(--color-white)] py-2 font-normal normal-case">
              <i className="fas fa-envelope pr-4 text-[var(--color-yellow)]"></i>
              taiseen.cse@gmail.com
            </h3>
            <h3 className="flex items-center text-2xl text-[var(--color-white)] py-2 font-normal normal-case">
              <i className="fas fa-phone pr-4 text-[var(--color-yellow)]"></i>
              +880 1717 - 416 412
            </h3>
            <h3 className="flex items-center text-2xl text-[var(--color-white)] py-2 font-normal normal-case">
              <i className="fas fa-map-marker-alt pr-4 text-[var(--color-yellow)]"></i>
              Dhaka, Bangladesh
            </h3>
          </div>
        </div>

        {/* Form Side */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex-[1_1_48rem] p-8 m-8 mb-16"
        >
          {/* Name Field */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="name"
              className={`w-full p-6 my-4 bg-(--color-leftside) text-[var(--color-white)] normal-case text-[1.7rem] rounded-[0.3rem] placeholder:capitalize focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)] transition-all ${errors.name ? "border-2 border-red-500" : ""
                }`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="email"
              className={`w-full p-6 my-4 bg-(--color-leftside) text-[var(--color-white)] normal-case text-[1.7rem] rounded-[0.3rem] placeholder:capitalize focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)] transition-all ${errors.email ? "border-2 border-red-500" : ""
                }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Subject Field */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="subject"
              className={`w-full p-6 my-4 bg-(--color-leftside) text-[var(--color-white)] normal-case text-[1.7rem] rounded-[0.3rem] placeholder:capitalize focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)] transition-all ${errors.subject ? "border-2 border-red-500" : ""
                }`}
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div className="relative mb-4">
            <textarea
              placeholder="message"
              className={`w-full p-6 my-4 bg-(--color-leftside) text-[var(--color-white)] normal-case text-[1.7rem] rounded-[0.3rem] placeholder:capitalize focus:outline-none focus:ring-2 focus:ring-[var(--color-yellow)] transition-all h-[15rem] resize-none ${errors.message ? "border-2 border-red-500" : ""
                }`}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1 block">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Status Messages */}
          {sendStatus === "success" && (
            <p className="text-green-500 text-base mb-4 text-center">
              ✅ Message sent successfully! I will get back to you soon.
            </p>
          )}
          {sendStatus === "error" && (
            <p className="text-red-500 text-base mb-4 text-center">
              ❌ Failed to send message. Please try again later.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-block w-max py-[1.1rem] px-[2.2rem] mt-4 mr-8 bg-(--color-leftside) text-[var(--color-white)] cursor-pointer text-2xl rounded-[2rem] transition-all duration-300 hover:bg-(--color-yellow) hover:text-(--color-education) disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
            <i className="fas fa-paper-plane pl-4 text-[1.8rem]"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
