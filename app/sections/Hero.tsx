import { useState, useEffect } from "react";
import Image from "next/image";
import RevealText from "../components/RevealText";

export default function Hero() {

  const [doneLetter, setDoneLetter] = useState(false);
  const [doneDisp, setDoneDisp] = useState(false);

  useEffect(() => {
    console.log("doneDisp changed:", doneDisp);
  }, [doneDisp]);


  return (
    <section id="hero" className="min-h-screen pt-16 flex w-full items-center">
      <div className="inline-block w-full">
        <div
          className={[
            "inset-0 -z-10 transition-opacity duration-500",
            doneLetter ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onTransitionEnd={(e) => {
            console.log("running")
            if (e.propertyName !== "opacity") return;
            console.log("opacity")

            if (doneLetter) setDoneDisp(true);
          }}
        >
          <Image
            src="/images/2026_B_baby_F.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[60%_33%]"
          />
        </div>
        <p className={[
            "text-right mt-24",
            "transition-colors duration-700", // ← 色をなめらかに変える
            doneLetter ? "text-white" : "text-black",
          ].join(" ")}
        >
          <RevealText text={"Creating\nnew\nCommon"} className={`reveal-text text-right`} onComplete={() => setDoneLetter(true)}/>
        </p>
      </div>
      
    </section>
  );
}