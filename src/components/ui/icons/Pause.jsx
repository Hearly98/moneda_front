import React from "react"
import IconSizes from "./IconSizes"


const Pause = ({
  size = IconSizes.md,
  className = ""
}) => {
  return (
    <svg
        className={`${size} ${className}`}
        width="56" 
        height="56" 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="56" height="56" fill="url(#pattern0_448_144)"/>
        <defs>
        <pattern id="pattern0_448_144" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_448_144" transform="scale(0.0111111)"/>
        </pattern>
        <image id="image0_448_144" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDUlEQVR4nO2cO05DMRBFXQFL4LctJCRbsAECHbAbCqR49OSRqFgCnwpYCgoNlZGhQRA6x2OccyQ3Kfzik5vxR4mdAwAAAAAAAAAAd3x1teVjOgsxPXrRtyCaR2xe9M2LPoS5ns5ubzebfvT+Wve96Iu1hNBaekzPZeztkryGksM32U2S/VkuOhhwsJQtOlu56FKTrQcarFtM9w1E68J8oGItWherF209SOmjIVoQna1TSKLFXhylQ+ylUqMF0eaJCyRazSVROsRe4Ng1Oup7kHR+OL/ZLS1Evfh6zaifgUVf/HpOkWTVz6ii/bXu/HzO8TRtW/UzrGhX6Vk9vOdqIFoR7ToIB4kWROdaSSTRwmTIZCjUaEfpYB2dWXUsgeWdsDP8E3aGyobFdRCOapBoRbTrIBwkWhCdayWRRAtnHUyGQo12lA7OOjKrjiWwvBPOOv6EnaGyYXEdhKMaJFoR7ToIB4kWROdaSSTRwllHF5Ph4fxm9+dzjqZpz6qfYWt0WPIDch/TpVk/A4t+L5Kq/LWiRj/Dipb/1xAtiM7WKSTRYi+O0iH2UqnRgmjzxAUSreaSKB1iL7CfGs11bDlIem0gmgsGQ5MLBud6av21DdYtppOViy4XoJaLUNdY8tPBNG24Ztcar6PsmJ7K+bZryWeyRWelXg09QUZd+JjuSrlolmQAAAAAAAAAANc3HyTGVNZeC0BbAAAAAElFTkSuQmCC"/>
        </defs>
    </svg>
    )
}

export default Pause
