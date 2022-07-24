import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useContacts } from '../../contexts/ContactsContext';

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.username} disablePadding>
          <ListItemButton>
            <ListItemText>
              {contact.name} @{contact.username}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
