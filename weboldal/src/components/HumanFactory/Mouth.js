import { ReactComponent as MouthSvg } from "../../images/mouth.svg";

export default function Mouth({ lipColor, mouthPosition }) {
  return (
    <div>
      <MouthSvg
        fill={lipColor}
        style={{
          position: "absolute",
          top: mouthPosition,
          left: "210",
          height: "800px",
        }}
      ></MouthSvg>
    </div>
  );
}
