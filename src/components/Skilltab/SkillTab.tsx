import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import returnTabName from "../../utils/Helpers/returnTabName";
import Image from "../Image/Image";
import "./SkillTab.scss";

export interface SkillTabProps {
  topic: string;
}

export default function SkillTab(props: SkillTabProps) {
  const { topic } = props;
  const [state, dispatch] = useContext(store);

  return (
    <motion.div
      className={`skill-tab-container ${state.darkmode ? "dark-card" : "light-card"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: topic === "Python" ? 0.35 : topic === "prototyping" ? 0.35 : topic === "code" ? 0.65 :topic === "Applications" ? 0.35: 0.05 }}
    >
      <h3 className={`head ${state.darkmode ? "white" : ""}`}>{returnTabName(topic, state.language)}</h3>
      {topic === "languages" ? (
        <div className="skill-tab-list languages">
          <Image source="swift" name="Swift" />
          <Image source="c++" name="C++" />
          <Image source="javascript" name="JavaScript" />
          <Image source="css" name="CSS" />
          <Image source="html" name="HTML" />
          <Image source="java" name="Java" />
          <Image source="python" name="Python" />
        </div>
      ) : null}
      {topic === "iOS" ? (
        <div className="skill-tab-list">
          <Image source="swiftui" name="Swiftui" />
          <Image source="appstore" name="App Store" />
          <Image source="testflight" name="Testflight" />
          <Image source="xcode" name="XCode" />
        </div>
      ) : null}
      {topic === "collaborative" ? (
        <div className="skill-tab-list">
          <Image source="git" name="Git" />
          <Image source="github" name="GitHub" />
        </div>
      ) : null}
      {topic === "prototyping" ? (
        <div className="skill-tab-list">
          <Image source="figma" name="Figma" />
          <Image source="photoshop" name="Adobe Photoshop" />
        </div>
      ) : null}
      {topic === "code" ? (
        <div className="skill-tab-list one-item">
          <Image source="vscode" name="VSCode" />
        </div>
      ) : null}
      {topic === "Applications" ? (
        <div className="skill-tab-list one-item">
          <Image source="xcode" name="XCode" />
          <Image source="firebase" name="Firebase" />         
        </div>
      ) : null}
    </motion.div>
  );
}