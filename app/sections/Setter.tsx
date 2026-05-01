import Image from "next/image";
import Timeline from "../components/Timeline";

export default function Setter(){
  return(
    <section id="setter" className="my-prpl-bg section_detail">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1>Setter</h1>
        <SetterStyle/>
        <SetterTimeline/>
      </div>
    </section>
  )
}

export function SetterStyle() {

  return (
    <div className="my-white-bg my-6">
      <div className="py-9">
        <h2>Style</h2>
      </div>
      <div className="flex justify-center items-center">
          <div className="w-6/12 mx-4 my-4">
            <p className="noto-serif">　「ルートセットが成功する」とは何かをシチュエーションに応じて常に考える事を大切にしています。目的と手段を線引きし、何が必要とされているのか、はたまた何が冗長なのか、まだ誰も最適解を知らない中で最も正解に近いと認められることを目標に課題を作ります。</p>
          </div>
          <div className="w-6/12 mx-4 my-4">
            <Image
              src="/images/2021_S_SYC_F1.JPG"
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

export function SetterTimeline() {
  const events = [
    { year: '2025', month:'10' , competition: '高校生選手権 東海合同県予選会', description: 'チーフルートセッター' ,type: "national", discipline: "lead", detail: "no detail", link: "", linkName: ""},
    { year: '2025', month:'8' , competition: '全国中学生ボルダー競技大会', description: 'ルートセッター' ,type: "national", discipline: "boulder", detail: "no detail", link: "", linkName: ""},
    { year: '2024', month:'8' , competition: '全国中学生ボルダー競技大会', description: 'ルートセッター' ,type: "national", discipline: "boulder", detail: "no detail", link: "", linkName: ""},
    { year: '2024', month:'3' , competition: 'C級ルートセッター 取得', description: 'ライセンス' ,type: "national", discipline: "lead", detail: "史上最年少でC級ルートセッターの資格を獲得。", link: "", linkName: ""},
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