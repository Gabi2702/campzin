export default function TextLabelInfo({Title, Info}) {
  return (
    <div className="flex flex-col p-2 -mt-3">
            <p className="text-sm font-medium  ">{Title}</p>
            <p className="text-lg font-medium text-white">{Info}</p>
    </div>
  )
}
