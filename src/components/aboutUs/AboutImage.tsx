import { motion } from "framer-motion";

import { CLOUDINARY_BASE_URL } from "constants/constants";

const AboutImage = () => (
  <motion.div
    className="w-full md:w-1/2 flex items-end overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    viewport={{ once: true }}
  >
    <img src={IMAGE_URL} alt="Praying hands" width={600} height={700} className="w-1/2 md:w-full object-cover object-left" />
  </motion.div>
);

export default AboutImage;

const IMAGE_URL = `${CLOUDINARY_BASE_URL}v1628780787/sanctus/about-img.svg`;
