import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className='flex flex-col items-center justify-center bg-dark-green gap-y-4 py-14 sm:py-20 text-white px-2 sm:px-4 text-center border-b-4 border-light-green w-full'
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 1, 1] }}
      id='aboutusSection'
    >
      <motion.h1 
        className="text-light-green text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.68, -0.55, 0.27, 1.55] }}
      >
        عن الداتاثون الصحي
      </motion.h1>
      <motion.p 
        className="max-w-xs xs:max-w-md sm:max-w-lg text-center text-xs xs:text-sm sm:text-base md:text-lg"
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
        initial={{ opacity: 0, x: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.42, 0, 1, 1] }}
      >
        الشركاء
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-8 w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img
          src="partners/3.svg"
          className="h-20 w-auto max-w-[140px] sm:h-24 sm:max-w-[180px] md:h-28 md:max-w-[200px] px-9"
          whileHover={{
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />
        <motion.img
          src="partners/2.png"
          className="h-24 w-auto max-w-[160px] sm:h-28 sm:max-w-[200px] md:h-32 md:max-w-[220px] px-9 pr-7"
          whileHover={{
            scale: 1.1,
            rotate: -2,
            transition: { duration: 0.3 }
          }}
        />
        <motion.img
          src="partners/1.svg"
          className="h-20 w-auto max-w-[140px] sm:h-24 sm:max-w-[180px] md:h-28 md:max-w-[200px]"
          whileHover={{
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />
      </motion.div>
    </motion.div>
  );
};
const Supporters2 = () => {
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
        className="text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold"
        initial={{ opacity: 0, x: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
      الراعي الاستراتيجي  
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img 
          src="sponsers/6.svg" 
          className="h-32 xs:h-40 sm:h-44 mx-auto w-auto max-w-[220px] sm:max-w-[280px] md:h-48 md:max-w-[320px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
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
        initial={{ opacity: 0, x: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        الرعاة
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-8 items-center w-full max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.img 
          src="sponsers/1.png" 
          className="h-18 xs:h-24 mx-auto w-auto max-w-[120px] xs:max-w-[160px] sm:h-24 sm:max-w-[160px] md:h-28 md:max-w-[180px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/2.svg" 
          className="h-18 xs:h-24 mx-auto w-auto max-w-[120px] xs:max-w-[160px] sm:h-24 sm:max-w-[160px] md:h-28 md:max-w-[180px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/3.png" 
          className="h-16 xs:h-20 mx-auto w-auto max-w-[110px] xs:max-w-[140px] sm:h-20 sm:max-w-[140px] md:h-24 md:max-w-[160px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/4.png" 
          className="h-16 xs:h-20 mx-auto w-auto max-w-[110px] xs:max-w-[140px] sm:h-20 sm:max-w-[140px] md:h-24 md:max-w-[160px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/5.svg" 
          className="h-24 xs:h-32 mx-auto w-auto max-w-[140px] xs:max-w-[200px] sm:h-32 sm:max-w-[200px] md:h-36 md:max-w-[220px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/7.svg" 
          className="h-24 xs:h-32 mx-auto w-auto max-w-[140px] xs:max-w-[200px] sm:h-32 sm:max-w-[200px] md:h-36 md:max-w-[220px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/8.svg" 
          className="h-24 xs:h-32 mx-auto w-auto max-w-[140px] xs:max-w-[200px] sm:h-32 sm:max-w-[200px] md:h-36 md:max-w-[220px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
        <motion.img 
          src="sponsers/9.svg" 
          className="h-16 xs:h-20 mx-auto w-auto max-w-[110px] xs:max-w-[140px] sm:h-20 sm:max-w-[140px] md:h-24 md:max-w-[160px]"
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.3 } 
          }}
        />
      </motion.div>
      
    </motion.div>
  );
};

export default function About() {
    return (
        <div className='flex flex-col bg-inherit' id="aboutus">
          <AboutUs />
          <Partners />
          <Supporters2 />
          <Supporters />
        </div>
    );
}