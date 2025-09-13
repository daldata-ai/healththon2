export default function Goals() {
    return (
        <div className="relative flex flex-col items-center justify-center py-4 bg-inherit">
            <div className="w-6 h-6 bg-light-green rounded-full"></div>
            <div className="w-1 h-[980px] bg-light-green"></div>
            <div className="w-6 h-6 bg-light-green rounded-full"></div>
            <h1 className="absolute text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold top-20 bg-default-bg">أهداف الداتاثون الصحي</h1>
            <Box index={1} description="تحليل أسباب الوفيات المبكرة القابلة للتفادي لتمكين صانعي القرار من استهدافها." className="top-[170px]" />
            <Box index={2} description="التنبؤ بالفئات الأكثر عرضة للمخاطر الصحية ودعم التدخل المبكر." className="top-[340px]" />
            <Box index={3} description='رفع الوعي المجتمعي بمفهوم "العمر الصحي" وتحفيز أنماط الحياة الصحية.' className="top-[510px]" />
            <Box index={4} description='توظيف البايوجينيتكس والبيانات الحيوية لإطالة العمر الصحي للأفراد.' className="top-[680px]" />
            <Box index={5} description='تحسين كفاءة الإنفاق الصحي بالتركيز على الوقاية وتقليل الضغط على المستشفيات.' className="top-[850px]" />
        </div>
    )
}


const Box = ({
    index,
    description,
    className = "",
}: {
    index: number;
    description: string;
    className?: string;
}) => {
    return (
        <div className={`absolute max-w-[350px] ${className}`} >
            <h1 className='relative text-center mr-10 font-bold text-dark-green pb-2 text-base sm:text-lg '>{index}</h1>
            <div className={`relative flex flex-col justify-center items-center px-6 py-4 h-fit w-full `}>
                {/* Background with opacity */}
                <div className="absolute inset-0 bg-default-bg"></div>
                <div className="absolute inset-0 bg-[#a6c2b9] opacity-30 "></div>

                {/* Text without opacity */}
                <p className="relative text-gray-700 text-center z-10 text-xs sm:text-sm md:text-base">{description}</p>
            </div>
        </div >
    );
};
