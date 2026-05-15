import Image from "next/image";
import useIsMobile from "./useIsMobile";

export default function Style({body, source} : Style_Props) {

  const isMobile = useIsMobile(600);

  return isMobile?<StyleMobile body={body} source={source}/>:<StyleDesktop body={body} source={source}/>;
}

interface Style_Props{
  body: string
  source: string
}

export function StyleDesktop({body, source} : Style_Props) {

  return (
    <div className="flex justify-center items-center">
      <div className="w-11/24 mx-4 my-4">
        <Image
          src={source}
          alt="説明"
          width={600}
          height={400}
          priority
        />
      </div>
      <div className="w-13/24 mx-4 my-4">
        <p className="noto-serif">{body}</p>
      </div>
    </div>
  )
}

export function StyleMobile({body, source} : Style_Props) {

  return (
    <div>
      <div className="px-4 py-4">
        <Image
          src={source}
          alt="説明"
          width={600}
          height={400}
          priority
        />
      </div>
      <div className="px-4 py-4">
        <p className="noto-serif">{body}</p>
      </div>
    </div>
  )
}
