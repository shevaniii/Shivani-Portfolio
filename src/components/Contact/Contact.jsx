import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Get in Touch</h1>

      <p className="text-gray-400 text-center max-w-md mb-6">
        Whether you're a developer, recruiter, or manager, feel free to drop me
        a message. I'll get back to you soon!
      </p>

      <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
