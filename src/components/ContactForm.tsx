"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-4">
          Name
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-black text-black dark:text-white"
          id="name"
          name="name"
          placeholder="Your Name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-4">
          Email
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-black text-black dark:text-white"
          id="email"
          name="email"
          placeholder="Your Email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-4">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-black text-black dark:text-white"
          id="message"
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button className="px-6 py-2 bg-primary text-white rounded-md hover:opacity-90 transition">
        Send Message
      </button>
      {submitted && (
        <p className="text-green-600 dark:text-green-400">Message Sent!</p>
      )}
    </form>
  );
};

export default ContactForm;
