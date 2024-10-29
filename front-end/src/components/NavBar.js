import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SearchProduct from "./SearchBar";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
    const navigate = useNavigate()
    function LogOut() {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <Box>
            <Box>
                <Box sx={{ borderBottom: '1px solid #E6E6E6',paddingBottom: '5px', mt: '5px'}}>
                    <Stack direction={'row'} justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <LocationOnIcon style={{ marginRight: 2, fontSize : 18 }} />
                            <Typography variant="h6" component="span" fontSize={'13px'} > 
                                23 Đ. 17/3, P. Đống Đa, Pleiku, Gia Lai 600000, Việt Nam
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                        <PhoneInTalkIcon style={{ marginRight: 6, fontSize : 24 }} />
                        <Typography variant="h6" component="span"> 
                            0973810467
                        </Typography>
                    </Box>
                    </Stack>
                </Box>
                <Box>
                    <SearchProduct/>
                </Box>
            </Box>
        </Box>
    );
};

export default ResponsiveAppBar;
