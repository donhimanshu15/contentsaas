import React from 'react';
import {
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { PropTypes } from 'prop-types';

const FormDetailPaper = (props) => {
  const { formData, handleDelete } = props;
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      {formData !== '' ? (
        <Paper sx={{ width: '600px', padding: '20px' }}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={handleDelete}>
              <Delete color="error" />
            </IconButton>
          </Box>
          <Typography
            textAlign="center"
            sx={{ m: 2 }}
            variant="h1"
            component="div"
          >
            {formData.contentName}
          </Typography>
          <Typography
            textAlign="center"
            sx={{ m: 2 }}
            variant="h3"
            component="div"
          >
            {formData.type === 'general' && 'General Information Form'}
            {formData.type === 'custom' && 'Custom Form'}
          </Typography>
          {formData.field[0].firstName && (
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="First Name"
            />
          )}
          {formData.field[0].lastName && (
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Last Name"
            />
          )}
          {formData.field[0].email && (
            <TextField
              fullWidth
              disabled
              margin="normal"
              label="Email"
            />
          )}
        </Paper>
      ) : (
        <></>
      )}
    </Container>
  );
};

FormDetailPaper.propTypes = {
  formData: PropTypes.object,
  handleDelete: PropTypes.func
};

export default FormDetailPaper;
