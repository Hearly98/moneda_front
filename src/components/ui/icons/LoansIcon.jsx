import React from "react"
import IconSizes from "./IconSizes"


const LoansIcon= ({
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
<g filter="url(#filter0_d_98_14)">
<rect x="3" width="70" height="54" fill="url(#pattern0_98_14)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_98_14" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_14"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_14" result="shape"/>
</filter>
<pattern id="pattern0_98_14" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_98_14" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_98_14" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

    )
}

export default LoansIcon