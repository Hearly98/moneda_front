import React from "react"
import IconSizes from "./IconSizes"


const SettingsIcon = ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
    <svg 
    className={`${size} ${className}`}
    width="78" 
    height="62" 
    viewBox="0 0 78 62" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

<g id="Settings" filter="url(#filter0_d_107_160)">
<rect x="3" width="70" height="54" fill="url(#pattern0_107_160)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_107_160" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_160"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_160" result="shape"/>
</filter>
<pattern id="pattern0_107_160" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_107_160" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_107_160" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>
  )
}

export default SettingsIcon