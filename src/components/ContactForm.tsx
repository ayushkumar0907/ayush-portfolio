"use client";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
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
      <Input
        label="Name"
        id="name"
        name="name"
        placeholder="Your Name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label="Email"
        id="email"
        name="email"
        placeholder="Your Email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <Textarea
        label="Message"
        id="message"
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit">Send Message</Button>
      {submitted && (
        <p className="text-green-600 dark:text-green-400">Message Sent!</p>
      )}
    </form>
  );
};

export default ContactForm;
