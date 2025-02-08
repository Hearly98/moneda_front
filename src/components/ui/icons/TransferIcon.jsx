import React from "react"
import IconSizes from "./IconSizes"


const TransferIcon = ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
    <svg 
    className={`${size} ${className}`}
    width="78" 
    height="64" 
    viewBox="0 0 78 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_d_98_17)">
<rect x="3" width="70" height="56" fill="url(#pattern0_98_17)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_98_17" x="0" y="0" width="78" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">

<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_17"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_17" result="shape"/>
</filter>
<pattern id="pattern0_98_17" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_98_17" transform="matrix(0.00888889 0 0 0.0111111 0.1 0)"/>
</pattern>
<image id="image0_98_17" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

  )
}

export default TransferIcon
