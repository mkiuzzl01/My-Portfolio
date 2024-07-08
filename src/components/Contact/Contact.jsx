import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import 'animate.css';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.Name.value;
    const email = form.Email.value;
    const subject = form.Subject.value;
    const message = form.Message.value;

    const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "MD Khairul Islam",
        subject: subject,
        message: message,
      },
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(res.data === 'OK'){
        form.reset();
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
          });
      };
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <section id="Contact">
      <div className="text-center pb-10 pt-24 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold mb-4">Get In Touch!</h1>
        <p>
        I'm eager to connect with you! Whether you have a project in mind, a question, or just want to say hello, <br /> feel free to reach out. Let's collaborate and bring your ideas to life!
        </p>
      </div>
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-evenly mb-16 animate__animated animate__fadeInUp">
        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="animate__animated animate__fadeInLeft">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group col-span-2">
                <input
                  type="text"
                  name="Subject"
                  id="Subject"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Subject"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Subject
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group col-span-2">
                <textarea
                  rows="5"
                  name="Message"
                  id="Message"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="Message"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Message
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block bg-orange-500 text-white px-6 py-2 text-lg hover:bg-orange-600 transition mr-4 animate__animated animate__fadeInUp"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="divider lg:divider-horizontal animate__animated animate__fadeIn">OR</div>
        <div className="1/2 space-y-4 animate__animated animate__fadeInRight">
          <div>
            <div className="flex items-center space-x-2">
              <span>
                <FaPhoneAlt className="text-xl text-yellow-500" />
              </span>
              <span className="font-semibold">Phone</span>
            </div>
            <p className="font-thin ms-6">+8801609105796</p>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span>
                <MdEmail className="text-xl text-yellow-500" />
              </span>
              <span className="font-semibold">Email</span>
            </div>
            <p className="font-thin ms-6">khairul007@gmail.com</p>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span>
                <MdLocationPin className="text-xl text-yellow-500" />
              </span>
              <span className="font-semibold">Location</span>
            </div>
            <p className="font-thin ms-6">
              B-block, Sayid Nogor, Vatara, Dhaka-1212, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
