import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className='flex flex-col items-center justify-center bg-dark-green gap-y-4 py-20 text-white px-4 text-center border-t-4 border-b-4 border-light-green'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 1, 1] }}
    >
      <motion.h1 
        className="text-light-green text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.68, -0.55, 0.27, 1.55] }}
      >
        عن الداتاثون الصحي
      </motion.h1>
      
      <motion.p 
        className="max-w-lg text-center text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.42, 0, 1, 1] }}
      >
        دعمًا لأهداف رؤية المملكة العربية السعودية 2030 في تحسين نمط الحياة اليومية والحفاظ على صحة المجتمع، يأتي "الداتاثون الصحي" رغبةً في حل تحديات حقيقية مرتبطة بطول العمر وجودة الحياة من خلال تحفيز العقول المبدعة والكفاءات الوطنية لتطوير حلول ذكية باستخدام بيانات صحية مقدمة من وزارة الصحة وتوظيف تقنيات علوم البيانات المختلفة، تعزيزًا لدور البيانات في إطالة العمر الصحي.
      </motion.p>
    </motion.div>
  );
};

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };



  return (
    <motion.div 
      ref={ref}
      className='flex flex-col items-center justify-center gap-y-4 py-10 text-white px-4 text-center'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-8 font-bold"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.42, 0, 1, 1] }}
      >
        شركاء النجاح
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img 
          src="misk.png" 
          alt="Misk" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.1, 
            rotate: 2,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="moh.png" 
          alt="Ministry of Health" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.1, 
            rotate: -2,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="dall.png" 
          alt="Dall" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.1, 
            rotate: 2,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="unicef.png" 
          alt="UNICEF" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.1, 
            rotate: -2,
            transition: { duration: 0.3 } 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Supporters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className='flex flex-col items-center justify-center gap-y-4 py-10 text-white px-4 text-center'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-8 font-bold"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        الداعمون
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img 
          src="kpmg.png" 
          alt="KPMG" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="stc.png" 
          alt="STC" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sdaia.png" 
          alt="SDAIA" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="moh.png" 
          alt="Ministry of Health" 
          className="h-20 mx-auto" 
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 } 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function About() {
    return (
        <div className='flex flex-col bg-inherit'>
            <AboutUs />
            <Partners />
            <Supporters />
        </div>
    );
}