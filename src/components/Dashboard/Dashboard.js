import React from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.scss';

const Dashboard = ({ name }) => {
  return (
    <div className="dashboard">
      <Sidebar name={name} />
    </div>
  );
};

export default Dashboard;
