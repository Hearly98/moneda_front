import React from "react"
import IconSizes from "./IconSizes"


const HelpIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Help" filter="url(#filter0_d_101_32)">
        <rect x="3" width="70" height="54" fill="url(#pattern0_101_32)" shapeRendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_101_32" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="1" dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_32" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_32" result="shape" />
        </filter>
        <pattern id="pattern0_101_32" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_101_32" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)" />
        </pattern>
        <image id="image0_101_32" width="90" height="90" xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>
  )
}

export default HelpIcon; IconSizes