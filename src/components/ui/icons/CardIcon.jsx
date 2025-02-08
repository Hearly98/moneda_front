import React from "react"
import IconSizes from "./IconSizes"


const CardIcon = ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
    <svg 
    className={`${size} ${className}`}
    width="78" 
    height="56" 
    viewBox="0 0 78 56" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

<g id="Magnetic Card" filter="url(#filter0_d_98_15)">
<rect x="3" width="70" height="48" fill="url(#pattern0_98_15)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_98_15" x="0" y="0" width="78" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_15"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_15" result="shape"/>
</filter>
<pattern id="pattern0_98_15" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_98_15" transform="matrix(0.00761905 0 0 0.0111111 0.157143 0)"/>
</pattern>
<image id="image0_98_15" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABm0lEQVR4nO2cO04DMRRFpwL2ANuisgUbIGFJKZDiq5FfmyXwqYCloKE3MlVoImxE3iQ5R3r96OjO9XiKNwwAAAAAAAAAAAAAsIvb1eoipHwfU34Jss8oK4yV6iLInuPalovN5vxPKQoPdhVk74i1neEKKb9VV/1JRnJpkd2V7O+6oCZKi4MgWzSLrp2MaGs7j1J+6hBtE6KtUbRN7aKpjdLjANHaz2cpojVT0QAAAAAAALOFfx3GFTzO+IcXiRaii3cKSbT8xVEdOqGO/o+vnW28pSFa/kJJtI5QNGOIjiTajvpNoDqE6OKdQhItf3FUh/yl0tFCdPFOHImWvySqQ/4C6WjNa7iwCNHFO4UkWv7iqA75S6WjhejinTgSLX9JVIf8BdLRmtdwYRGii3cKSbT8xVEd8pdKRwvRxTtx80s0i1FKu+j80SGaVT9xL6t+1rb0fg3joU3Kd82i62qxumLM/eF1IJPy6/U4ng3dCwaRXX4j+WYcL7sk/0i2bFH7hwPStuTaFFJ+rHXRnWQAAAAAAAAAAACA4WT4ApZW0CtxTVykAAAAAElFTkSuQmCC"/>
</defs>
</svg>

    )
}

export default CardIcon