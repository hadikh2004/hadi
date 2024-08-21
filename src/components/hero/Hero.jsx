import { Box, Button, Container, Link, Stack, Typography } from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Slider.css"
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";



const mySlider = [
    {text:"MEN ", link:"src/images/banner-15.jpg"},
    {text:"WOMEN ", link:"src/images/banner-25.jpg"},

]

const Hero = () => {
    const theme = useTheme()
    return (
        <div>
            <Container >


               <Box sx={{ pt:2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
               <Swiper
                 slidesPerView={1}
                 spaceBetween={30}
                 loop={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    // @ts-ignore
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {mySlider.map((item)=>{

                        return(

                            <SwiperSlide key={item.link} className="parent-slider">

                            <img src={item.link}alt="" />
                            <Box
                                // @ts-ignore
                                sx={{
                                    // @ts-ignore
                                    [theme.breakpoints.up('sm')]: {
                                        position: "absolute", left: "10%", textAlign: "left"
    
                                    },
    
                                    // @ts-ignore
                                    [theme.breakpoints.down('sm')]: {
                                        pt: 4,
                                        pb: 6
    
                                    },
    
    
                                }}
    
                            >
                                <Typography
                                    sx={{
                                        color: "#222"
                                    }} variant="h5">
                                    LIFESTYLE COLLECTION
                                </Typography>
    
                                <Typography
                                    sx={{
                                        color: "#222",
                                        fontWeight: 400
    
                                    }} variant="h3">
                                   {item.text}
                                </Typography >
    
    
    
                                <Typography sx={{
                                    color: "#000",
                                    fontWeight: 300,
                                    my: 1
                                }}>
    
                                    Get free Shopping on orders over $99.00
                                </Typography>
    
                                <Button sx={{
                                    px: 5,
                                    py: 1,
                                    mt: 2,
                                    backgroundColor: "#222",
                                    boxShadow: "0px 4px 16px rgba(43,52,69,0.1)",
                                    color: "#fff",
                                    borderRadius: "2px",
                                    "&:hover": {
                                        bgcolor: "gray",
                                        boxShadow: "0px 4px 16px rgba(43 , 52 , 69 , 0.1)"
                                    }
    
    
                                }} variant="contained" >
    
                                    Shoppe Now
                                </Button>
    
                            </Box>
    
                        </SwiperSlide>

                        )

                    }
                    
                    )}
                   
                    

                </Swiper>


                <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }} >

                    <Box sx={{ position: "relative" }} >
                        <img width={"100%"} src="src\images\banner-17.jpg" alt="" />

                        <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 31 }}>
                            <Typography variant="caption"
                                sx={{
                                    color: "#0203445",
                                    fontSize: "18px"
                                }}>
                                New Arrivals

                            </Typography>
                            <Typography variant="h6"
                                sx={{
                                    color: "#0203445",
                                    lineHeight: "16px"
                                }}>
                                Summer

                            </Typography>




                            <Typography variant="h6"
                                sx={{
                                    color: "#0203445",

                                }}>
                                Sales 20% Off

                            </Typography>


                            <Link
                                sx={{
                                    color: "#0203445",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    transition: "0.2s",
                                    "&:hover": {
                                        color: "red"
                                    }
                                }}
                                href="#"
                                underline="none">
                                Shop now +

                            </Link>
                        </Stack>

                    </Box>



                    <Box sx={{ position: "relative" }}>
                        <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
                        <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 31 }}>
                            <Typography variant="caption"
                                sx={{
                                    color: "#0203445",
                                    fontSize: "18px"
                                }}>
                                Gaming 4K

                            </Typography>
                            <Typography variant="h6"
                                sx={{
                                    color: "#0203445",
                                    lineHeight: "16px"
                                }}>
                                Desktops &

                            </Typography>




                            <Typography variant="h6"
                                sx={{
                                    color: "#0203445",

                                }}>
                                Laptops

                            </Typography>


                            <Link
                                sx={{
                                    color: "#0203445",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    transition: "0.2s",
                                    "&:hover": {
                                        color: "red"
                                    }
                                }}
                                href="#"
                                underline="none">
                                Shop now +

                            </Link>
                        </Stack>
                    </Box>

                </Box>
               </Box>

                <IconSection/>

            </Container>
        </div>
    )
}

export default Hero
