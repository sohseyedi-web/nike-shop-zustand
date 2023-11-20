import { motion } from "framer-motion";
type PropsType = {
  children: React.ReactNode;
  onSubmit: () => void;
};

const FormCard = ({ children, onSubmit }: PropsType) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="flex items-center justify-center h-full"
    >
      <form
        onSubmit={onSubmit}
        className="space-y-4 lg:w-[35%] p-3 md:w-[75%] w-[95%] shadow rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-col"
      >
        {children}
      </form>
    </motion.section>
  );
};

export default FormCard;
