import React from "react"
import IconSizes from "./IconSizes"


const MenuIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (

    <svg 
    className={`${size} ${className}`}
    width="81" 
    height="70" 
    viewBox="0 0 81 70" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g id="Activity Feed" filter="url(#filter0_d_105_53)">
<rect x="3" width="73" height="62" fill="url(#pattern0_105_53)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_105_53" x="0" y="0" width="81" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_53"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_53" result="shape"/>
</filter>
<pattern id="pattern0_105_53" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_105_53" transform="matrix(0.00943683 0 0 0.0111111 0.0753425 0)"/>
</pattern>
<image id="image0_105_53" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/klEQVR4nO2cMU4cQRBFOwIfAbCvhWSpS3ABFmde34YAabs06pKI9ghgR9hHsZaEaFEvCSKfqu7Z96TKp9/+/TOqoFMCAAAAAAAAAIB0fXf3JZf6Q0r9k9VeRG2/xMlqL1ntt2zsdrXdnrr+9PnevmW1f9ESxFt6qX/b2f2SfISS5YNsl2Qf6qKDA0ukbLXV7KJbJ0cfVKKn1CcH0bYLP6hGi7bd/KKjD6l9DKIV0fvoFJJojRdHdWi8VDpaER2eOCHRFi6J6tB4geN2dLFX0frz++bhInVGeyYptn5/xvFFr1PnHGSPLjrf23nqnOtpOhtedI+V8Zmrafo6vOgRqiOX+msJol+b7B6TvayX4UInIdoQLR0kkURrvDyqQ+PF0tGK6PDUCYm2cFFUh8ZLHLOjWZO6iV6nzmFN6gRrUidYkzrBmnRmWJNq/OfbeJ93C52EaEO0dJBEEq3x8qgOjRdLRyuiw1MnJNrCRS2vOliTuolep85hTeoEa1InWJM6wZp0ZliTavzn23ifdwudhGhDtHSQRBKt8fKoDo0XS0crosNTJyTawkX1Xx1cx7YXrf8dRHPBoLhcMLix2+i/rURPqTezi24XoLaLUI9Y8vPlNJ0kt2uNj1F2qc9td508OSRbbdX6atEvyGK7XOpjqwu3JAMAAAAAAAAApL55A6skGAfUzSZFAAAAAElFTkSuQmCC"/>
</defs>
</svg>

  )
} 

export default MenuIcon