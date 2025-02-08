import React from "react"

const DebitcardBack= ({
  size = "262",
  className = ""
}) => {

  return (
    <svg 
    width={size} 
    height={size} 
    viewBox="0 0 331 212" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_434_43)">
    <g filter="url(#filter1_i_434_43)">
    <rect x="3" width="322" height="204" rx="25" fill="url(#paint0_linear_434_43)"/>
    </g>
    <rect x="3.5" y="0.5" width="321" height="203" rx="24.5" stroke="#B3B3B3"/>
    <rect x="2" y="39" width="322" height="35" fill="#222831"/>
    <rect x="21" y="92" width="282" height="37" rx="10" fill="#94D0D4"/>
    </g>
    <defs>
    <filter id="filter0_d_434_43" x="0" y="0" width="331" height="212" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="2" dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.504167 0 0 0 0 0.504167 0 0 0 0 0.504167 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_434_43"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_434_43" result="shape"/>
    </filter>
    <filter id="filter1_i_434_43" x="3" y="0" width="324" height="208" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="2" dy="4"/>
    <feGaussianBlur stdDeviation="3"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_434_43"/>
    </filter>
    <linearGradient id="paint0_linear_434_43" x1="164" y1="0" x2="164" y2="204" gradientUnits="userSpaceOnUse">
    <stop stop-color="#5CE8F1"/>
    <stop offset="0.05" stop-color="#3BB3D4"/>
    <stop offset="0.48" stop-color="#3DA1B8"/>
    <stop offset="0.855" stop-color="#286E91"/>
    </linearGradient>
    </defs>
    </svg>

    )
}

export default DebitcardBack