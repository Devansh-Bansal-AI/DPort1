import React from "react";
import ContactForm from "./ContactForm";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title="Contact Me" subtitle="Let's work together!" />
      <ContactForm />
    </section>
  );
};

export default Contact;
