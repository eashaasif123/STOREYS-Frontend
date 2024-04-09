import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';

export default function LeadsDetails({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      fullHeight
      maxWidth="md"
      PaperProps={{
        style: {
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          margin: 0,
          padding: '16px', // Adjust padding as needed
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <Grid container alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Contact Details</Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>
      
      <DialogContent>
      <Typography variant="h6" gutterBottom>
          Name: DARWISH ABDULRAHMAN H AL EMADI
        </Typography>
        <Grid container spacing={2} alignItems="center" className="mt-3 mb-5">
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PhoneIcon />}
              fullWidth
            >
              Phone
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EmailIcon />}
              fullWidth
            >
              Email
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Lead History
        </Typography>
        <Typography variant="body1" gutterBottom className="mt-5">
          1. 01-04-2024: Owner assigned the lead to General Manager Ali
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. 03-04-2024: General Manager Ali assigned this lead to Manager Irfan
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. 05-04-2024: Manager Irfan assigned this lead to Employee Haider
        </Typography>
        <Typography variant="body1" gutterBottom>
          4. 06-04-2024: Manager Irfan removed this lead from Employee Haider
        </Typography>
        <Typography variant="body1" gutterBottom>
          5. 09-04-2024: Manager Irfan assigned this lead to you
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
