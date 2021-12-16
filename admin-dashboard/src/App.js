import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useRoutes, useNavigate } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import store from './store/store';

const App = () => {
  const content = useRoutes(routes);
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [userInfo]);

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {content}
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
