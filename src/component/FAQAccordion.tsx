import React from 'react';
import { motion } from 'framer-motion';
import Accordion from './Accordion';

const faqItems = [
  {
    id: 'faq1',
    title: 'هل التسجيل متاح للأفراد؟',
    content: 'لا، التسجيل متاح للفرق فقط.',
  },
  {
    id: 'faq2',
    title: 'كم عدد الأعضاء في الفريق؟',
    content: 'يجب أن يتراوح عدد أعضاء الفريق من ٣-٥ أعضاء.',
  },
  {
    id: 'faq3',
    title: 'هل الحضور إلزامي في الأيام الحضورية؟',
    content: 'نعم، يتطلب حضور عضوين على الأقل في الأيام الحضورية المحددة، ويعتبر هذا شرطًا أساسيًا للتأهل للفوز.',
  },
  {
    id: 'faq4',
    title: 'ماذا أفعل إن لم يكن لدي فريق؟',
    content: <span>يمكنك البحث عن فريق من خلال مجتمع دال في التيليجرام. <b><a href="https://t.me/daldata" target="_blank" rel="noopener noreferrer">اضغط هنا</a></b></span>,
  },
  {
    id: 'faq5',
    title: 'ما هي المؤهلات المطلوبة من أعضاء الفريق؟',
    content: 'المشاركة متاحة للجميع، لكن الأولوية لمن لديهم أعضاء متخصصين في مجال علوم البيانات أو المجال الصحي.',
  },
  {
    id: 'faq6',
    title: 'هل يجب على الفريق أن يتقدم بفكرة؟',
    content: 'لا، يتم اختيار الفريق في التسجيل المبدئي بناءً على مؤهلات أعضاءه من الناحية التقنية والصحية. ويُفضل لكن لا يُشترط أن يمتلك الفريق فكرة مبدئية للمشاركة.',
  },
  {
    id: 'faq7',
    title: 'ما هي طريقة التواصل معنا؟',
    content: 'عند قبول الفريق، سيتم إرسال رابط دعوة لسيرفر ديسكورد، ويجب على جميع أعضاء الفريق الدخول للسيرفر.',
  },
  {
    id: 'faq8',
    title: 'هل يمكن للفرق طلب مساعدة فنية أو توجيه أثناء الداتاثون؟',
    content: 'نعم، سيكون هناك خبراء ومرشدون للإجابة على جميع الاستفسارات من الناحية التقنية والصحية خلال الداتاثون.',
  },
  {
    id: 'faq9',
    title: 'هل ستقام ورش عمل أو جلسات تدريبية أثناء الداتاثون؟',
    content: 'نعم، سيتم تنظيم ورش عمل افتراضية قبل بدء الداتاثون الفعلي لتوفير المعلومات والنصائح اللازمة للمشاركين، كما هو موضح في الجدول الزمني أعلاه.',
  },
];

const FAQAccordion: React.FC = () => {
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({});
  
  const toggleAccordion = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <motion.div 
      className='bg-inherit px-6 pt-6 pb-12 mx-auto w-full' id='faq'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.h1 
          className="text-2xl lg:text-3xl font-bold text-center mb-8 text-dark-green"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.1 
          }}
        >
          الأسئلة الشائعة
        </motion.h1>

        <div className="space-y-4 sm:space-y-6">
          {faqItems.map((item, index) => (
            <Accordion
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              isExpanded={expandedItems[item.id] || false}
              onToggle={toggleAccordion}
              chevronClassName="text-teal-600"
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQAccordion;