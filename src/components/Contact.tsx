import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-3 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <p>
        Send us a mail on{" "}
        <span className="font-bold text-2xl">estate@gmail.com</span> 
      </p>
    </motion.div>
  );
};

export default Contact;
