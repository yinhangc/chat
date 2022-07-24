import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Conversation = () => {
  return (
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Conversation;
