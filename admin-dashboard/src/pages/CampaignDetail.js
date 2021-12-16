import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Box,
  Button,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  FormControl
  // Card,
  // FormGroup,
  // FormLabel,
  // OutlinedInput
} from '@material-ui/core';
import EmailEditor from 'react-email-editor';
import axios from 'axios';
import { getLists } from 'src/store/actions/ListAction';
import ListTable from 'src/components/campaignDetail/ListTable';
import SnackMessage from 'src/components/SnackMessage';
import CreateListForm from '../components/campaignDetail/CreateListForm';
import SendEmailListForm from '../components/campaignDetail/SendEmailListForm';
import { getCampaignDetails } from '../store/actions/campaignActions';

const CampaignDetail = () => {
  const { id } = useParams();

  // states
  const [open, setOpen] = useState(false);
  const [emailList, setEmailList] = useState([]);
  const [fromEmail, setFromEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [variant, setVariant] = useState(null);
  const [message, setMessage] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);

  // getting details of content from storage
  const dispatch = useDispatch();
  const campaign = useSelector((state) => state.campaign);
  const campaignDetails = campaign?.campaignDetails;

  const lists = useSelector((state) => state.lists);
  const listItems = lists?.listItems;

  useEffect(() => {
    dispatch(getCampaignDetails(id));
  }, [dispatch]);

  useEffect(() => {
    axios
      .get('https://databackupserver.herokuapp.com/api/v1/main/content/getEmails')
      .then((res) => setEmailList(res.data))
      .catch((error) => console.log(error));
  }, []);

  // dispatching to get lists
  useEffect(() => {
    dispatch(getLists(id));
  }, [dispatch]);

  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { html } = data;
      console.log('exportHtml', html);
    });
    setEmailBody();
    setSubject();
    setFromEmail();
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design } = data;
      console.log('design', design);
    });
  };
  const sendEmail = () => {
  };
  const onLoad = () => {
    // editor instance is created
  };

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleEmailDialogClose = () => {
    setEmailDialogOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  return (
    <div style={{ margin: 50 }}>
      <Stack
        style={{ margin: 50 }}
        justifyContent="space-between"
        direction="row"
      >
        <Typography variant="h1">{campaignDetails.campaignName}</Typography>
        <Stack justifyContent="space-between" direction="row">
          <Button variant="contained" onClick={sendEmail}>
            Save Design
          </Button>
          <Button sx={{ ml: 2 }} variant="contained" onClick={saveDesign}>
            Save Design
          </Button>
          <Button sx={{ ml: 2 }} variant="contained" onClick={exportHtml}>
            Export HTML
          </Button>
          <Button
            sx={{ ml: 2 }}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Create List
          </Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          mt: 10,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {/* <Card sx={{ width: 600, padding: '20px' }}>
          <FormGroup fullWidth sx={{ mt: 2 }}>
            <FormLabel id="name">From</FormLabel>
            <OutlinedInput
              required
              id="from"
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup fullWidth sx={{ mt: 2 }}>
            <FormLabel id="name">Subject</FormLabel>
            <OutlinedInput
              required
              id="sybject"
              type="email"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormGroup>
          <FormGroup fullWidth sx={{ mt: 2 }}>
            <FormLabel id="name">Message</FormLabel>
            <OutlinedInput
              multiline
              rows={10}
              required
              id="message"
              type="text"
              placeholder="Your Message"
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
            />
          </FormGroup>
          <Button
            onClick={() => setEmailDialogOpen(true)}
            sx={{ mt: 2 }}
            variant="contained"
          >
            Send Email
          </Button>
        </Card> */}
        <EmailEditor
          style={{ height: '600px' }}
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
        />
      </Box>
      <Box>
        <ListTable listItems={listItems} />
      </Box>
      <Dialog fullWidth open={open} onClose={handleDialogClose}>
        <DialogTitle>Create New List</DialogTitle>
        <DialogContent>
          <DialogContentText>Select on or more emails</DialogContentText>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <CreateListForm
              handleDialogClose={handleDialogClose}
              campaignId={id}
              emailList={emailList}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog fullWidth open={emailDialogOpen} onClose={handleEmailDialogClose}>
        <DialogTitle>Select lists to send email</DialogTitle>
        <DialogContent>
          <DialogContentText>Select on or more lists</DialogContentText>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <SendEmailListForm
              listItems={listItems}
              setDialogOpen={setEmailDialogOpen}
              fromEmail={fromEmail}
              subject={subject}
              emailBody={emailBody}
              setSnackVariant={setVariant}
              setSnackMessage={setMessage}
              Open={setSnackOpen}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEmailDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <SnackMessage
        variant={variant}
        message={message}
        snackOpen={snackOpen}
        handleSnackClose={handleClose}
      />
    </div>
  );
};

export default CampaignDetail;
