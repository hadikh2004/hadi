import { useTheme } from "@emotion/react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetPokemonByNameQuery } from "../../Redux/pokemon";


const Main = () => {

    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (_event, newValue) => {
        setAlignment(newValue);
        setmyData(newValue)
    };

    const theme = useTheme()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    const allProductsApi='products?populate=*'
    const menCategoryApi="products?populate=*&filters[category][$eq]=men"
    const womenCategoryApi="products?populate=*&filters[category][$eq]=women"



    const [myData,setmyData] = useState(allProductsApi);
    const { data, error, isLoading } = useGetPokemonByNameQuery(myData)


    if(isLoading){
        return(
            <Typography variant="h6" >LOADING.......</Typography>
        )
    }


    if(error){
        return(
            <Typography variant="h6" >{error.
// @ts-ignore
            message}</Typography>
        )
    }


    if (data) {

        return (
            <Container sx={{ py: 9 }}>
                <Stack direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={3}>


                    <Box>
                        <Typography variant="h6">Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">
                            All our new arrivals in a exclusive brand selection
                        </Typography>

                    </Box>

                    <ToggleButtonGroup
                        color="error"
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233 ,69 , 96 , 0.5) !important",
                                color: "#e94560",
                                background: "initial"
                            }
                        }}
                    >
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={allProductsApi} aria-label="left aligned">
                            All Products
                        </ToggleButton>
                        <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} className="myButton" value= {menCategoryApi} aria-label="centered">
                            Men category

                        </ToggleButton>
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={womenCategoryApi} aria-label="right aligned">
                            Women category
                        </ToggleButton>

                    </ToggleButtonGroup>
                </Stack>

                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

                    {data.data.map((item) => {
                        return (
                            <Card key={item} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { scale: "1.1", transition: "0.3s", rotate: "1deg" } }}>
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productimg.data[0].attributes.url}`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.attributes.productTitle}
                                        </Typography>

                                        <Typography variant="h6" component="p">
                                            ${item.attributes.productPrice}
                                        </Typography>

                                    </Stack>

                                    <Typography variant="body2" color="text.secondary">

                                        {item.attributes.productDescription}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="small">
                                        <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                                        Add to cart
                                    </Button>
                                    <Rating name="read-only" value={item.attributes.productRating} readOnly />
                                </CardActions>
                            </Card>
                        )
                    })}
                </Stack>


                <Dialog

                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton sx={{ ":hover": { rotate: "180deg", transition: "0.3s", color: "red" }, position: "absolute", top: 0, right: 10 }}
                        onClick={handleClose}>
                        <Close />
                    </IconButton>

                    <ProductDetails />


                </Dialog>


            </Container>
        )
    }
}

export default Main
