import React from "react"
import IconSizes from "./IconSizes"


const BackArrowIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
<svg 
className={`${size} ${className}`}
width="57" 
height="32" 
viewBox="0 0 57 32" 
fill="none" 
xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect id="Back" width="57" height="32" fill="url(#pattern0_107_112)"/>
<defs>
  
<pattern id="pattern0_107_112" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_107_112" transform="matrix(0.00623782 0 0 0.0111111 0.219298 0)"/>
</pattern>
<image id="image0_107_112" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABV0lEQVR4nO3cvUrEUBRF4YyFP+A7p9TCyFxIcU5j+l1aDL6RlSAqWF4JdjZW5pp91wfTTXFYbKJFmGEAAAAAAADArpRSLjLzLiJeIuIjM3OapqvWd9lFjohTZtYfn2x9Ww+Ra0S8tb7PPnJ+f15b39hD5BoR963v7CHyaf1e61t3S9J5Zj7+EvlpWZbL1rfulohMZAtiyUS2IJZMZAtiyUS2IJZMZAtiyUS2IJZMZAtiyUS2IJZMZAtiyUS2IJZMZAtiyX+v8HLLNjLzljeItgn9zBtEhPaRmTc8OjZQ+GO4HfHvHbEtiWUT25JYNrEtiWUT25JYNrEtiWUT25JYNrEtiWUT25JYNrEtiWUT25JYNrEtiWUT21LhJZ1/F/u44Uldx36vtR5a39nDj8B+juN41vrGHmI/tL7NNfZxfVysS14jz/N83fouW7XWA89lAAAAAAAGZ1+fM/7uLj63hwAAAABJRU5ErkJggg=="/>
</defs>
</svg>
 
  )
}

export default BackArrowIcon