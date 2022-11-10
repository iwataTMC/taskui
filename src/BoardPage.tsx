import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import AppHeaderBar from './AppHeaderBar';
import QRCode from 'qrcode.react';
import AppFooter from './AppFooter';

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

  const url = window.location.href;

  function clickURLCopy() {
    navigator.clipboard.writeText(url);
    alert('URLをコピーしました\n' + url);
  }

  return (
    <>
      <AppHeaderBar />
      <Typography variant="h3">BoardPage</Typography>
      <Typography variant="h5">Board-ID : {uuid}</Typography>
      <br />
      <QRCode value={url} />
      <br />
      <br />
      <Button variant="contained" onClick={clickURLCopy}>
        URL COPY
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => navigate(`/ReactTypeScriptDemo/`)}
      >
        MAIN PAGE
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
        All CLEAR COMMENTS
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
        ADD COMMENT
      </Button>
      <br />
      <br />
      <Typography variant="h5">Comments List</Typography>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <AppFooter />
    </>
  );
}
