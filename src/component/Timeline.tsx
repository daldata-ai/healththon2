
export default function Timeline() {
  return (
    <div className="bg-inherit p-4 w-full">
      <picture>
        {/* Mobile first */}
        <source srcSet="/timelineMoblie.svg" media="(max-width: 767px)" />
        {/* Desktop */}
        <source srcSet="/timeline.svg" media="(min-width: 1028px)" />
        {/* Fallback */}
        <img src="timeline.svg" alt="Timeline" className="w-full" />
      </picture>
    </div>
  )
}
