import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Goals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center py-4 bg-inherit" id="goals">
      {/* Animated timeline elements */}
      <motion.div 
        className="w-6 h-6 bg-light-green rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      />
      
      <motion.div 
        className="w-1 h-[980px] bg-light-green"
        initial={{ height: 0 }}
        animate={isInView ? { height: 980 } : { height: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />
      
      <motion.div 
        className="w-6 h-6 bg-light-green rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
      />
      
      {/* Animated title */}
      <motion.h1 
        className="absolute text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold top-20 bg-default-bg"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        أهداف الداتاثون الصحي
      </motion.h1>
      
      {/* Animated boxes with staggered entrance */}
      <Box 
        index={1} 
        description="تحليل أسباب الوفيات المبكرة القابلة للتفادي لتمكين صانعي القرار من استهدافها." 
        className="top-[170px]"
        delay={0.8}
        containerInView={isInView}
      />
      <Box 
        index={2} 
        description="التنبؤ بالفئات الأكثر عرضة للمخاطر الصحية ودعم التدخل المبكر." 
        className="top-[340px]"
        delay={1.0}
        containerInView={isInView}
      />
      <Box 
        index={3} 
        description='رفع الوعي المجتمعي بمفهوم "العمر الصحي" وتحفيز أنماط الحياة الصحية.' 
        className="top-[510px]"
        delay={1.2}
        containerInView={isInView}
      />
      <Box 
        index={4} 
        description='توظيف البايوجينيتكس والبيانات الحيوية لإطالة العمر الصحي للأفراد.' 
        className="top-[680px]"
        delay={1.4}
        containerInView={isInView}
      />
      <Box 
        index={5} 
        description='تحسين كفاءة الإنفاق الصحي بالتركيز على الوقاية وتقليل الضغط على المستشفيات.' 
        className="top-[850px]"
        delay={1.6}
        containerInView={isInView}
      />
    </div>
  );
}

const Box = ({
  index,
  description,
  className = "",
  delay = 0,
  containerInView = false,
}: {
  index: number;
  description: string;
  className?: string;
  delay?: number;
  containerInView?: boolean;
}) => {
  const boxRef = useRef(null);
  const isBoxInView = useInView(boxRef, { once: true, margin: "-50px" });
  
  // Use both container and individual box visibility for more granular control
  const shouldAnimate = containerInView && isBoxInView;

  return (
    <motion.div 
      ref={boxRef}
      className={`absolute max-w-[350px] ${className}`}
      initial={{ opacity: 0, x: 0, scale: 0.8 }}
      animate={shouldAnimate ? 
        { opacity: 1, x: 0, scale: 1 } : 
        { opacity: 0, x: 0, scale: 0.8 }
      }
      transition={{ 
        duration: 0.8, 
        delay: shouldAnimate ? delay : 0, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: 0.1,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h1 
        className='relative text-center mr-10 font-bold text-dark-green pb-2 text-base sm:text-lg'
        initial={{ scale: 0, rotate: -180 }}
        animate={shouldAnimate ? 
          { scale: 1, rotate: 0 } : 
          { scale: 0, rotate: -180 }
        }
        transition={{ 
          duration: 0.6, 
          delay: shouldAnimate ? delay + 0.2 : 0, 
          type: "spring", 
          stiffness: 200 
        }}
        whileInView={{
          scale: 1,
          rotate: 0,
          transition: {
            duration: 0.6,
            delay: 0.3,
            type: "spring",
            stiffness: 200
          }
        }}
        viewport={{ once: true }}
      >
        {index}
      </motion.h1>
      
      <motion.div 
        className={`relative flex flex-col justify-center items-center px-6 py-4 h-fit w-full`}
        initial={{ opacity: 0, y: 30 }}
        animate={shouldAnimate ? 
          { opacity: 1, y: 0 } : 
          { opacity: 0, y: 30 }
        }
        transition={{ 
          duration: 0.6, 
          delay: shouldAnimate ? delay + 0.4 : 0,
          ease: "easeOut"
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 }
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut"
          }
        }}
        viewport={{ once: true }}
      >
        {/* Background with opacity */}
        <motion.div 
          className="absolute inset-0 bg-default-bg"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: shouldAnimate ? delay : 0 }}
        />
        <motion.div 
          className="absolute inset-0 bg-[#a6c2b9] opacity-30"
          initial={{ scale: 0 }}
          animate={shouldAnimate ? { scale: 1 } : { scale: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: shouldAnimate ? delay : 0,
            ease: "easeOut" 
          }}
        />
        
        {/* Text without opacity */}
        <motion.p 
          className="relative text-dark-green text-center z-10 text-xs sm:text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? 
            { opacity: 1, y: 0 } : 
            { opacity: 0, y: 20 }
          }
          transition={{ 
            duration: 0.5, 
            delay: shouldAnimate ? delay + 0.8 : 0 
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.7
            }
          }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};