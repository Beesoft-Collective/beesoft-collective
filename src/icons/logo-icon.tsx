import { FC } from "react";

interface LogoIconProps {
  className?: string;
}

const LogoIcon: FC<LogoIconProps> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="147"
      height="45"
      contentScriptType="text/ecmascript"
      contentStyleType="text/css"
      preserveAspectRatio="xMidYMid meet"
      version="1"
      zoomAndPan="magnify"
    >
      <image
        width="117.75"
        height="41.25"
        preserveAspectRatio="none"
        transform="scale(1.1111)"
        xlinkActuate="onLoad"
        xlinkHref="data:image/png;base64,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"
        xlinkShow="embed"
        xlinkType="simple"
      ></image>
    </svg>
  );
};

export default LogoIcon;
