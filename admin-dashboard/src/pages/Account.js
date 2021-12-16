import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from '../components/account/AccountProfile';
import AccountProfileDetails from '../components/account/AccountProfileDetails';

const Account = () => {
  const [userDetail, setUserDetail] = useState(null);
  return (
    <>
      <Helmet>
        <title>Account | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item lg={4} md={6} xs={12} width={280}>
              <AccountProfile userName={userDetail} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails setUserDetail={setUserDetail} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
