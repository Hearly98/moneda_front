import React from "react"
import IconSizes from "./IconSizes"


const BtnCloseIcon= ({
  size = IconSizes.md,
  className = ""
}) => {

  return (

<svg
className={`${size} ${className}`} 
width="49" 
height="45" 
viewBox="0 0 49 45" 
fill="none" 
xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect id="Cancel" width="49" height="45" fill="url(#pattern0_107_154)"/>
<defs>
<pattern id="pattern0_107_154" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_107_154" transform="matrix(0.0102041 0 0 0.0111111 0.0408163 0)"/>
</pattern>
<image id="image0_107_154" width="90" height="90" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFAklEQVR4nO2dy4tcRRTGC3xFFF0aH6Ci/gNRVyqG4IMsRF2o4AOMRjcGxhhkxtW4UwMD9tBS31e3oWGWvTDRLCL6BygSiWM2bhQXvo3OuEoPOF45TEXC0NPTM33qcbvrgwPDPKpP/aZu3VunTp1rTFFRUVFRUVFRUVFRUdFo6vV6l5G811r7MsnjJE+S/IbkdyT/ArAmJl/778nPTgJ4T/4GwD3SxogfN11yzt0C4HUAp0j+TbIe01ZJfkxyxlp7s5lmLSwsXE3yBQCfkVxXgDvQAPxD8lMAz3e73T1mWtRut6+VkQbgp1Bwh0D/neTbJK83kyqSVwB4E8CfsQEPAC4+HBOfzCTJOfcAyXOpAQ+wb0k+ZJoumRMBfADg3wygbjW6xbfFVqt1lWmirLW3kfwiNUiObl9VVXWnaZLkclR6TKsj26pz7oBpgpxzTwK4kAG0ejfmF0TPmJwF4NWQz8SMZ+vOuVdMjiL5hF8cpIZUK8J+2uQkmddI9jOAU2uaj6k8YnKQtfauht746h3ETe5IClmePeWxKAMYdeCRfSbpc7YsRlJDYDxbTLasznnFR/1RLX19MCrk+fn5ywEsp+4849u5qIEoicJl0Ok6kR2NGU8+n0GH60R2XhgEBw1gNoPO1ontWPDtJwC/KsYUZtvt9l4x/w/UXPT0N7fvFyAabf8cdFtM9vi0QACYHdD+QSXY0sbBAe3PafnvnHsuGGi/kariaLvd3jvoM5xzj44T/fNXymOD2q6q6gbFK+Z0EMiyba8ZNGpvAXoc2MMgizqdzk2KoNeDpDJI3oWik7VcxsM+bxfTyMDpYlObbyn34UgI0KeUneyPAGZU2Jpt7cROqEKWFCsAK8pO1ttd6qNMIxptjOH/imr6meTCaTtJndGYaiT/b1VV3a0J+nBA0PVuRmXKkbzJ90OaoI+HdJY7BJcLZG/vqIEG8FEEh+sdTAVJp4tgN8TIIdH+diAzgixX4llN0D9EBF2PMjUkni4u9fV7TdDRM0CxQ9gpIHv7QxO0VtSrDgE7IWSxfgHN5oEuUwfjTB3lZsg4N8PyeMcIj3f+rF+U+Y4NW7AA+FATdFmCM8IS3J9iDTkq1poaVHLOvagGuoRJOQz2PjXQJfDPOIF/kT9bneLG14/cVpob4SWOzig7OasMZhTYc8p9eE0dtGzVNz3doFLM6xAWw/owlqRKQJMTaDq6eR1hEmhEUoohZF4Hw6eEaeZ1PBu6xsYvSpfemp8zb/Q2p53kuLl9rXCvlMAIXvtjypPQaw/6DRNaS0tL10hoMHVnOemJ6CJfVKSeUpsxMQ8Lkfw6g07XE31YSETy/nL8LZLkkGMGo6yOYQDeN6kkx3bl+O4UQP6y1+tdaVJKDqT7g+mTCnnFOXe7yUHW2v1NrjrDrSGvWWsfNjnJWvv4pBVGIfmUyVFSHmcSSv1gY8AcNjnLl/xp8jTSz67Ezzalf1abeOOz1u43TVKn07kVwOcNgnwmeUmfMUsBLea8ghTfZDGS/DlZcbm+nCHkZWvtfWaSNL8RiDqaSYhVfJgRn8ykamkjni076j8mAPybFOputVrXmWlRt9vdI6UYAHwScqHj2z4te3xTVXp+kPye3hE5SubfRjEuYGnjhORdBEsJmJDXg+wj+RLJdyUbSHKQ5VUgcvLg4utB/CkE+d5Z+R3/u4fkb8vrQYqKioqKioqKioqKiszo+g8Twh196jBqNQAAAABJRU5ErkJggg=="/>
</defs>
</svg>

    )
}

export default BtnCloseIcon
