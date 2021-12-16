import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Stack,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Link
} from '@material-ui/core';
import axios from 'axios';

import { addFile, getFiles } from 'src/store/actions/formFilesAction';
import { getContentDetails } from 'src/store/actions/contentAction';
import SnackMessage from 'src/components/SnackMessage';
import FormFilledTable from 'src/components/contentDetail/FormFilledTable';
import ContentGeneralForm from '../components/contentDetail/ContentGeneralForm';
import ContentCustomForm from '../components/contentDetail/ContentCustomForm';
import ToggleUploadButton from '../components/contentDetail/ToggleUploadButton';
import FormDetailPaper from '../components/contentDetail/FormDetailPaper';
import FilesTable from '../components/contentDetail/FilesTable';
import { storage } from '../Firebase';

const ContentDetail = () => {
  /* eslint no-underscore-dangle: 0 */
  const { id } = useParams();

  const userInfo = sessionStorage.getItem('userInfo')
    ? JSON.parse(sessionStorage.getItem('userInfo'))
    : null;

  // different state
  const [type, setType] = useState('');
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [formPresent, setFormPresent] = useState(false);
  const [filePresent, setFilePresent] = useState(false);
  const [formData, setFormData] = useState({});
  const [url, setUrl] = useState(null);
  const [userId, setUserId] = useState(null);
  const [formFilledData, setFormFilledData] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  // getting details of content from storage
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const contentDetails = content?.contentDetail;

  const files = useSelector((state) => state.files);
  const { fileItems, success } = files;
  const itemArr = fileItems?.filter((x) => x.contentId === id);

  // getting current user detail and storing id
  useEffect(() => {
    const getUserDetail = async () => {
      if (userInfo !== null) {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const body = {
          firebaseEmail: userInfo.email
        };
        await axios
          .post('https://databackupserver.herokuapp.com/api/v1/getdetails', body, config)
          .then((res) => setUserId(res.data._id))
          .catch((err) => console.log(err));
      }
    };
    getUserDetail();
  }, [userInfo]);

  // checking if file is present or not
  useEffect(() => {
    if (itemArr.length === 0) {
      setFilePresent(false);
    } else {
      setFilePresent(true);
    }
  }, [itemArr]);

  // dispatching to get content details
  useEffect(() => {
    dispatch(getContentDetails(id));
  }, [dispatch]);

  // dispatching to get files
  useEffect(() => {
    dispatch(getFiles(id));
  }, [dispatch]);

  // dispatching to add file when url chages
  useEffect(() => {
    if (url !== null) {
      dispatch(addFile(id, url, mediaType));
      setUrl(null);
    }

    if (success) {
      setMessage(success);
      setSnackOpen(true);
    }
  }, [dispatch, url, success]);

  // getting content form
  useEffect(() => {
    const getForm = async () => {
      try {
        const { data } = await axios.get(`https://databackupserver.herokuapp.com/api/v1/main/content/form/${id}`);
        setFormData(data);
        if (data !== '') {
          setFormPresent(true);
        }
        if (data.field.length > 1) {
          const form = data.field.slice(1);
          setFormFilledData(form);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getForm();
  }, [formPresent]);

  // showing form when choose general
  useEffect(() => {
    if (type === 'general') {
      setShow(true);
    }
  }, [type]);

  // changing type
  const handleTypeSelect = (val) => {
    setType(val);
    setShow(true);
  };

  // handling form submit
  const handleSubmit = async (field) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = {
        contentName: contentDetails.contentName,
        contentId: id,
        type,
        field
      };
      const { data } = await axios.post(
        'https://databackupserver.herokuapp.com/api/v1/main/content/form',
        body,
        config
      );

      if (data) {
        setFormData(data);
        setSubmit(!submit);
        setFormPresent(true);
        setOpen(!open);
        setMessage('Form Submitted Successfully');
        setSnackOpen(true);
        setType('');
      }
    } catch (err) {
      console.log(err);
      setError(err);
      setSnackOpen(true);
    }
  };

  // closing snackbar
  const handleSnackClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
    setMessage(null);
    setError(null);
  };

  // changing state on closing dialog
  const handleDialogClose = () => {
    setType('');
    setOpen(false);
    setShow(false);
    setMessage('');
    setError('');
  };

  const handleFormDelete = async () => {
    try {
      const formId = formData._id;
      const { data } = await axios.delete(
        `https://databackupserver.herokuapp.com/api/v1/main/content/form/${formId}`
      );
      if (data) {
        setFormPresent(false);
        setFormData({});
        setMessage('Form deleted successfully');
        setSnackOpen(true);
      }
    } catch (err) {
      console.log(err);
      setError(err);
      setSnackOpen(true);
    }
  };

  // getting file and adding it to to firebase
  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      const storageRef = storage.ref(selected.name);
      setMediaType(selected.type);

      storageRef.put(selected).on(
        'state_changed',
        (snap) => {
          const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(percentage);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const uri = await storageRef.getDownloadURL();
          setUrl(uri);
        }
      );
    } else {
      console.log('Please again upload file');
    }
  };

  return (
    <>
      <div>
        <Stack
          style={{ margin: 50 }}
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="h1" component="h2">
            {contentDetails.contentName}
          </Typography>
          <Stack justifyContent="space-between" direction="row">
            {formPresent && formData !== '' ? (
              <Button
                disabled
                variant="contained"
                onClick={() => setOpen(true)}
              >
                Open Form
              </Button>
            ) : (
              <Button variant="contained" onClick={() => setOpen(true)}>
                Open Form
              </Button>
            )}
            <ToggleUploadButton
              filePresent={filePresent}
              formPresent={formPresent}
              changeHandler={changeHandler}
            />
            {filePresent && (
              <Link
                href={`http://localhost:3001/profile?${id}&${userId}`}
                target="_blank"
              >
                <Button sx={{ ml: 2 }} variant="contained">
                  Go To Profile
                </Button>
              </Link>
            )}
          </Stack>
        </Stack>
        {formPresent && (
          <FormDetailPaper
            formPresent={formPresent}
            handleDelete={handleFormDelete}
            formData={formData}
          />
        )}
        <FilesTable contentId={id} />
        {formFilledData !== null && (
          <FormFilledTable formFilledData={formFilledData} />
        )}
      </div>

      <Dialog fullWidth open={open}>
        <DialogTitle>Content Form</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose a form type</DialogContentText>
          <FormControl fullWidth sx={{ mt: 3 }}>
            <InputLabel id="select-form-type">Type of Form</InputLabel>
            <Select
              id="select-form-type"
              label="Type of Form"
              onChange={(e) => handleTypeSelect(e.target.value)}
            >
              <MenuItem key={1} value="general">
                General Information Form
              </MenuItem>
              <MenuItem key={2} value="custom">
                Custom Form
              </MenuItem>
            </Select>
          </FormControl>
          {show && type === 'general' ? (
            <ContentGeneralForm handleSubmit={handleSubmit} />
          ) : (
            <></>
          )}
          {show && type === 'custom' ? (
            <ContentCustomForm handleSubmit={handleSubmit} />
          ) : (
            <></>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose()}>Cancel</Button>
        </DialogActions>
      </Dialog>
      {message && (
        <SnackMessage
          variant="success"
          message={message}
          snackOpen={snackOpen}
          handleSnackClose={handleSnackClose}
        />
      )}
      {error && (
        <SnackMessage
          variant="error"
          message={error}
          snackOpen={snackOpen}
          handleSnackClose={handleSnackClose}
        />
      )}
    </>
  );
};

export default ContentDetail;
