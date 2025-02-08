import React from "react"
import IconSizes from "./IconSizes"


const ServicesIcon = ({
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
<g filter="url(#filter0_d_101_21)">
<rect x="3" width="70" height="54" fill="url(#pattern0_101_21)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_101_21" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_21"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_21" result="shape"/>
</filter>
<pattern id="pattern0_101_21" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_101_21" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_101_21" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfklEQVR4nO3dP27UUBAG8FdBjsCfnIOKgoqKFmnhDeQCBDqW26SIlBk5b1ZUuUFAVIGjoIDAFegtHRKO1ng9b8bfJ029659GY3ts7aaEIAiCIAjiJkcnJweZyxvi8imLfiPRX00Ua59FL591mwfJe/KpHmbRL+ao8u/Koj8ynz9Orju5cWSKgL0dFw0gUnTsOpOt8WgJ2MR63Swol+9hsK0xaaBedJuHQ42Qufx8zpsnyUOsMWmg6vcLg906dBhsD9AhsL1Au8f2BO0a2xu0W2yP0C6xvUK7w/YM7QrbO7Qb7AjQNZnPH920GzF9eGCNSQO1Ont/b2Lsy2QVa0waKtb1rscziM3aJ6s0Dt1X7Ck7O1nFHFPmLUALoM27kNDRag6H0SH2qJjRAmjzjiN0tJojYXSIPSBmtLRVuGERQJt3IS2yo1l7kvJ210XPlKmfXZdNf75LXOh1aiRb7KjQ+VTvpkZy1HV3wkKvDEfG33nZdffDQlNDoyNzeRcZuh/z1GPKLONkKL4L0AJo8y4kdLSaw2F0iD0qZrQA+uauYOw6FnfDQth1zBPsOmYKdh0zBbuOPQe7DrG/TsZ1tLRRySrWB06AtkchdLSag2F0SNvlZ0bzfncd/3PpFg163eoeIxR0num9jjF7jFDQq5mefo/ZY4SCpplGx5g9RjTofp/vdeBkKDEqWcX6wAnQ9iiEjlZzMIwOabswowXQ5l1I6Gg1h8PoEHvUtmZ0wz89T5NX+WoI7e/PFGhscfloB32mrxcE/coM+vji4nbm8nkByFdPu+5WMv8Lp8jYXK7qfju1kG1nix7XORbiBMl6nbl8qOPCvJMRBEEQBEHSLvkN6bV515esdA4AAAAASUVORK5CYII="/>
</defs>
</svg>

  )
}

export default ServicesIcon
