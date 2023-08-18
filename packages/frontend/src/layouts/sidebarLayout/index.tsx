'use client';

import { FC, ReactNode, useContext } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import Sidebar from './sidebar';
import Header from './header';
import { SidebarContext } from '@/contexts/sidebarContext';

interface SideBarLayoutProps {
 children?: ReactNode;
}

const SideBarLayout: FC<SideBarLayoutProps> = ({ children }) => {
 const { sidebarToggle } = useContext(SidebarContext);
 return (
  <>
   <Header />
   <Sidebar />
   <Box
    sx={{
     position: 'relative',
     zIndex: 5,
     display: 'block',
     flex: 1,
     marginLeft: {
      xs: sidebarToggle ? '240px' : 0,
      lg: '240px',
     },
     marginTop: '80px',
    }}>
    <Box display={'block'}>{children}</Box>
   </Box>
  </>
 );
};

SideBarLayout.propTypes = {
 children: PropTypes.node,
};

export default SideBarLayout;
