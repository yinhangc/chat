import React, { useState } from 'react';
import {
  Drawer,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Box,
  Button,
  TextField,
} from '@mui/material';
import Conversation from '../Conversation/Conversation';
import Contact from '../Contacts/Contacts';
import ModalComponent from '../shared/ModalComponent';
import NewContact from '../Contacts/NewContact';

const Sidebar = ({ name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  // Tabs
  const tabGroup = [
    { name: 'Conversation', elm: <Conversation /> },
    { name: 'Contact', elm: <Contact /> },
  ];
  const tabElms = [];
  const tabContentElms = [];
  tabGroup.forEach((t, i) => {
    tabElms.push(<Tab label={t.name} key={t.name} />);
    tabContentElms.push(
      <Typography
        component="div"
        role="tabpanel"
        hidden={activeIndex !== i}
        key={i}
      >
        {t.elm}
      </Typography>
    );
  });
  // Tabs EOL

  return (
    <>
      <Drawer
        sx={{
          width: 380,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 380,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: '#f0f2f5', justifyContent: 'center' }}
        >
          <Tabs
            value={activeIndex}
            variant="fullWidth"
            onChange={(e, index) => setActiveIndex(index)}
          >
            {tabElms}
          </Tabs>
        </AppBar>
        {tabContentElms}
        <Box
          sx={{
            padding: '12px 16px',
            borderTop: '#f0f2f5 solid 1px',
            mt: 'auto',
          }}
        >
          Your username: <b>{name}</b>
        </Box>
        <Button
          variant="contained"
          sx={{ padding: '10px 16px' }}
          onClick={() => setModalOpen(true)}
        >
          New {activeIndex === 0 ? 'Conversation' : 'Contact'}
        </Button>
      </Drawer>
      <ModalComponent
        open={modalOpen}
        setModalOpen={setModalOpen}
        content={{ title: 'Create Contact', field: ['name'] }}
      >
        <NewContact setModalOpen={setModalOpen} />
      </ModalComponent>
    </>
  );
};

export default Sidebar;
