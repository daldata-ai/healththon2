import React from 'react'
import { motion } from 'framer-motion'

export default function Price() {
  return (
    <div className='bg-inherit pt-4'>
      <div className="text-center">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-dark-green mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          الجوائز
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ComplatePage
            title='تقليل معدل الوفيات المبكرة'
            desc='التنبؤ بالفئات الأكثر عرضة للوفاة المبكرة وتحليل الأسباب القابلة للتفادي'
            desc2='التنبؤ بخطـر وفيات الأجنة'
          />
        </motion.div>
        
        <motion.div 
          className="w-4/5 border-b-2 border-dark-green/30 my-5 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ComplatePage
            title='إطالة العمر الصحي عبر علم الجينات والتقنيات الحيوية'
            desc='الأيض الذكي — العلاقة بين التغذية وكفاءة التمثيل الغذائي'
            desc2='تطوير مؤشر ذكي للعمر الصحي باستخدام المؤشرات الحيوية'
          />
        </motion.div>
        
        <motion.div 
          className="bg-inherit p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <img src='bef.svg' alt='bet' className='w-full mx-auto max-w-4xl' />
        </motion.div>
        
        <motion.img 
          src="price start.svg" 
          alt="Prize" 
          className="w-full"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        
        <motion.img 
          src="price end.svg" 
          alt="Prize" 
          className="w-full my-10"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        />
      </div>
    </div>
  )
}

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p 
        className='text-lg sm:text-2xl text-dark-green'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        مسار 
      </motion.p>
      <motion.h1 
        className='text-base sm:text-xl md:text-3xl lg:text-3xl font-bold text-dark-green'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

type CardProps = {
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ title, desc }) => {
  return (
    <motion.div 
      className="bg-[#a6c2b9]/20 rounded-lg shadow-sx p-3 sm:p-5 m-2 flex-1 max-w-4xl w-full"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 25px rgba(166, 194, 185, 0.3)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.p 
        className="text-dark-green text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {title}
      </motion.p>
      <motion.p 
        className="text-dark-green text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};

type ComplatePageProps = {
  title: string;
  desc: string;
  desc2: string;
};

const ComplatePage: React.FC<ComplatePageProps> = ({ title, desc, desc2 }) => {
  return (
    <motion.div 
      className="flex flex-col items-center gap-4 mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, staggerChildren: 0.2 }}
    >
      <Title title={title} />
      <Card title="التحدي الأول:" desc={desc} />
      <Image />
      <Card title="التحدي الثاني:" desc={desc2} />
      <Image />
    </motion.div>
  );
};

const Image = () => {
  return (
    <motion.img 
      src="prices.svg" 
      alt="Prize" 
      className="w-3/4 sm:w-2/3 pt-8 max-w-[500px]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    />
  );
}