import React from "react"
import IconSizes from "./IconSizes"


const InsuranceIcon = ({
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

<g id="Protect" filter="url(#filter0_d_101_19)">
<rect x="3" width="70" height="54" fill="url(#pattern0_101_19)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_101_19" x="0" y="0" width="78" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_19"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_19" result="shape"/>
</filter>
<pattern id="pattern0_101_19" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_101_19" transform="matrix(0.00857143 0 0 0.0111111 0.114286 0)"/>
</pattern>
<image id="image0_101_19" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFUElEQVR4nO2dXWgcVRSAb0Wtvy8i+IdKH8V/EPWlVsWfqu2DD9F279lEfWhVjL4oKqiBoqCgDyIoRW2gqXNOZs7ZxIBBBCmIrbZEaRCkVXzwl2rVSlujtdaVM5uVVpJusjtz78zmfnAg5Gfmni9n7t69c++sMYFAIBAIBAKBQCAQOJo169efAHG8pBrXlgFJr0V52hK/DChDFuUdQP4IUHYCyVdA/KuGJTkAJHWNxteN76e/g7LTIm9t/K0M6bH0mHrs9BxxvETPabqRnjg+w2Ky1JKstSgvWGQElA8tyneW5HBTmqvQc+q5tQ2AEqVtStuWLNW2mqLTE8cnW5Jrq8O1+y3JK5b4fSDe7VokdBy8W9uuOWguECXXaG5e5fYNDp5kSfoBeRsgH/IvSfIJzQ15u0V+RHN2Krk3js+zJJPeJZDb0Jw1dyeS+8fHF1vkHb6TBl+ykXeog9xF6yXkO1nwHZE8nLto7a+8J0qeq5rk49xFW+TffScK/kUfyF207yShIBFEUxBd912FoaLJv7jQdZB/qaGPpiDae8VBqGjxLil0HeRfYOijKRtBFvlPQHm8L47P1tCvAeVgEE3ZSq5g7bYZphWeCKIpI9Fp1fLKmd46r4rePiuIpnwlN0SPnhtEU4fdBckfM3UXR0+U8ZNBNOUrWX+evkCGUYfk0l0oVeJb9Z8RhndUTMkaJm8yGwVQeSW7EY3y90KXDMiHFu49Q3QkufHGZ1/uogHlF+9Syd3oYubgPbmLtihfdtjQD9J1bcgPAfJE+STrOXlX7qLTlZjtX97RwMDAcc1jLdu8+XiLvKFMkpvFkr9o4qTdBlY28YX/P56KB5Q3SyRZC2bY5I0lfr7N6js820Lw+cqei+Qq8e25SE6DnzN5AyT3tl3RxDfMdty5yvYvWep2OOkzebM6rl3ddgOJd61+a+zMdmUXQbJGNUquMo6W7badiCX+XO9szHqCen2RJXm1nXEyRLI8i3FyqyuqJ45PNC7Q1ZQdNnZyPpWdyotkue9KTtuCvNW4AojXdV4ZPLfKLkglO30hbKJ9VEaX4WTLyia5vAiV3IwK8XXGGVptuo3MgewiSdbpB+d7FS3ya1klYFt1I967i6Zoft24xmJyS5ZJ2HlUtvNKno4q8U3GOfX6ouktxHWXlQ0+KrkRXxw5T+MU3Z2UdUL2GLI9StYr7kHji/tGR08HlN9ySGpSF7Ucea4K1lb46C7S9iDv7Ynj04xPgOSlfCqIf0yfToB8jyUZBOR/fEhOA+VF45vp7cr/Pd6h6wJlv65kMkXAIj/jXQjlFfyUKdRjJFC+7kLJ364ZGzvFFAk7nIB/MZJ1rDKFI50E4vcKIKeeRViUdzUnU0T0RcMi/+xbEnQcvMcOyTmmyNhI7ix9NQ8nd5kykI57yyoZeYMpC/rsofRxagUQB/MJ5InCjTJake54Iv7Guzyaa/D3zp6XlDXVKLmyFO8aUfa3upNTeHQOF1CmCix5CiK50XQDEMnNvqY3W0g+aCO5w3QTFY/TnMfY3LnCdCMWk+vzmL9uQ/I+vRVnupneKLnY72iEf6jEI1eYhUA1ji8A5E/c98k8cTeOnG8WEn2Nh8i+4bC72FS6NyNZAsgP5Dr8Q5nSrRy+8ywEVaxdZEk+zaGKP+uNkst851co+sfHFwPJs5bkrwyqWBdGrnO2vLaMVOKRS3VpbNtVTLIFSC7xnUdpAOKVjQ9SmKvkdMjYW9i7IkWmv7G74DG94zF7Pyw/AcqjTh6e3e3Axo2n6uik8fEfvDf9SBD99AuStfoz3+0LBAKBQCAQCAQCAVNm/gWsKh4eX0GeewAAAABJRU5ErkJggg=="/>
</defs>
</svg>

  )
}

export default InsuranceIcon