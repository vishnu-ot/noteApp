import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CustomCard({ id, title, note, setNoteDatas, noteDatas }) {
  const deleteNoteHandler = () => {
    let newData = noteDatas.filter((item) => item.id != id);
    setNoteDatas(newData);
  };
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {note}
        </Typography>
      </CardContent>
      <CardActions>
   
          {/* <Button size="small" color="success">
            Viwe/Update
          </Button> */}
        
        <Button size="small" color="error" onClick={deleteNoteHandler}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
