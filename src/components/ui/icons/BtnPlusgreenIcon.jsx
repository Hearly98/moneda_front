import React from "react"
import IconSizes from "./IconSizes"


const BtnPlusgreenIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (

<svg 
className={`${size} ${className}`}
width="50" 
height="45" 
viewBox="0 0 50 45" 
fill="none" 
xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g id="Plus Math" filter="url(#filter0_d_120_144)">
<rect x="3" width="42" height="37" fill="url(#pattern0_120_144)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_120_144" x="0" y="0" width="50" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_120_144"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_120_144" result="shape"/>
</filter>
<pattern id="pattern0_120_144" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_120_144" transform="matrix(0.00978836 0 0 0.0111111 0.0595238 0)"/>
</pattern>
<image id="image0_120_144" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVR4nO2by2pUQRRF7yxqfP2Dry/qgZytAQfOQlQQwcdA8D8CHbSKok4SMuiPiOJEjU/wE1TQoUROG6QRgzdwO1V1ei84k+7JqcXmci/s6jpCCCGEEEKIe0YpnVxZXz9Reg+XrGxtnUfUJxLzZ0Tdt5GYPyHq41FK50rv5wJJ6cqs4L/HhF8Lm5dL79k0o5ROS9CPh0mekf0e4/Fy6X2bBUHv/U/yH9kh3y29b7NI1Jd9RSPkF6X3bRYJ+UfvREf9XnrfZkHfNB9M6X2bBRRN0a4AE03RrgATTdGuABNN0a4AE03RrgATTdGuABNN0a4AE03RrgATTdGuABNN0a4AE03RrsCiJtr6bRLyHWsFIeZvRxWB1ifo1+nZn+ntuXX9rLEpMe8VP2ysZIK+QUoXh291UvL+v1qsg/azJeij4gmKtU5+OJzo3+36Cg6l1Y31tweRvDqZLEnUn6UPhErH3Jgjio6NiDb6XG9Y1JGhHh2GPfBLHwiVjgS9P+jr3fS9sYKDoaYJ+k42Ns52Q2Iv55StM0nOr66HzQvdPLi5s3NKot6SqM+nn6OL+Qm+KyGvmYvOCziiiNL7NgsomqJdASaaol0BJpqiXQEmmqJdASaaol0BJpqiXQEmmqJdASaaol0BJpqiXQEmmqJdASaaol0BJvqYRIf+JR0J+csxreUPTC8l9W0R5d3S+zaL2A2w/oleK71vs2A8Xu5TrJSor1114Upw9Wm+hKhvD5ec9+bW6lw0bmxvn5GQH1i73q4yHNyp+WC/2X+l93PJ6mSyNNidEUIIIYQQQkhXM78ArOdLeCLDpawAAAAASUVORK5CYII="/>
</defs>
</svg>

    )
}

export default BtnPlusgreenIcon 