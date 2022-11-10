import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AppHeaderBar from './AppHeaderBar';

export default function MainPage() {
  const navigate = useNavigate();

  const uuid = uuidv4();
  return (
    <>
      <AppHeaderBar />
      <Typography variant="h3">MainPage</Typography>
      <Button variant="contained" onClick={() => navigate(`/${uuid}`)}>
        NEW BOARD
      </Button>
    </>
  );
}
