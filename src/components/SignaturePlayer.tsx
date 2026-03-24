"use client";

import { Player } from "@remotion/player";
import { SignatureComposition } from "./SignatureVideo";

interface SignaturePlayerProps {
  className?: string;
}

export default function SignaturePlayer({
  className = "",
}: SignaturePlayerProps) {
  return (
    <div className={className} style={{ width: "100%", aspectRatio: "480 / 120" }}>
      <Player
        component={SignatureComposition}
        durationInFrames={90}
        fps={30}
        compositionWidth={480}
        compositionHeight={120}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop={false}
        controls={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
