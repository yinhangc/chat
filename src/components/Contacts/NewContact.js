import React, { useRef } from 'react';
import {
  Drawer,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Box,
  Button,
  TextField,
  Divider,
  Stack,
} from '@mui/material';
import { useContacts } from '../../contexts/ContactsContext';

const NewContact = ({ setModalOpen }) => {
  const usernameRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const onSubmit = (e) => {
    e.preventDefault();
    createContact(usernameRef?.current?.value, nameRef?.current?.value);
    setModalOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ display: 'flex', flexDirection: 'column', width: 350 }}
    >
      <Typography variant="h5" component="h2" sx={{ mb: '16px' }}>
        Create Contact
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextField
          variant="outlined"
          label="Username"
          inputRef={usernameRef}
        ></TextField>
        <TextField
          variant="outlined"
          label="Display Name"
          inputRef={nameRef}
        ></TextField>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: '10px' }}
        >
          <Button
            variant="outlined"
            onClick={() => setModalOpen(false)}
            sx={{ flex: 1 }}
            color="error"
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" sx={{ flex: 1 }}>
            Add
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default NewContact;
