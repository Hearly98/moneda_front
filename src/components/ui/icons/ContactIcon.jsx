import React from "react"
import IconSizes from "./IconSizes"


const ContactIcon= ({
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
<g id="Call male" filter="url(#filter0_d_106_61)">
<rect x="3" width="70" height="54" fill="url(#pattern0_106_61)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_106_61" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_61"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_61" result="shape"/>
</filter>
<pattern id="pattern0_106_61" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_106_61" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_106_61" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

    )
}

export default ContactIcon
