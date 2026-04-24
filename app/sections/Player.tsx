import Image from "next/image";
import Timeline_Detail from "../components/Timeline_Detail";
import Timeline_Dot from "../components/Timeline_Dot";
import Timeline_Event from "../components/Timeline_Event";
import { useState } from 'react';

export default function Player(){
  return(
    <section id="player" className="my-prpl-bg section_detail">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1>Player</h1>
        <PlayerStyle/>
        <PlayerTimeline/>
      </div>
    </section>
  )
}

export function PlayerStyle() {

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>Style</h2>
      </div>
      <div className="flex justify-center items-center">
          <div className="w-13/24 mx-4 my-4">
            <p className="noto-serif">　今の実力から到達できる「最高の結果」に辿り着くまでの過程を「最適解」とし、それにどれだけ近づけるかを常に考えています。「最高の結果」や「最適解」は同じ人でも時間や環境によっても変化するものであり、まだ誰も辿り着いていない別の可能性があるはずです。そのため今の自分を信じ、過去の常識や結果にとらわれず、常に今の自分と対話をする必要があると考えています。</p>
          </div>
          <div className="w-11/24 mx-4 my-4">
            <Image
              src="/images/2025_B_BJC_F3.JPG"
              alt="説明"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
    </div>
  )
}

export function PlayerTimeline() {
  const events = [
    { year: '2026', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 7位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2025', month:'6' , competition: 'ボルダーワールドカップ', description: 'インスブルック 10位' ,type: "international", discipline: "boulder", detail: "detail"},
    { year: '2025', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 4位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2024', month:'8' , competition: '世界ユース選手権 リード', description: '貴陽 1位' ,type: "international", discipline: "lead", detail: "detail"},
    { year: '2024', month:'5' , competition: '日本ユース選手権 リード', description: '盛岡 3位' ,type: "national", discipline: "lead", detail: "detail"},
    { year: '2023', month:'12' , competition: 'アジアカップ ボルダー', description: 'リヤド 3位' ,type: "international", discipline: "boulder", detail: "detail"},
    { year: '2023', month:'8' , competition: '世界ユース選手権 ボルダー', description: 'ソウル 4位' ,type: "international", discipline: "boulder", detail: "detail"},
    { year: '2023', month:'6' , competition: '日本ユース選手権 ボルダー', description: '倉吉 2位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2021', month:'12' , competition: '日本ユース選手権 ボルダー', description: '倉吉 1位' ,type: "national", discipline: "boulder", detail: "detail"},
    { year: '2021', month:'8' , competition: '世界ユース選手権 スピード', description: 'ヴォロネジ 3位' ,type: "international", discipline: "speed", detail: "detail"},
    { year: '2021', month:'3' , competition: '日本ユース選手権 スピード', description: '亀岡 1位' ,type: "national", discipline: "speed", detail: "detail"},
    { year: '2020', month:'11' , competition: '日本ユース選手権 ボルダー', description: '葛飾 2位' ,type: "national", discipline: "boulder", detail: "detail"},
  ]
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

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>TimeLine</h2>
      </div>
      <div className="relative">
        {/* 縦線 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500" />
        {/* イベント */}
        {events.map((event, index) => (
          <div key={index}>
            <div key={index} className="px-4 py-4 flex justify-between items-center items-stretch w-full">
              {event.type === "national" ? (
                <>
                  <Timeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                  <Timeline_Dot/>
                  <Timeline_Detail hovered={hoveredIndex === index} detail={event.detail}/>
                </>
              ) : (
                <>
                  <Timeline_Detail hovered={hoveredIndex === index} detail={event.detail}/>
                  <Timeline_Dot/>
                  <Timeline_Event year={event.year} month={event.month} competition={event.competition} description={event.description} discipline={event.discipline} left={event.type === "national"} onHoverChange={handleEventHover} index={index}/>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
