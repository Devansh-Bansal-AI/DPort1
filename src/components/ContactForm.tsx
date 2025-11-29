import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: any) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <form onSubmit={submit} className="space-y-4">

      <input className="w-full p-3 rounded bg-[#2D2D2D] text-white"
             placeholder="Your Name"
             onChange={(e) => setForm({ ...form, name: e.target.value })} />

      <input className="w-full p-3 rounded bg-[#2D2D2D] text-white"
             placeholder="Your Email"
             onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <textarea className="w-full p-3 rounded bg-[#2D2D2D] text-white h-28"
                placeholder="Message"
                onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>

      <button className="w-full bg-[#6C63FF] py-3 text-white rounded">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
