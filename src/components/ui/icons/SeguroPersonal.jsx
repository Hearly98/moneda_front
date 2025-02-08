import React from "react"
import IconSizes from "./IconSizes"


const SeguroPersonal = ({
  size = IconSizes.md,
  className = ""
}) => {
  return (
    <svg
        className={`${size} ${className}`}
        width="73" 
        height="79" 
        viewBox="0 0 73 79" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="73" height="79" fill="url(#pattern0_460_82)"/>
        <defs>
        <pattern id="pattern0_460_82" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_460_82" transform="matrix(0.0111111 0 0 0.0102672 0 0.0379747)"/>
        </pattern>
        <image id="image0_460_82" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
        </defs>
    </svg>
    )
}

export default SeguroPersonal
