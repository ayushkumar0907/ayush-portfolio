import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";

const ContactPage = () => {
  const connectMessage =
    "Have a project or just want to say hi? I’m open to collaborations, opportunities, and friendly chats.";

  return (
    <main className="px-6 py-12 max-w-3xl mx-auto space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{"Let's Connect"}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {connectMessage}
        </p>
      </section>

      <ContactForm />

      <SocialLinks />
    </main>
  );
};

export default ContactPage;
