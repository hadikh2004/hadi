import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, useScrollTrigger, Zoom } from "@mui/material"


const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({threshold:100})}>
       <Fab
       onClick={()=>{
        window.scrollTo(0 , 0)


       }}
       
       
       size="small" color="primary" aria-label="add" sx={{position:"fixed",bottom:33,right:33,}}>
       <KeyboardArrowUp  fontSize="medium" />
      </Fab>
    </Zoom>
  )
}

export default ScrollToTop
