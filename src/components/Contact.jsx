import emailjs from "@emailjs/browser";
import {
  CheckCircle,
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shaikhanis2004@gmail.com",
      href: "mailto:shaikhanis2004@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "https://maps.google.com/?q=Pune,India",
      color: "from-red-500 to-red-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@anis196",
      href: "https://github.com/Anis196/",
      color: "hover:bg-gray-900",
    },
    {
      icon: Code,
      label: "LeetCode",
      username: "@daddyscouch",
      href: "https://leetcode.com/daddyscouch/",
      color: "hover:bg-orange-500",
    },
    {
      icon: Code,
      label: "CodeForces",
      username: "@daddyscouch",
      href: "https://codeforces.com/profile/daddyscouch/",
      color: "hover:bg-green-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/in/anis-shaikh",
      href: "https://www.linkedin.com/in/anis-shaikh-a87496240",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Let's connect and discuss opportunities in AI/ML, software
            development, or research collaboration. I'm always excited to work
            on innovative projects and learn from fellow developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      info.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <Icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-black">{info.label}</p>
                      <p className="text-gray-600  group-hover:text-blue-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 text-gray-900 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${social.color} hover:text-white group`}
                    >
                      <Icon size={20} className="mr-3" />
                      <div>
                        <p className="font-medium text-sm">{social.label}</p>
                        <p className="text-xs opacity-75">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-3 text-gray-400"
                          size={20}
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <MessageSquare
                        className="absolute left-3 top-3 text-gray-400 "
                        size={20}
                      />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-black"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none text-black"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  >
                    <Send
                      size={20}
                      className="mr-2 group-hover:translate-x-1 transition-transform"
                    />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
