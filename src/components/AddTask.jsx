import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import "../App.css";
export default function AddTask({ noteDatas, setNoteDatas }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [title, setTitle] = React.useState("");
  const [note, setNote] = React.useState("");
  const addNoteDataHandler = () => {
    let newData = {
      id: Math.random(),
      title,
      note,
    };
    setNoteDatas([...noteDatas, newData]);
    setOpen(false);
  };

  return (
    <div>
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{ position: "absolute", right: "370px", bottom: "100px" }}
        sm={12}
        className="add-task"
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>Note</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a new note here..</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            rows={4}
            autoFocus
            margin="dense"
            id="name"
            label="Details"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNote(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addNoteDataHandler}>Add Note</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
