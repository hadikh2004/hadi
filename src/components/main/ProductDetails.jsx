import { AddShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"


const ProductDetails = () => {
    return (
        <Box sx={{display:"flex", alignItems:"center" ,gap:2.5,flexDirection:{xs:"column", sm:"row"}}}>

            <Box>
                <img width={300} src="src\images\images.jpg" alt="" />
            </Box>

            <Box sx={{textAlign:{xs:"center", sm:"left"}}}>
                <Typography variant="h5"> Women's Fashion</Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
                    $12.99
                </Typography>
                <Typography variant="body1">
                Lizards are a widespread group of squamate reptiles,withe over 6,000 speciels,ranging across all continents expect Antarctica
                </Typography>

                <Stack sx={{justifyContent:{xs:"center",sm:"left"}}} direction={"row"} gap={1} my={2}>

                    {["src/images/banner-15.jpg","src/images/images.jpg"].map((item)=>{
                        return(
                            <img height={100} width={90} key={item} src={item} alt="" />
                        )
                    })}
                </Stack>

                <Button sx={{
                    textTransform:"capitalize",
                    mb:{xs:1,sm:0}
                }} variant="contained">

                    <AddShoppingCartOutlined sx={{mr:1}} fontSize="small"/>
                    Buy now
                </Button>
            </Box>
        </Box>
    )
}

export default ProductDetails
