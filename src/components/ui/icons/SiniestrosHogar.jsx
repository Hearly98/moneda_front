import React from "react"
import IconSizes from "./IconSizes"


const SiniestrosHogar = ({
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
        <rect width="73" height="79" fill="url(#pattern0_453_169)"/>
        <defs>
        <pattern id="pattern0_453_169" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_453_169" transform="matrix(0.0111111 0 0 0.0102672 0 0.0379747)"/>
        </pattern>
        <image id="image0_453_169" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
        </defs>
    </svg>
    )
}

export default SiniestrosHogar
