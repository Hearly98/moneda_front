import React from "react"

const ImgOk= ({
  size = "262",
  className = ""
}) => {

  return (
    <svg 
    width={size} 
    height={size} 
    viewBox="0 0 103 130" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect id="Checkmark" width="103" height="130" fill="url(#pattern0_130_126)"/>
<defs>
<pattern id="pattern0_130_126" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_130_126" transform="matrix(0.0111111 0 0 0.00880342 0 0.103846)"/>
</pattern>
<image id="image0_130_126" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

    )
}

export default ImgOk
