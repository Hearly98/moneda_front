import React from "react"
import IconSizes from "./IconSizes"


const CambiarPin = ({
  size = IconSizes.md,
  className = ""
}) => {
  return (
    <svg
        className={`${size} ${className}`}
        width="56" 
        height="56" 
        viewBox="0 0 56 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="56" height="56" fill="url(#pattern0_448_142)"/>
        <defs>
        <pattern id="pattern0_448_142" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_448_142" transform="scale(0.0111111)"/>
        </pattern>
        <image id="image0_448_142" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJ0lEQVR4nO2dS4gcRRiAy2dUFJ8HXwcVD4rgwQceFJSQixHxNOBO1eyAh8XL6kVdQWSih/iIHoIHWVAXDDv/vzX/P7usYUUEg6AmUfEBihoT9SLBRIXNmsToJiv/zIhL7Nn0zHRXT3fVB33cquqva/561yoVCAQCgUAgEOiB6tTUORroUQO0WyP/YZBXkngkLY28y9T5kfGFhXXKZ/Q2vlojf5mU3K7Sgb6QvJS3NRnTl7xatpc1W0u4cCR5VTgZV75hgHa7Fm2AdirfMMBL7kXzkvINDXS4i4xjBumJB+tzV/aapvyNAZ5opxEZpw8r3zDIP3URPTFw2iI7MkbTj8o3DPI7kTK28RWDpl219vIuot9WvqGRtkTJ6CdkRIaQaNFblG+UoflAWqFDAz0ZlbbkqXyjPL39YgO8HNkYAk8k3hgCL0ueykc08icO+9AfK18xyC+6Eq2BX1C+Yuq83lmNrvN65Ssla8/QwAfSr8306907dpypfMYAv566aOTXlO/oOt+XtugK0kblO+MLC+sM0mKKYeOQzH1n/Z5DgUF+ObUaDfxS1u83NIxNTp4lQgzSweQk00EZckvaWb/f0GN6lJt1eXOLCaLdEEQ7oseYXHNVrsJhgmQ3hJrsiHjDa3reVXkKi4k9lxFkD0RPQ+0gu39C984RQbQjgmhHhAGLI8KAxRFhwOKI0K1zRPzlKo/3bGTQ63hODTuy50FWijXypAH+tn0MjRY18lca6FUNjXtqtdrprstVmO7daL1xkwxdNfD+GEPcvbKBsDo7e5Gr8uVa9Ki1V8mJKI38Wa8vYtoT7IsaaWsVZq9Ju6y5E12y9twKNksG6S0D9Hd/gvmkGs7HJb0K0oa0yt3tiMRQrbBITK3Y5l2duJvuCSigzw3QmHzQbGRnILkVd4E3dT2Mk+KjkX6RmC/hyZ3sjGqya7kmsobzMY1kTb1xhyoqmUvG/4WVTw3yaOG2zWYuFruEFeAfJASUrL1EFYGshZpTh5UlaaAr0LxR5ZnMRWLMGo58XAO/a5DuVysrp6m8kbVA05d0+k4GUWPz8+epvJC1NDOIcDnP0o7jyffHrb1WJp408PedXtFeg/xM33llLcsk8QC/l4RsGbSVoXmvjGDbI9moj0sf9ZVX5pIwMdl9H1WWno0BfqxTa+P8kjb5LPrrXt+9Um/cpoHeMMBHeslLwonPoo/EvgRrplEd5OogjXzUX9HIe9Z6z/I0XSdLWAmde/nGY9FUi5yRRNpokLZ3a9z6eTTQU16K1sgfru4JVJrNSzXQ4wZ5X+L5Ab9fsvZsf0QDL7f6uEi1fyVr5Ns18pTE0BQ+5lENvLkvybkWja4+KJ2QKVyJ8X0JDqI5Ti3eVUa6cyDBQTSvJXmPrJkmOnnVU5wCOqSRX5G1xZK158ukjka+xSA9a5B+zvxnnsgxZR5P5ZhyzELskyHuWpc5dbpSGzor5yfyFYdbk0ZbU92DcooCfCA/Ibn5pac0rb2+s9HmgBcNXSwpJ2Wugf7UyG+O1hs3J3G3RgWbpfaE/dBJ3plYQxeH/wTzfpmVGpmevyyNfEam6Qap5Qbp98I1dHGQLoyeaYy4uqfiobm5CyozzYflxvHCNHTDTtnO3ioLr12vLM5LQ5cXStZeKFvEZNtvLhu6PFJp7f8jq5H/yk1Dl2eqcqcz8IRclj30DV0RqHUGQq29eVG37bbj8G/yUbz8dx5p0Fkl2Sw1tzUVKsc6gJ+WGJ9KhoFAIBAIBAKBQCCgCsQ/A7K00oTOvUEAAAAASUVORK5CYII="/>
        </defs>
    </svg>
    )
}

export default CambiarPin

