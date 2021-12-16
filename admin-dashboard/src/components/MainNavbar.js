import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
// import Logo from './Logo';
import logo from '../kreeLogo/logo.png';

const MainNavbar = (props) => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <img
          style={{
            width: '40px',
            height: '40px'
          }}
          src={logo}
          alt="logo"
        />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
