import React from "react"
import IconSizes from "./IconSizes"


const RightArrowIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
    <svg 
    className={`${size} ${className}`}
    width="34" 
    height="27" 
    viewBox="0 0 34 27" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect id="Forward" width="34" height="27" fill="url(#pattern0_88_9)"/>
<defs>
<pattern id="pattern0_88_9" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_88_9" transform="matrix(0.00882353 0 0 0.0111111 0.102941 0)"/>
</pattern>
<image id="image0_88_9" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO3cvUrEQBiF4V0LV8HbO9UEvIJcQzoFmy2stko5Q5ivsQjekCDY+YNlJHbiTyHJRL+8D2y7DC+HsAthNhsAAAAAAAD8irruNCQ7hGTPVcoPVbKruu935JxYSHaokg0fP7kn9pSGYVtFe/ocmtiTCzE/fh2a2JOqYt5/H5rYk6n7fjc+k4ldgLruOES7+Sl2iHZ73rYnJc7jmohNbJfEsontklg2sV0Syya2S2LZxHZJLJvYLollE9slsWxiuySWTWyXxLKJ7ZJYNrFdEssuh5d0/lxsuyx5phU/RvL90mdcS+i7pc+4ikdHiHax9Dn/tZo3VufHz7sCiExkH8S/QSK7IJZMZBfEkonsglgykV0QSyayC2LJRHZBLJnILoglE9kFsWQiuyCWTGQXxJLnV/NySxkh2TV33s2saZqjEPMLtziWCJ3slasyCwjJWu4jLUBddzbGfl/2eMVxzHvujp7TMGxn/X4AAAAAALBZqTfwUqgENWjNWwAAAABJRU5ErkJggg=="/>
</defs>
</svg>

  )
}

export default RightArrowIcon