import Image from "next/image";
import Timeline from "../components/Timeline";

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
    { year: '2026', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 7位' ,type: "national", discipline: "boulder", detail: "　2年連続で決勝進出", link: "https://result.jma-climbing.org/event/bjc2026/1/1/general-result", linkName: "リザルトページ"},
    { year: '2025', month:'6' , competition: 'ボルダーワールドカップ', description: 'インスブルック 10位' ,type: "international", discipline: "boulder", detail: "　0.2pts差で決勝進出を逃す。", link: "https://ifsc.results.info/event/1412/cr/10119", linkName: "リザルトページ"},
    { year: '2025', month:'2' , competition: 'ボルダージャパンカップ', description: '駒沢 4位' ,type: "national", discipline: "boulder", detail: "　予選、準決勝と全完で自身初の決勝進出", link: "https://result.jma-climbing.org/event/bjc2025/1/1/general-result", linkName: "リザルトページ"},
    { year: '2024', month:'8' , competition: '世界ユース選手権 リード', description: '貴陽 1位' ,type: "international", discipline: "lead", detail: "　2位と5手差をつけて優勝。", link: "https://ifsc.results.info/event/1396/cr/9195", linkName: "リザルトページ"},
    { year: '2024', month:'5' , competition: '日本ユース選手権 リード', description: '盛岡 3位' ,type: "national", discipline: "lead", detail: "　自身初のリードメダル獲得。", link: "https://result.jma-climbing.org/event/lyc2024/3/1/general-result", linkName: "リザルトページ"},
    { year: '2023', month:'12' , competition: 'アジアカップ ボルダー', description: 'リヤド 3位' ,type: "international", discipline: "boulder", detail: "　3、4課題目で挽回してメダル獲得。", link: "https://ifsc.results.info/event/1344/cr/8736", linkName: "リザルトページ"},
    { year: '2023', month:'8' , competition: '世界ユース選手権 ボルダー', description: 'ソウル 4位' ,type: "international", discipline: "boulder", detail: "　上位4人がゾーン数まで並ぶ中、アテンプト差で4位に。", link: "https://ifsc.results.info/event/1304/cr/8381", linkName: "リザルトページ"},
    { year: '2023', month:'6' , competition: '日本ユース選手権 ボルダー', description: '倉吉 2位' ,type: "national", discipline: "boulder", detail: "　厳しい状況を1撃で切り抜けてメダル獲得。", link: "https://result.jma-climbing.org/event/byc2023/5/1/general-result", linkName: "リザルトページ"},
    { year: '2021', month:'12' , competition: '日本ユース選手権 ボルダー', description: '倉吉 1位' ,type: "national", discipline: "boulder", detail: "　予選、決勝ともに唯一の全完登で優勝。", link: "https://www.jma-climbing.org/competition/2021/byc/result", linkName: "リザルトページ"},
    { year: '2021', month:'8' , competition: '世界ユース選手権 スピード', description: 'ヴォロネジ 3位' ,type: "international", discipline: "speed", detail: "　世界ユースのスピード種目日本人初メダルを獲得。", link: "https://ifsc.results.info/event/1186/cr/6749", linkName: "リザルトページ"},
    { year: '2021', month:'3' , competition: '日本ユース選手権 スピード', description: '亀岡 1位' ,type: "national", discipline: "speed", detail: "　決勝トーナメントの最後の競技でユースB初の6秒台を記録。", link: "https://www.jma-climbing.org/competition/2021/sjc/result_syc", linkName: "リザルトページ"},
    { year: '2020', month:'11' , competition: '日本ユース選手権 ボルダー', description: '葛飾 2位' ,type: "national", discipline: "boulder", detail: "自身初のボルダー決勝に進出。", link: "https://www.jma-climbing.org/competition/2020/byc/result", linkName: "リザルトページ"},
  ]

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>TimeLine</h2>
      </div>
      <Timeline events={events}/>
    </div>
  )
}
