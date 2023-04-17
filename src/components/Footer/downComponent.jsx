import React from "react";
import { Flex, Box, Text } from '@chakra-ui/react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function DownComponent() {
    return (
        <Flex bgColor="#ef4f10" width={'full'} height="100px" justifyContent="center">
            <Box display="flex" justifyContent="space-between" width="80%" alignItems="center">
                <Text fontSize={'lg'} fontWeight={600} color="white">@2019 all rights rederved</Text>
                <Box display="flex" flexDirection="row" width="30%" justifyContent="space-between">
                <GitHubIcon fontSize={'large'} sx={{ color: 'white'}}  />
                    <FacebookOutlinedIcon fontSize={'large'} sx={{ color: 'white'}}/>
                    <InstagramIcon fontSize={'large'} sx={{ color: 'white'}}/>
                    <PinterestIcon fontSize={'large'} sx={{ color: 'white'}}/>
                    <TwitterIcon fontSize={'large'} sx={{ color: 'white'}}/>
                </Box>
            </Box>
        </Flex>
    );
}

export default DownComponent;