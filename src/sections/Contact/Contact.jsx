import { useState } from "react";
import { personal } from "../../data/personal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const serviceOptions = [
  "Frontend Development",
  "UI/UX Design",
  "React.js Development",
  "Full Stack / MERN Development",
  "Website Development",
  "Responsive Website",
  "SEO Optimization",
  "Website Performance",
  "Other",
];

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),

  contact: yup
    .string()
    .required("Mobile number is required")
    .matches(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number"
    ),

  email: yup
    .string()
    .trim()
    .required("Email address is required")
    .email("Enter a valid email address"),

  services: yup
    .array()
    .min(1, "Please select at least one service")
    .required("Please select at least one service"),

  message: yup
    .string()
    .trim()
    .required("Please tell me about your project")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      services: [],
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);

      /*
        Backend API yahan connect karenge:

        await fetch("YOUR_BACKEND_API_URL/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      */

      setSubmitted(true);
      reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="contact reveal">
      <div className="contact-inner">

        {/* Contact Header */}
        <p className="kicker">
          <i /> HAVE A PROJECT IN MIND?
        </p>

        <h2>
          Let's make your next
          <br />
          <span>website memorable.</span>
        </h2>

        <p>
          Open to React.js, MERN Stack, web development and SEO opportunities.
        </p>

        {/* Contact Buttons */}
        <div className="contact-buttons">
          <a
            className="btn main"
            href={`mailto:${personal.email}`}
          >
            Email me ✉
          </a>

          <a
            className="btn line"
            href="/resume/Abhishek-Pandey-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            ↓ Resume
          </a>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <a href={`mailto:${personal.email}`}>
            ✉ {personal.email}
          </a>

          <a href={`tel:${personal.phone}`}>
            ☎ {personal.phone}
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GH</span> GitHub
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>in</span> LinkedIn
          </a>
        </div>

        {/* Registration / Inquiry Form */}
        <div className="register-form">

          <p className="kicker">
            <i /> START A CONVERSATION
          </p>

          <h3>
            Tell me about <span>your project.</span>
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="name">
                Full Name *
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name")}
              />

              {errors.name && (
                <p className="form-error">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Mobile */}
            <div className="form-group">
              <label htmlFor="contact">
                Mobile Number *
              </label>

              <input
                id="contact"
                type="tel"
                maxLength="10"
                placeholder="Enter 10-digit mobile number"
                {...register("contact")}
              />

              {errors.contact && (
                <p className="form-error">
                  {errors.contact.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address *
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
              />

              {errors.email && (
                <p className="form-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Services */}
            <div className="form-group">

              <label>
                What service do you need? *
              </label>

              <div className="service-options">

                {serviceOptions.map((service) => (
                  <label
                    className="service-option"
                    key={service}
                  >
                    <input
                      type="checkbox"
                      value={service}
                      {...register("services")}
                    />

                    <span>{service}</span>
                  </label>
                ))}

              </div>

              {errors.services && (
                <p className="form-error">
                  {errors.services.message}
                </p>
              )}

            </div>

            {/* Message */}
            <div className="form-group">

              <label htmlFor="message">
                Project Details *
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell me about your project, requirements, budget or timeline..."
                {...register("message")}
              />

              {errors.message && (
                <p className="form-error">
                  {errors.message.message}
                </p>
              )}

            </div>

            {/* Success Message */}
            {submitted && (
              <div className="form-success">
                ✓ Thank you! Your inquiry has been submitted successfully.
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="btn main register-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Send Inquiry ↗"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}