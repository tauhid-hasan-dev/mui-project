import { Box } from '@mui/system'
import React from 'react'

export const Sidebar = () => {
    return (
        <Box bgcolor='red' flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>Sidebar</Box>
    )
}
