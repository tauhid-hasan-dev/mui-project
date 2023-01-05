
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material'
import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: 'space-between'
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white",


}))

export const Navbar = () => {
    return (
        <AppBar position="sticky">
            {/* toolbar will give some default padding to the appbar */}
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>CRM</Typography>
                <AccountBalanceIcon sx={{ display: { xs: "block", sm: "none" } }}></AccountBalanceIcon>
                <Search>Search</Search>
                <Icons>Icons</Icons>
            </StyledToolbar>
        </AppBar >
    )
}
