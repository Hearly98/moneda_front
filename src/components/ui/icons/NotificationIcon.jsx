import React from "react"
import IconSizes from "./IconSizes"


const NotificationIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (

    <svg 
    className={`${size} ${className}`}
    width="71" 
    height="61" 
    viewBox="0 0 71 61" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<g id="Doorbell" filter="url(#filter0_d_105_54)">
<rect x="3" width="63" height="53" fill="url(#pattern0_105_54)" shapeRendering="crispEdges"/>
</g>
<defs>
<filter id="filter0_d_105_54" x="0" y="0" width="71" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_105_54"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_105_54" result="shape"/>
</filter>
<pattern id="pattern0_105_54" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_105_54" transform="matrix(0.00934744 0 0 0.0111111 0.0793651 0)"/>
</pattern>
<image id="image0_105_54" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9ElEQVR4nO2cz2+URRjHJyiKHtSgAaMQNBEvxD/BkAgXJHrb2HaepRdTuICGhIOn3iHiDzC2waTG2n0eps+zqz0QEqM1GkORkMDFQDjizaBCqUatrRlSGxKg7L7vbp+Z3eeTfJOm6bs788mzz7y7M1vnDMMwDMMwDMMwjOIMjo2t88hvAfJZT3JzKTNQkwP7T516uMRDG//jx2WTJ7kIJIt3i0e+EP9m+QKjYCWvIPl22VbZJfCxXdxH8rJskv1lnqunAeSzzYoG5DPa480WQJltXrTMao83S/onpp5qWvJSqvX6k9rjzgI/Pv5Y9WR9n0f+HlDmWxW9dM13nmRvfCzt+SRHX+3LjZ74SEutoolWAiSH4TPZ4HqdodHRtR75oEe+0TbBd4Svx+fYPj39oOtFBrHxnCf5oXOC77j9O9c/wVtdL+FrsruzVXzv6q4Sv+p6AUAeKrTQta93z3uSN10340n2AvKCmuRl2bzQtbIHsL5LtZLvVtk1ed11E1Wsv6jTk1dOHFPXLJCVEB4C5PPaUu8pm+RcvM10uQPE72jLbKKyD7mc6at98UzcDYEEZK4YlNnBEJ52uQLIH6pLpKbzrsuRSgjrPcmfCQhcbLJ9zA02Gk+43PAkb2vLg1Zl57hLE1fzDEXPuJzYE8KzSbwDpJZF/5vVouhPToK2NCiePpcLnviDBIQtFgryey4XPMpX6sKoWDzKaZcLHuVKtqKJL7tcAJTftYVB0aBcc7ngSf7OWPRfLhfUZVG5uFzQFgUmWtQlWkWTvmBrHWSirUdrov3Sh15oHfGMm7YoKJkszunFnRVtUVAyWey0DHzOW7RFQcm8gY3NLnUGQuMlbVFQMntqk9tc6gDxa9qioGSyOHEaD6Noi4KSiQfXXep4kk+yF00y6lIHkH/sAtEzLmUqITye1NFcKhjkf5L+Vlc8b6wuidpU1TXZ7VIFSN7vGtHER12KDA8PrwHiq10jGuXnSggPuNSoEu/UlgPtTk1ecakBKJ+qi6E2VzXJmLZXwzAMwzCMDjM0NfUoIH+U9UFGKni7h/ybJz5eCeGR1fh0bkR7wqAd5JHOv81G+UN9oqRe2XPRhYmmzEVHrHVIFP2x6zRxIfAkx+LCoP0ShlUP/xq/dr0qi2GnAeQTpYUgn9CeR/J44svlRcsl7Xkkj0eeK71YkdzUnkfyQFv+myNf155H8gDKpfIVzT9pz6NXFsMR7XkkT7Ude48p7vWliCf+unDbQP5We/zZACE8D8S/FLituwYhvKA9/qzwOPnyLXEtSI7XaI87S/oneCuQTDch+Rur5DbgcXJHPEobb9tu3WejzMaf4+9s4TMMwzAMw3C38R/p9YM86IxdDQAAAABJRU5ErkJggg=="/>
</defs>
</svg>

  )
}

export default NotificationIcon

