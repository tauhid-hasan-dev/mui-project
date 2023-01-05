import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';

function App() {
  return (
    <Box >
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
}

export default App;
