import React from "react"
import IconSizes from "./IconSizes"


const WalletIcon = ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
    <svg
    className={`${size} ${className}`}
     width="78"
     height="64"
     viewBox="0 0 78 64"
     fill="none"
     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

<g id="Card Wallet" filter="url(#filter0_d_80_40)">
<rect x="3" width="70" height="56" fill="url(#pattern0_80_40)" shapeRendering="crispEdges"/>
</g>

<defs>
<filter id="filter0_d_80_40" x="0" y="0" width="78" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_40"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_80_40" result="shape"/>
</filter>

<pattern id="pattern0_80_40" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_80_40" transform="matrix(0.00888889 0 0 0.0111111 0.1 0)"/>
</pattern>

<image id="image0_80_40" width="90" height="90" 
xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVR4nO2cPW/TUBSG7wIMIGYQDEgIRsLE14DEx1/o0N7TdkPio0jll7RlCmyN8Dly7km3TiDE0iJAggnYYUKIgSIVpqAbEELQOG6T+Dj2+0h3Sx3fp29eX9uJnQMAAAAAAAAAsDNTabqfEr1NHDa96DcS7VqM+N6ew4YXvXWj2dznqoRv6VHi8MpKbob0l/NpesRVJslcPsl/BocXlUg2xbqwljlY9k036XjR5+YiB1UIhw036RDr1gSI/uomHeozuXFsM8/2x7E/pYAgGqKprImekXCFODwg0Xf/nnT0+xtCovMzx52TXsKTsnQiVbGjiduXPIfPZZoYVU30PK+d8KyfyjYxKtn+DA2JPs67Fs3YRheisyQnejWvZIgegt+ri//PokS3KdHFylz1soZY3++Y3kQXrfetUvS7RoEkj5h+XQzRBYn2HO6N+r1qTV/RottRdrw9Zb2PlWA3S7sqDB9v2sabFIneXVhfPwDRUoB0Dm98S48j0VKM7EKSbf1RphIML7oA0VKAbA6bEC1FiNYtiJZi6gOiBaK71gcxJFrsxaE6xF4qOlog2jxxhESruSRUh9gLREdLuQZOWASiu9YpRKKleFG976GILk2nnXO0unqwN5L2eS9h2XP4juqQUYgOH+aS9pmMa+6N+Bp0tAyX5CzJf8vOSjYOhjJQ9lLuu0kcViBa9pbo2Ml5RXvRCxAtexM9laaH8oqOr4VoGb9o32odhmhBdZR81RGWd9HR95Fo2aPoX0u2xiDJM+naWWL9AdEyTLJ7JyONLMme9WPWNty4sf7o0yiTzWElLuHiATKO2bRzsVcXGUmGaCn2H4VEC0R3resCiRZ7cagOsZeKjhaINk8cIdFqLgnVIfYCy9PRE/AYNaqI6J1/dF+z4cYvOjy0niTVQfSshOvWk6S6POGRWJ9ZT5aq/vO3yCx3TpOELzUWfccVxYyEy7WUzeF1fPa1K5LpR+EUiT6tk+S5ND3mrPDcvuZFm17C28qts1m34nOkY10UnmQAAAAAAAAAAAAAV05+AsUClsHPAr6VAAAAAElFTkSuQmCC"/>
</defs>
</svg>
  )
}  

export default WalletIcon