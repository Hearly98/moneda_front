import React from "react"
import IconSizes from "./IconSizes"


const AccidentesPersonales = ({
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
        <rect width="73" height="79" fill="url(#pattern0_453_167)"/>
        <defs>
        <pattern id="pattern0_453_167" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_453_167" transform="matrix(0.0111111 0 0 0.0102672 0 0.0379747)"/>
        </pattern>
        <image id="image0_453_167" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
        </defs>
    </svg>
    )
}

export default AccidentesPersonales

