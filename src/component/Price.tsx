import React from 'react'

export default function Price() {
  return (
    <div className='bg-inherit pt-4'>
      <div className="text-center">
  <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-dark-green mb-2">الجوائز</h1>
        <img src="price start.svg" alt="Prize" className="w-full" />
        <ComplatePage 
          title='تقليل معدل الوفيات المبكرة'  
          desc='التنبؤ بالفئات الأكثر عرضة للوفاة المبكرة وتحليل الأسباب القابلة للتفادي' 
          desc2='التنبؤ بخطـر وفيات الأجنة'
              />
      <div className="w-4/5 border-b-2 border-dark-green/30 my-5 mx-auto"></div>
              
        <ComplatePage 
          title='إطالة العمر الصحي عبر علم الجينات والتقنيات الحيوية'  
          desc='الأيض الذكي — العلاقة بين التغذية وكفاءة التمثيل الغذائي' 
          desc2='تطوير مؤشر ذكي للعمر الصحي باستخدام المؤشرات الحيوية'
        />
        <img src="price end.svg" alt="Prize" className="w-full my-10" />
      </div>
    </div>
  )
}


type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <>
  <p className='text-lg sm:text-2xl text-dark-green'>مسار </p>
  <h1 className='text-base sm:text-xl md:text-3xl lg:text-3xl font-bold text-dark-green'>{title}</h1>
    </>
  );
};

type CardProps = {
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ title, desc }) => {
  return (
    <div className="bg-[#a6c2b9]/20 rounded-lg shadow-sx p-3 sm:p-5 m-2 flex-1 w-[320px]">
      <p className="text-dark-green text-sm sm:text-base md:text-lg">{title}</p>
      <p className="text-dark-green text-sm sm:text-base md:text-lg">{desc}</p>
    </div>
  );
};


type ComplatePageProps = {
  title: string;
  desc: string;
  desc2: string;
};

const ComplatePage: React.FC<ComplatePageProps> = ({ title, desc, desc2 }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Title title={title} />
      <Card title="التحدي الأول:" desc={desc} />
      <Image />
      <Card title="التحدي الثاني:" desc={desc2} />
      <Image />

    </div>
  );
};

const Image = () => {
  return (
    <img src="prices.svg" alt="Prize" className="w-3/4 sm:w-2/3 pt-8 max-w-[500px]" />
  );
}
