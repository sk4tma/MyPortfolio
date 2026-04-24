export default function Timeline_Event({year, month, competition, description, discipline, left, onHoverChange, index}: PlayerTimeline_EventProps){
  return(
    <div
    onMouseEnter={() => onHoverChange("enter", index)}
    onMouseLeave={() => onHoverChange("leave", index)}
    className={`w-11/24 ${left?"text-right pl-8":"text-left pr-8"}`}
    >
      <h3 className={`text-3xl font-bold text-blue-600 ${discipline==='boulder'?"text-yellow-400":discipline==='lead'?"text-green-600":"text-red-400"}`}>{year + "." + month}</h3>
      <h4 className={`text-xl font-semibold mt-2`}>{competition}</h4>
      <p className="text-gray-600 mt-1 text-xl">{description}</p>
    </div>
  )

}

interface PlayerTimeline_EventProps{
  year: string
  month: string
  competition: string
  description: string
  discipline: string
  left: boolean
  onHoverChange: (state: string, index: number) => void
  index: number
}