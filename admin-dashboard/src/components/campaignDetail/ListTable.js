import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Link
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { delList } from '../../store/actions/ListAction';
/* eslint no-underscore-dangle: 0 */

const ListTable = (props) => {
  const dispatch = useDispatch();
  let i = 0;
  const { listItems } = props;

  const removeList = (id) => {
    dispatch(delList(id));
  };

  return (
    <>
      {listItems !== [] ? (
        <TableContainer sx={{ mt: 2 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">S.No</TableCell>
                <TableCell align="center">List Name</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listItems.map((row, index) => (
                <TableRow key={i++}>
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.listName}</TableCell>
                  <TableCell align="center">
                    <Link sx={{ textDecoration: 'none' }}>
                      <Button>View</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="error"
                      onClick={() => removeList(row._id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </>
  );
};

ListTable.propTypes = {
  listItems: PropTypes.array
};

export default ListTable;
