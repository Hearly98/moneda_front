import React from "react"
import IconSizes from "./IconSizes"


const LogoutIcon= ({
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
<g filter="url(#filter0_d_101_36)">
<rect x="3" width="70" height="54" fill="url(#pattern0_101_36)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_101_36" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_36"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_36" result="shape"/>
</filter>
<pattern id="pattern0_101_36" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_101_36" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_101_36" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR4nO2dPYsUQRCG6wz8AP+A+rsWhC40V9dQw80UTC4wMtrgYLsYukAMFn+BH8F5/glBMNI7kYtGaoVL5BZ0p7tqZ94HKtyh+6F456N7Z4gAAAAAAAAAYAzM1+trvNLHSfRDEj1j0X4fKome2Zg5l0ezrrtKkbnXdXdSLp+9pfGulcuJzYWidvIoJMtFh38K2dkWF95yeOha6UOKBufy0V2MDFy5vKdocNbT8YnWU4qGuxSpUxQNbyEM0f6yGB3tL5IRHRqiKBreQhii/WUxOtpfJCM6NERRNLyFMET7y2J0tL9IRnRoiKJoeAthiPaXxejocUTHrOtuJNFXfxajyzcWfWFLe4gOGVa0Sf77t2VdRfZkO7rvDy5fXaoge8rRkXL5cfkxBpY9ZdGcy+H24wwoe8qi57Y7S8q6iewpizZss03K+mbbsVLWt/eXy+u0C1MX3Uy2txAOILqJbG8hHER0ddneQjiQ6KqyvYVwMNHVZDcVkPWcpTy5u3p9excRceb1D5d+jUU/rS3YYV7Pow2oT0d6q7rh5vMqX4MNSPsWkdF+XuVLsAHpKKMjZX0WUfS5ycbJcERFk768k/iiccMi9UXjFlzqdzQeKkn96MBjUqmf0XjwL/VPhljKkjZXHUn05fbjYHG231X0YrG4knL52USyMfT1K++TaNFfTSRPWbSRRJdNJBtTFj3rupsme9PZtj0sl0NscpThRV/Q9wdUmyl3dFO8hTBE+8tidLS/SEZ0aIiiaHgLYYj2l8XoaH+RjOjQEEXR8BbCEO0vi9HR/iIZ0aEhiqLhLYQnI3qML4GV8p2isXltu7sYHbRSLu8oGkl0PjrRog8oGpu9DbmceMvhoSqX45CvnjfsAwSjkJ3Lcct/FfwX1gX2iQ3Lt706QWY9tTFbXITtZAAAAAAAAAAgJ34D+T/5DE+fAN8AAAAASUVORK5CYII="/>
</defs>
</svg>

    )
}

export default LogoutIcon
