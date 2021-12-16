import React from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper
} from '@material-ui/core';
import PropTypes from 'prop-types';

const FormFilledTable = (props) => {
  const { formFilledData } = props;
  let i = 0;
  return (
    <TableContainer sx={{ mt: 2 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">S.No</TableCell>
            {formFilledData[0].firstName && (
              <TableCell align="center">First Name</TableCell>
            )}
            {formFilledData[0].lastName && (
              <TableCell align="center">Last Name</TableCell>
            )}
            {formFilledData[0].email && (
              <TableCell align="center">Email</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {formFilledData.map((row, index) => (
            <TableRow key={i++}>
              <TableCell align="center" component="th" scope="row">
                {index + 1}
              </TableCell>
              {row.firstName && (
                <TableCell align="center">{row.firstName}</TableCell>
              )}
              {row.lastName && (
                <TableCell align="center">{row.lastName}</TableCell>
              )}
              {row.email && <TableCell align="center">{row.email}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

FormFilledTable.propTypes = {
  formFilledData: PropTypes.array
};

export default FormFilledTable;
