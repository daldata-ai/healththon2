
export default function TargetGroup() {
  const targetGroups = [
     { id: 2, title: "مختصين علوم البيانات والذكاء الاصطناعي", image: "2.svg" },
    { id: 1, title: "الباحثين والمختصين في المجال الصحي", image: "1.svg" },
    { id: 3, title: "طلاب وخريجي الجامعات", image: "3.svg" },
    { id: 4, title: "مطوري الأعمال", image: "4.svg" },
  ]

  return (
    <div className="px-6 py-12 mx-auto bg-dark-green w-full border-t-4 border-b-4 border-light-green">
      <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-light-green">الفئة المستهدفة</h1>
      <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
        {targetGroups.map((group) => (
          <div key={group.id}>
            <img 
              src={group.image} 
              alt={group.title}
              className="w-full h-48"
            />
              <h2 className="text-lg font-semibold text-center text-white/80">{group.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}