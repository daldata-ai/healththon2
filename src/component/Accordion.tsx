import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  itemClassName?: string;
  chevronClassName?: string;
  chevronColor?: string;
  animationDelay?: number;
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  content,
  isExpanded,
  onToggle,
  itemClassName = '',
  chevronClassName = '',
  chevronColor,
  animationDelay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: "easeOut"
      }}
      className={`bg-[#a6c2b9]/60 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-700 hover:bg-[#a6c2b9]/80 cursor-pointer ${itemClassName}`}
      onClick={() => onToggle(id)}
    >
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs sm:text-sm lg:text-2xl leading-relaxed font-medium text-dark-green flex-1">
            {title}
          </span>
          <motion.div
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown
              className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 ${chevronClassName}`}
              color={chevronColor}
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 16 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="overflow-hidden"
        >
          <div className="text-xs sm:text-sm lg:text-2xl opacity-80 leading-relaxed text-dark-green">
            {content}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accordion;