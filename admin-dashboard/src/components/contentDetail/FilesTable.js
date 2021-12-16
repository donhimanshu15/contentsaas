import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Link,
  Button
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { delFile } from 'src/store/actions/formFilesAction';
/* eslint no-underscore-dangle: 0 */

const FilesTable = ({ contentId }) => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  const { fileItems } = files;
  const itemArr = fileItems?.filter((x) => x.contentId === contentId);

  let i = 0;

  const removeFile = (id) => {
    dispatch(delFile(id));
  };
  return (
    <>
      {itemArr !== [] ? (
        <TableContainer sx={{ mt: 2 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">S.No</TableCell>
                <TableCell align="center">Content Id</TableCell>
                <TableCell align="center">Public URL</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemArr.map((row, index) => (
                <TableRow key={i++}>
                  <TableCell align="center" component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.contentId}</TableCell>
                  <TableCell align="center">
                    <Link
                      sx={{ textDecoration: 'none' }}
                      href={row.publicURL}
                      target="_blank"
                    >
                      <Button>View</Button>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="error"
                      onClick={() => removeFile(row._id)}
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

FilesTable.propTypes = {
  contentId: PropTypes.string
};

export default FilesTable;
