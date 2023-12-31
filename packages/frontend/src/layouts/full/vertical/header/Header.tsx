import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack, Button } from '@mui/material';
import { useSelector, useDispatch } from '../../../../store/Store';
import { toggleSidebar, toggleMobileSidebar } from '../../../../store/customizer/CustomizerSlice';
import { IconMenu2 } from '@tabler/icons-react';
import Search from './Search';
import { AppState } from '../../../../store/Store';
import Navigation from './Navigation';
import MobileRightSidebar from './MobileRightSidebar';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';
import NetworkSelect from './NetworkSelect';

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <IconMenu2 size="20" />
        </IconButton>

        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        <Search />
        {lgUp ? (
          <>
            <Navigation />
          </>
        ) : null}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {isConnected ? (
            <NetworkSelect />
          ) : (
            <Button color='secondary' onClick={() => open()}>
              Connect wallet
            </Button>
          )}
          {/* ------------------------------------------- */}
          {/* Toggle Right Sidebar for mobile */}
          {/* ------------------------------------------- */}
          {lgDown ? <MobileRightSidebar /> : null}
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
