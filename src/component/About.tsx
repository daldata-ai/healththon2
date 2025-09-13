const AboutUs = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-dark-green gap-y-4 py-20 text-white px-4 text-center border-t-4 border-b-4 border-light-green'>
            <h1 className="text-light-green text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">عن الداتاثون الصحي</h1>
            <p className="max-w-lg text-center text-sm sm:text-base md:text-lg">تقيم جمعية دال لعلوم البيانات والذكاء االصطناعي  بالشراكة مع كلًا من وزارة الصحة ومؤسسة الأمير محمد بن سلمان "مسك" – منصة وطنية مبتكرة تهدف إلى تحفيز العقول والكفاءات الوطنية لتطوير حلول ذكية باستخدام تقنيات علوم البيانات المختلفة لمعالجة تحديات حقيقية مرتبطة بطول العمر وجودة الحياة، ودعم تشييد سياسات صحية مبنية على البيانات.</p>
        </div>
    )
}

const Partners = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-4 py-10 text-white px-4 text-center '>
            <h1 className="text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-8 font-bold">شركاء النجاح</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <img src="misk.png" alt="Misk" className="h-20 mx-auto" />
                <img src="moh.png" alt="Ministry of Health" className="h-20 mx-auto" />
                <img src="dall.png" alt="Dall" className="h-20 mx-auto" />
                <img src="unicef.png" alt="UNICEF" className="h-20 mx-auto" />
            </div>
        </div>

    )
}

const Supporters = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-4 py-10 text-white px-4 text-center'>
            <h1 className="text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-3xl mb-8 font-bold">الداعمون</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <img src="kpmg.png" alt="KPMG" className="h-20 mx-auto" />
                <img src="stc.png" alt="STC" className="h-20 mx-auto" />
                <img src="sdaia.png" alt="SDAIA" className="h-20 mx-auto" />
                <img src="moh.png" alt="Ministry of Health" className="h-20 mx-auto" />
            </div>
        </div>

    )
}

export default function About() {
    return (
        <div className='flex flex-col bg-inherit'>
            <AboutUs />
            <Partners />
            <Supporters />
        </div>
    )
}