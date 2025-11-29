export const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
};

export const nameVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  expandFirst: { opacity: 1, scaleX: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
  expandLast:  { opacity: 1, scaleX: 1, transition: { duration: 1, ease: 'easeOut', delay: 1.2 } },
};

export const floatVariants = {
  float: {
    opacity: 1,
    scale: 1,
    y: [0, -15, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 1.2,
    },
  },
};
