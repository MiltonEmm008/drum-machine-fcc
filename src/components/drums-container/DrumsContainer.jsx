import React, { useEffect, useContext } from "react";
import DrumPad from "../drum-pad/DrumPad";
import { ActionContext } from "../../context/ActionContext";
import styles from "../drum-pad/drumpad.module.scss";
import drum_style from "./drumcontainer.module.scss";

const drumsData = [
  {
    keyword: "Q",
    audioSrc: "/audio/Heater-1.mp3",
    audioDesc: "Heater 1",
  },
  {
    keyword: "W",
    audioSrc: "/audio/Heater-2.mp3",
    audioDesc: "Heater 2",
  },
  {
    keyword: "E",
    audioSrc: "/audio/Heater-3.mp3",
    audioDesc: "Heater 3",
  },
  {
    keyword: "A",
    audioSrc: "/audio/Heater-4_1.mp3",
    audioDesc: "Heater 4",
  },
  {
    keyword: "S",
    audioSrc: "/audio/Heater-6.mp3",
    audioDesc: "Clap",
  },
  {
    keyword: "D",
    audioSrc: "/audio/Dsc_Oh.mp3",
    audioDesc: "Open HHzz",
  },
  {
    keyword: "Z",
    audioSrc: "/audio/Kick_n_Hat.mp3",
    audioDesc: "Kick n Hat",
  },
  {
    keyword: "X",
    audioSrc: "/audio/RP4_KICK_1.mp3",
    audioDesc: "Kick",
  },
  {
    keyword: "C",
    audioSrc: "/audio/Cev_H2.mp3",
    audioDesc: "Closed HH",
  },
];

function DrumsContainer() {
  const { handleActionChange } = useContext(ActionContext);

  function playDrumSound(drumElement) {
    const drumAudio = drumElement.querySelector("audio");
    drumAudio.currentTime = 0;
    drumAudio.play();
    handleActionChange(drumElement.id);
    drumElement.classList.add(styles["drum-active"]);
    setTimeout(() => {
      drumElement.classList.remove(styles["drum-active"]);
    }, 100);
  }

  const handleDrumClick = (e) => playDrumSound(e.currentTarget);

  const handleKeywordClick = (e) => {
    const keyPressed = e.key.toUpperCase();
    const drumData = drumsData.find((drum) => drum.keyword === keyPressed);

    if (drumData) {
      const drumElement = document.getElementById(drumData.audioDesc);
      if (drumElement) {
        playDrumSound(drumElement);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeywordClick);

    return () => window.removeEventListener("keypress", handleKeywordClick);
  }, []);

  return (
    <div className={drum_style["drum-container"]}>
      {drumsData.map((drum, index) => (
        <DrumPad {...drum} key={index} onClick={handleDrumClick} />
      ))}
    </div>
  );
}

export default DrumsContainer;
