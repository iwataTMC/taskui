import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import ButtonAppBar from './ButtonAppBar';

export default function BoardPage() {
  const navigate = useNavigate();
  const uuid = useParams().id;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);
  const [title, setTitle] = useState('');

  const inputComment = () => {
    if (comment !== '' && uuid !== undefined) {
      setComments(comments.concat(comment));
      setComment('');
    }
  };

  return (
    <>
      <ButtonAppBar />
      <Typography variant="h3">BoardPage</Typography>
      <Typography variant="h5">Board-ID:`{uuid}`</Typography>
      <Button variant="contained" onClick={() => navigate(`/ReactTypeScriptDemo/`)}>
        MainPage
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          setComments([]);
          setTitle('');
        }}
      >
        AllClearComments
      </Button>
      <br />
      <br />
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          id="fullWidth"
          label="タイトルを入力して下さい"
          variant="standard"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <br />
      <br />

      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="コメントを入力して下さい"
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></TextField>
      </Box>
      <Button variant="contained" onClick={inputComment}>
        コメントを追加
      </Button>
      <br />
      <br />
      <Typography variant="h5">Comments List</Typography>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );
}
