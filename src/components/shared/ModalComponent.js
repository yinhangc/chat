import React from 'react';
import {
  Typography,
  Box,
  Button,
  Modal,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';

const ModalComponent = ({ open, setModalOpen, children }) => {
  return (
    <Modal open={open} onClose={() => setModalOpen(false)}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default ModalComponent;
