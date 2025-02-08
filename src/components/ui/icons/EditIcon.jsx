import React from "react"
import IconSizes from "./IconSizes"


const EditIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
<svg 
className={`${size} ${className}`}
width="42" 
height="78" 
viewBox="0 0 42 78" 
fill="none" 
xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g id="Edit" filter="url(#filter0_d_107_80)">
<rect x="3" width="34" height="70" fill="url(#pattern0_107_80)" shapeRendering="crispEdges"/>
<rect x="3.5" y="0.5" width="35" height="69" stroke="#818181" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_107_80" x="0" y="0" width="42" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_80"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_107_80" result="shape"/>
</filter>
<pattern id="pattern0_107_80" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_107_80" transform="matrix(0.0111111 0 0 0.00539683 0 0.257143)"/>
</pattern>
<image id="image0_107_80" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2dvYrUUBiGY6E3syqClWgh2okX4D3YKWIjOJ0iKFg4eZ+TQsWfYqztbC31DgRZtdDdxlJdGAmO4EB2NTPJFyfnfSDlzHzn4Z3ky8k5M0VhjDHGGGOMMeb/JaV0Angi6RPwHfgIPJpOp0eHrm00AFcl7QHzhuOHpMtD17jxAJN9BC8dkm4MXevoJWPZcZItO1CyZQdKtuxAyZYdKPkP2W79IkTXfXZKaWvpw3KH/lL9cOix5SJ7e+hx5XJR/Db0mLKQLenD0OPJRfbjIkNxkxVes06a96qqOl7kAsvCwmRLulLkAs2ibrd5D0nXV5B8s8gFDk5jb7Itmf5lWzL9J9uS6V+2JdO/bEumdUu2SuvX6jUbDd3OT7RKdjbQz4ybZQdN2Ft2kGTLDpSct2xiJecpm2Eku0/Gkp3kjQOfLix5FOAkW/IowEm25FGAk2zJo8BJDsCSA7DkACw5AEsOwJIDsOQALDkASw4AOFxV1UlJ5yVdqzfOBD3nmxQ5I+mUJQclvN626yQHAOx6SUAAwDuvuwgAeOMLXwDAK68gCgB44WVaAQB33ScHkFI655uRNQGO/ctdWVmWZ4E7wDPgpaTXwNtFR3JQ+5f3Hd9vgFtdCEkpbQFfLbmB+Xx+SNL7rtIn6Z6T3ABwpsuvOnDJp4tmMWWX2xL0a8Yvn59iaDFZtNPlRWw2mx3pp9oNJqV00RtuAgCee3dTAJK+eCtZAIs/Gfjb46Vt4H79aCuiplFSdxb7yN2R9KAsy9N1nz10nRtP3SHUshfJ/izpaVmWF+puZOjajDHGGGOMMcYU6/ETBjeicSMH59UAAAAASUVORK5CYII="/>
</defs>
</svg>

    )
}

export default EditIcon