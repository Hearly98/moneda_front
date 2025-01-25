import React from "react"
import IconSizes from "./IconSizes"


const DiscountIcon= ({
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
<g id="Discount" filter="url(#filter0_d_101_20)">
<rect x="3" width="70" height="54" fill="url(#pattern0_101_20)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_101_20" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_20"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_20" result="shape"/>
</filter>
<pattern id="pattern0_101_20" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_101_20" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_101_20" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

    )
}

export default DiscountIcon
