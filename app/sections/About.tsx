import Image from "next/image";

export default function About(){
  return(
    <section id="about" className="my-prpl-bg section_detail">
      <div className="container mx-auto max-w-4xl">
        <h1>About Me</h1>
        <div className="mx-6 my-white-bg max-w-4xl">
          <div className="flex justify-center items-center">
            <div className="w-6/12 mx-4 my-4">
              <p className="noto-serif">　9歳の頃にクライミングを始め、ユース時代はクライミング界で「黄金世代」と呼ばれる06年生まれの中で戦った。3種目それぞれで世界ユース選手権の出場経験があり、リードでは優勝、スピードでは日本人初のメダル獲得を成し遂げている。</p>
            </div>
            <div className="w-6/12 mx-4 my-4">
              <Image
                src="/images/2023_B_YWCH_S1.JPG"
                alt="説明"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-6/12 mx-4 my-4">
              <Image
                src="/images/2025_B_WC4_Q2.JPG"
                alt="説明"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="w-6/12 mx-4 my-4">
              <p className="noto-serif">　23年にはボルダリング種目で初めてシニア日本代表に選出され、アジアカップでメダルを獲得した。また、25,26年と連続でボルダージャパンカップの決勝に進出し、ワールドカップの自己最高順位は10位である。</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-6/12 mx-4 my-4">
              <p className="noto-serif">　最年少(17歳6ヶ月)でC級ルートセッターの検定に合格し、学生時代から全国中学生ボルダー競技大会のセットや全国高等学校選抜スポーツクライミング選手権 東海合同県予選会のチーフなど、種目を問わずルートセットの経験がある。</p>
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
      </div>
      
    </section>
  )
}