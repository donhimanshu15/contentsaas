import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const ContentTable = (props) => {
  /* eslint no-underscore-dangle: 0 */
  const { content, deleteContent } = props;
  let i = 0;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S.No</TableCell>
              <TableCell align="center">Content Name</TableCell>
              <TableCell align="center">Created On</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((row, index) => (
              <TableRow
                key={i++}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{row.contentName}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">
                  <Link to={`/app/content/${row._id}`}>
                    <Button>View</Button>
                  </Link>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() => deleteContent(row._id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

ContentTable.propTypes = {
  content: PropTypes.array,
  deleteContent: PropTypes.func
};

export default ContentTable;
