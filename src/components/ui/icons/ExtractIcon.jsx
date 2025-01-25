import React from "react"
import IconSizes from "./IconSizes"


const ExtractIcon = ({
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
<g filter="url(#filter0_d_98_13)">
<rect x="3" width="70" height="54" fill="url(#pattern0_98_13)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_98_13" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_98_13"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_98_13" result="shape"/>
</filter>
<pattern id="pattern0_98_13" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_98_13" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_98_13" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEUlEQVR4nO2cy04UQRSGO/EWJcZEjUaI8bLyCTRxw1NMBOqgiQsQBfQR2Kkb17owMaPMKYtzBiTK1oUKxLvxEjW6EzWuVFxpAFODIqJoV9PVPdWcL6mEwKT7ry+Hqu6a6o6iwFDIfUrTqbxzFBqF3AeaZ2wT2RlIBpGdnWQQ2dlJBpGdnWQQ2dlJBpGdnWQQ2dlJFtkZShbZGUoW2RlKFtkJWUxk0uMJiyCiMwKkokV0oQCpaBFdKEAqWkQXCpCKFtGFAqSiRXShAKloEV0oQCpaEARBEAQhDTrOnVsFFT4GyDcBedLXt9UQWkOeVEijSvPRkjGrlyS5pXJlq9J8P/dO6TpvSGOt/cObE0luvn59pUhmF9m3S8ascBYNSF25V4oOqynNnUlEj+UdHAJrdsxOIFomPnAX/dldtMtJkD9GBUUhfXZx4XwC7/8ygaA0j9ePaM1Ho4KiNPfUh2ike0u+YK9jekZG1gDSg3xFI91rqQw1RgXnoDFNcWU7H/xfM6vSfCuVW8+AsH21SxG12+5/TJDOB07tQEsEyuWGNqQ2pYmV5ieg6ZNt9mf7O/s3+5nMcxVFdPPsEsCJWbH/v7xUSMcT3QIvZ9EtlaFGO/67zPY/rn7uqIu8LYuMwYtu66fdoPm1q+RfsumVPYbvnEGLhnK5QWl6llTyvPby8NDQeq9ZgxaNfCEFyT/H7fNes4YqGioD+1KTPCd7YL+3vMGK1nQ1ddGarvjLG6BoMGYXIE2nX9E0fQgHdxZKtL1zUsinQdNb0DRhXy4V986x/XL1SPrVPCe7I04G1/y5ibbBFn427pu8QFPVl2iFTHEyuObPTfRsJfzRyXexOon02JtozY/i9dctf56iJ/4S9E2ccynkD96GDk3v4/XXLX9dDR2g+WSscyF981jRX+NkcM2fm+jaZFILayvDbTJUjt/LOVb0pzgZXPPnJnopKE0vvIlGfu4jc5iikQf9DR3EPjKHKVrbdWdfFU3dPjIHKbrtEu1QmqfSr2aeOoCD231kDlK0RSFfS7+iZa3jD1pNdW+a6x32sq61n/ZEngi2oi2AdDY90XQm8kjQokvGrFVIN1Ko5vGO4eF1PrMGLdpSMmaDXZ9ILBr5acmYjZFnvItWmr/UNv4hdS+nDTQ9dmtYhXtt360D76J/rx56YLdLRQXnoDFNCulhHCfOB3cYD+8XubJ7RkbWxJXsVXStVfhYVFCgwr0uLtxP4DLLy0b0mWwqOuZSZIi4PsvjfAK/a8RczIY8mUT0aO7BdWANacxdtObO3IPrwBpSl7Nou9fYPnabe3gdRrNbhu2e7igJ7dXqJnmCluNU8l0o85ZEkudV9mr7vEptzJanaWcWvEbihh1iE1eyIAiCIAiCIAhCVAd8B0wg5lRw1LN/AAAAAElFTkSuQmCC"/>
</defs>
</svg>

  )
}  

export default ExtractIcon