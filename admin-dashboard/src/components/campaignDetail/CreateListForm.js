import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  FormGroup,
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { addList } from '../../store/actions/ListAction';

let emails = [];

const CustomCheckBox = (props) => {
  const { item } = props;
  const email = item.firebaseEmail;
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
      const index = emails.indexOf(email);
      if (index === -1) {
        emails.push(email);
      }
    } else {
      setChecked(false);
      const index = emails.indexOf(email);
      if (index !== -1) {
        emails.splice(index, 1);
      }
    }
  };

  console.log(emails);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={(e) => handleChange(e)} />
        }
        label={email}
      />
    </div>
  );
};

const CreateListForm = (props) => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [listName, setListName] = useState('');
  const { emailList, campaignId, handleDialogClose } = props;

  const submitForm = () => {
    dispatch(addList(listName, emails, campaignId));
    handleDialogClose();
    console.log(emails);
    emails = [];
  };

  return (
    <Box>
      {!submitted && (
        <>
          <FormGroup>
            {emailList.map((item) => (
              <CustomCheckBox item={item} />
            ))}
          </FormGroup>
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            onClick={() => setSubmitted(true)}
          >
            Submit
          </Button>
        </>
      )}
      {submitted && (
        <>
          <TextField
            sx={{ mt: 2 }}
            autoFocus
            margin="dense"
            variant="filled"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            label="List Name"
            fullWidth
          />
          <Button sx={{ mt: 2 }} variant="contained" onClick={submitForm}>
            Submit
          </Button>
        </>
      )}
    </Box>
  );
};

CreateListForm.propTypes = {
  emailList: PropTypes.array,
  campaignId: PropTypes.string,
  handleDialogClose: PropTypes.func
};

CustomCheckBox.propTypes = {
  item: PropTypes.object
};

export default CreateListForm;
