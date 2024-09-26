import Card from "./card";

export default function CardBentoGrid({ image, title, text }) {
  return (
    <Card>
        <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-700">{text}</p>
            </div>
    </Card>
  )
}
