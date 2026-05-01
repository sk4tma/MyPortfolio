import { useState } from 'react';
import Link from "next/link";

export default function Timeline(events: EventsProps){

  const [hoveredIndex, setHoveredIndex] = useState<number|null>(null)
  const handleEventHover = (state: string, index: number) => {
    switch(state){
      case "enter":
        setHoveredIndex(index);
        break;
      case "leave":
        setHoveredIndex(null);
        break;
    }
  }

  return(
    <div className="relative">
      {/* 縦線 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />
      {/* イベント */}
      {events.events.map((event, index) => (
        <div key={index}
        onMouseEnter={() => handleEventHover("enter", index)}
        onMouseLeave={() => handleEventHover("leave", index)}
        >
          <div key={index} className="px-4 py-4 flex justify-between items-center items-stretch w-full">
            {event.type === "national" ? (
              <>
                <Timeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} index={index}/>
                <Timeline_Dot/>
                <Timeline_Detail hovered={hoveredIndex === index} detail={event.detail} link={event.link} linkName={event.linkName}/>
              </>
            ) : (
              <>
                <Timeline_Detail hovered={hoveredIndex === index} detail={event.detail} link={event.link} linkName={event.linkName}/>
                <Timeline_Dot/>
                <Timeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} index={index}/>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export type EventsProps = {
  events: EventProps[];
}

export type EventProps = {
  year: string;
  month: string;
  competition: string;
  description: string;
  type: string;
  discipline: string;
  detail: string;
  link: string;
  linkName: string;
}

export function Timeline_Detail({hovered, detail, link, linkName}: Timeline_DetailProps){
  return(
    <div className="w-11/24 overflow-hidden rounded-lg">
      {hovered ? (
        <div className={"flex flex-col items-center justify-center relative h-full transition-all duration-300 cursor-pointer bg-white shadow-xl scale-105"}>
          <p className={"mx-4 my-2 text-sm"}>{detail}</p>
          <Link href={link} className="text-blue-500 underline decoration-transparent hover:decoration-current transition-colors" target="_blank">{linkName}</Link>
        </div>
      ):(
        <div/>
      )}
    </div>
  )
}

interface Timeline_DetailProps{
  hovered: boolean
  detail: string
  link: string
  linkName: string
}

export function Timeline_Dot(){
  return(
    <div className="w-2/24 flex justify-center items-center">
    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
    </div>
  )
}

export function Timeline_Event({year, month, competition, description, discipline, left, index}: Timeline_EventProps){
  return(
    <div
    className={`w-11/24 ${left?"text-right pl-8":"text-left pr-8"}`}
    >
      <h3 className={`text-3xl font-bold text-blue-600 ${discipline==='boulder'?"text-yellow-400":discipline==='lead'?"text-green-600":"text-red-400"}`}>{year + "." + month}</h3>
      <h4 className={`text-xl font-semibold mt-2`}>{competition}</h4>
      <p className="text-gray-600 mt-1 text-xl">{description}</p>
    </div>
  )

}

interface Timeline_EventProps{
  year: string
  month: string
  competition: string
  description: string
  discipline: string
  left: boolean
  index: number
}