import CardBentoGrid from "../card/cardBentoGrid";

export default function BentoGrid({items}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {items.map((item, index) => (
            <CardBentoGrid key={index} image={item.image} title={item.title} text={item.text} />
        ))}
    </div>
  )
}
