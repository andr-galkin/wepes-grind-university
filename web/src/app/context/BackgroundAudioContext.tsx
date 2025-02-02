"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Howl } from "howler";

const BackgroundAudioContext = createContext({ backgroundMusic: null });

export const BackgroundAudioProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [backgroundMusic, setBackgroundMusic] = useState(null);

  useEffect(() => {
    const music: any = new Howl({
      src: ["/sounds/backgroundMusic.wav"],
      volume: 0,
      loop: true,
    });

    setBackgroundMusic(music);

    const playMusic = () => {
      music.play();
      window.removeEventListener("pointermove", playMusic);
    };

    window.addEventListener("pointermove", playMusic);

    return () => {
      music.stop();
      window.removeEventListener("pointermove", playMusic);
    };
  }, []);

  return (
    <BackgroundAudioContext.Provider value={{ backgroundMusic }}>
      {children}
    </BackgroundAudioContext.Provider>
  );
};
