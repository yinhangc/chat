import React, { useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import socket from '../../socket';
import './Login.scss';

const Login = ({ onUsernameSubmit }) => {
  const nameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!nameRef?.current?.value) return;
    onUsernameSubmit(nameRef?.current?.value);
    // socket.auth = { username: nameRef?.current?.value };
    // socket.connect();
  };

  return (
    <div className="Login">
      <form onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          label="Username"
          inputRef={nameRef}
        ></TextField>
        <Button variant="contained" type="submit">
          OK
        </Button>
      </form>
    </div>
  );
};

export default Login;
