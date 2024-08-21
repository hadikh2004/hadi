import { Box, Container, Divider, Stack, Typography, useMediaQuery } from "@mui/material"
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AccessAlarmOutlined from "@mui/icons-material/AccessAlarmOutlined";
import WorkspacePremium from '@mui/icons-material/WorkspacePremium';

import { useTheme } from "@emotion/react";

const IconSection = () => {
    return (
        <Container sx={{ bgcolor: "",mt:3 }}>
            <Stack divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem /> : null} direction={"row"} alignItems={"center"} sx={{ flexWrap: "wrap" }}>

                <MyBox
                    icon={<ElectricBoltIcon />}
                    title={"Fast Delivery"}
                    subTitle={"Start from $10"} />
                <MyBox
                    icon={<WorkspacePremium />}
                    title={"Money Guarantee"}
                    subTitle={"7 Days Back"} />
                <MyBox
                    icon={<AccessAlarmOutlined />}
                    title={"365 Days"}
                    subTitle={"for free return"} />
                <MyBox
                    icon={<CreditScoreIcon />}
                    title={"Payment"}
                    subTitle={"Secure system"} />



            </Stack>
        </Container>
    )
}

export default IconSection




const MyBox = ({ icon, title, subTitle }) => {

    const theme = useTheme()
    return (
        <Box sx={{ width: 250, display: "flex", flexGrow: 1, alignItems: "center", gap: 3, py: 1.6, justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left" }}>
            {icon}

            <Box sx={{}}>
                <Typography variant="body1" >{title}</Typography>
                <Typography sx={{ fontWeight: 300, color:theme.
// @ts-ignore
                palette.text.primary }} variant="body1">




                    {subTitle}
                </Typography>
            </Box>
        </Box>
    )
}



