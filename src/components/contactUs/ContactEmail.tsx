import { motion } from "framer-motion";

import { contactEmail } from "constants/constants";

const ContactEmail = () => (
  <motion.a
    href={contactEmail}
    className="text-base md:text-lg font-medium text-gray-600 hover:text-brand transition-colors duration-200 hover:underline"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ once: true }}
  >
    hello@include.agency
  </motion.a>
);

export default ContactEmail;
