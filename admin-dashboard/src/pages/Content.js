import React, { useState, useEffect } from 'react';
import { Button, Snackbar, Alert } from '@material-ui/core';
import ContentDialog from 'src/components/content/ContentDialog';
import ContentTable from 'src/components/content/ContentTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  createContent,
  getContents,
  deleteContent
} from '../store/actions/contentAction';

const Content = () => {
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const userInfo = sessionStorage.getItem('userInfo')
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;
  const dispatch = useDispatch();

  // getting all contents from store
  const contents = useSelector((state) => state.contents);
  const { contentItems, error, success } = contents;

  // open and close dialog on click
  const toggleDialog = () => {
    setOpen(!open);
  };

  // changing content state on typing
  const onChangeText = (value) => {
    setContent(value);
  };

  // fetching all content from reducer
  useEffect(() => {
    if (userInfo !== null) {
      dispatch(getContents(userInfo.email));
    }
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setSnackOpen(true);
    }
  }, [error]);

  // creating content using reducer
  const create = () => {
    if (userInfo) {
      dispatch(createContent(content, userInfo.email));
      toggleDialog();
      setSnackOpen(true);
    }
  };

  // deleting content
  const remove = (id) => {
    if (userInfo) {
      dispatch(deleteContent(id));
      setSnackOpen(true);
    }
  };

  // closing snackbar
  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <div>
      <Button style={{ margin: 50 }} variant="contained" onClick={toggleDialog}>
        Create Content
      </Button>
      <ContentDialog
        isOpen={open}
        toggleDialog={toggleDialog}
        changeText={onChangeText}
        createContent={create}
      />
      {contentItems !== undefined ? (
        <ContentTable content={contentItems} deleteContent={remove} />
      ) : (
        <ContentTable content={[]} deleteContent={remove} />
      )}

      <Snackbar open={snackOpen} autoHideDuration={4000} onClose={handleClose}>
        {error === null ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            {success}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default Content;
