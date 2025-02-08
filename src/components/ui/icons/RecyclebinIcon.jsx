import React from "react"
import IconSizes from "./IconSizes"


const RecyclebinIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (
    <svg 
    className={`${size} ${className}`} 
    width="36" 
    height="39" 
    viewBox="0 0 36 39" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect id="Delete" width="36" height="39" fill="url(#pattern0_118_26)"/>
<defs>
<pattern id="pattern0_118_26" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_118_26" transform="matrix(0.0111111 0 0 0.0102564 0 0.0384615)"/>
</pattern>
<image id="image0_118_26" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEklEQVR4nO2cPU9UURCGx49GC/6AX7HHX6DGaKm2hHjPYGnUSmzURmKjtSJKf3HncJlZErQnwUbt9Bdgp40QiCZKseYYYrGJiZgDZ+Y4T/I2VLsPJ/du3nf3AjiO4ziO4zhOGbDrTmJPJlOaOT7h/4ddINDCWSTZxCiDXyHZbCKfdtmZQeJ3vyVvJ0R546Kzi5bvw6LT31x0btFxSPJ2XDQApGsoEr8NUX78SVTppNeWLkFmr/fpU0Eg3igtEv9WOPGGyU8ygfh2aXm489N9CzRybWnpMBLPIMl6aUm4eyd9LUR+OtZ1h4qJRuLZ0iJwr0I8W0Ty1NTUfiT5VlxA3LOT/TW9ZxcdKxX9v106AvFzKEW6QYQo0+mGUVoE7lr4CxI/KXozdBzHcRzH2Xuq7DtI1kEbSPyhuJiYNyHKe9AGRn5VWgxmD78EbYQoz8qLkbwhngFtYOR7xcXEvAnEd0EbGCWUFoOZ0xA3oPILLgrkYMZMdP0zoI2JrjteWgxmzjgtHgNtjHXdASTeKi0Hc4V469zy8kHQSCD5WFxQzJZV0Eogfq1A0CBTVkArGOWFAkGDHAnEc6AVjPKoHtHyELQSotwsLQhzhfgGaKWh/uVqTnRPLoFWmm7xVGlBmC+joJXQtiPVnOi2HQHN1DAABOI10E4NA0DQWPjXOQCwvsK/ygGAFBb+NQ4AQWPhX+MA0Ggs/IdJZbl50dHAL7RqGADGNRb+1Q0ApLjwr2wAWAUrGB8AVsAKlgeAoLnwr2kACJoL/2FSaV5aGP5jJub718EKqTQ3KzryRbCC8QFgFKxgeQAI2gv/GgaAYKHwr2EACBYK/zoGANZf+FcxAJCBwn+YVJ7bEy13wBqpPC8uLu4sYX7hCljD4gDQWCj8axgAxi0U/uYHADJU+BsfAFbBKsYGgBWwCpK0di4d0oJVTD02syeTYJXQylHNT9rF7aTXeLXrjoBlMMoD9aKJ74N10tMPQ5RpvaeZH8NgsA9qAXtyIZAshsifS8vFyJ8wcr+JfL60F8dxHMdxHMdxHMdxHDDIT8LQZusXWOojAAAAAElFTkSuQmCC"/>
</defs>
</svg>

    )
}

export default RecyclebinIcon

