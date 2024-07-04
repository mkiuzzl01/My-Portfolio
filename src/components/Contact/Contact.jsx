import React from 'react';
import {FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.Name.value;
        const email = form.Email.value;
        const subject = form.Subject.value;
        const message = form.Message.value;
        const info = {name, email, subject, message}
        console.table(info);
        // console.log(e);
    }

    return (
        <section id="Contact">
            <div className="text-center pb-10 pt-24">
                <h1 className="text-3xl font-semibold">Get In Touch!</h1>
                <p>
                    Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.
                </p>
            </div>
            <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-evenly mb-16">
                <div className="w-1/2">
                    <form onSubmit={handleSubmit}>
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
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Message
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-block bg-orange-500 text-white px-6 py-2 text-lg hover:bg-orange-600 transition mr-4"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="1/2 space-y-4">
                    <div>
                        <div className="flex items-center space-x-2">
                            <span><FaPhoneAlt className='text-xl text-yellow-500'/></span>
                            <span className='font-semibold'>Phone</span>
                        </div>
                        <p className="font-thin ms-6">+8801609105796</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span><MdEmail className='text-xl text-yellow-500'/></span>
                            <span className='font-semibold'>Email</span>
                        </div>
                        <p className="font-thin ms-6">khairul007@gmail.com</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <span><MdLocationPin className='text-xl text-yellow-500'/></span>
                            <span className='font-semibold'>Location</span>
                        </div>
                        <p className="font-thin ms-6">B-block, Sayid Nogor, Vatara, Dhaka-1212, Bangladesh</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;