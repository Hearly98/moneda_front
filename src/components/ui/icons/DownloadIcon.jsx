import React from "react"
import IconSizes from "./IconSizes"


const DownloadIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
<svg
className={`${size} ${className}`} 
width="51" 
height="41" 
viewBox="0 0 51 41" 
fill="none" 
xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g id="Open Document" filter="url(#filter0_d_80_66)">
<rect x="3" width="43" height="33" fill="url(#pattern0_80_66)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_80_66" x="0" y="0" width="51" height="41" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_66"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_80_66" result="shape"/>
</filter>
<pattern id="pattern0_80_66" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_80_66" transform="matrix(0.00852713 0 0 0.0111111 0.116279 0)"/>
</pattern>
<image id="image0_80_66" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/UlEQVR4nO3dP2hUMRwH8OjgHxT8g5M4WxBcHQRFFyfXA3tJKUIFHaqjY8eCgxZ0cTqotElz+V2lSPFPQR2KuOkiguAoCg5ildrFk1yrtXfvXZO+95L80vzgu7R3j9/vcyHtNdc7QlKlSpUqVapUqdDUcKOxh3J1g3H1mgr4wQS0vYXDChWwOChbp0hMRR/AMSrgrVdc0RsqYJny5gUSzUoOEJnFht3ZLgIAZbFj6z3ZNyTbDtiMw1JQoFz9jBLbNyzrgW6e6ffgU65+1XnrIsFWvmFZV3RPUWKHCB0ldqjQ0WGHDB0VdujQ0WBjgI4CGws0emxM0KixsUGjxcYIjRIbKzQ6bMzQqLCxQ6PBjgFaV12o85v9idXrGaRvWNaVS9MPj1aIvUh8lW9Y1h0ON4vM0xebwwrxVd5hRS+Gxq5qZRNf5R1WuE2CFgna+ypkaUWDd7i0dQj/qGmPFgna+4pjaUWDd6S0dQj/gGmPFmElPWERCdr7KmRpRYN3uLR1CP+oaY8WCTqWPKECRqiUA2xycp8OlfIE4+pa+q1DlADM4b0+qCUhVgCrr11GKFcvhmdnD5JQK5aVPBwysq44VnPzHAm90CML9bTffGNjYztJCIUfGkay5qpJuZcKdY9x+KZDBdzVXyO+Cj20lAM5c01krP7b7oXXG2pjTk3K/dlzqc8Z0F/cC/9ryD8WKxDbudzqGjSEJcRyLre6Bg1hCbGcy62uQUNYQizncqtr0BCWEMu53OoaNIQlxHIut7oGDWEJsZzLra5BQ1hCLOdyq2vQEJYQy7nc6ho0hCXEci63ugYNYQmxnMutrkFDWEIs53Kra9BQMOHqtz5sZQIu67/U1aceHepEzp4cmmldtZ3Lra5BQyGECvWO8ebpMucqX7BgQ97D4WVNygNlz1WuXgkNeV3JHD4OTs0dqWKu8uSigG4Wfm1GghbFDlurhtaHuZUc6OI6bIX7+l+PKVdfmYBbo/Pzu23nyru9vpY+wO1cX7/ZrIBG3jHZlso3LOvKEG8dz+pTI/feXs3nYdtA62voa2U86I1ooWtZq6jd3pH/xifZ2KbQechr0MulbSMooEnnndu/59+vF9sEuh9yJxyW9IMcJTTNe50GV3f633cj9mbQmyKvZqIU5BCh6zOtK1l9msGsY/eDtr1WpG89D8/yerUByvu+F+RQP0yhLtTZothb+15FyB3oabjuG5b1ruoPNSkPF8PeSipC/ts05eqNb1zWm+f9Xv1ZPnaFyBs+wilM7AU32A6Q/2+aChhlXL0K7AfkQrXYDpGxV03KXZTDnC0y5fBYf1aY7/6jxqYJuXrshOwAOyE7wE7IpPxaexo+zoT6tBoYL/rbxR+wx3TKMC5zXQAAAABJRU5ErkJggg=="/>
</defs>
</svg>

    )
}

export default DownloadIcon