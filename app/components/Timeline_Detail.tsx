export default function Timeline_Detail({hovered, detail}: PlayerTimeline_DetailProps){
  return(
    <div className="w-11/24 overflow-hidden rounded-lg">
      {hovered ? (
        <div className={"flex items-center justify-center relative h-full transition-all duration-300 cursor-pointer bg-white shadow-xl scale-105"}>
          <p className={"mx-5 text-sm"}>{detail}</p>
        </div>
      ):(
        <div/>
      )}
    </div>
  )
}

interface PlayerTimeline_DetailProps{
  hovered: boolean
  detail: string
}