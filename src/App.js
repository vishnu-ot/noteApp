import { Card, Container, Grid, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { useState } from "react";
import AddTask from "./components/AddTask";
import CustomCard from "./components/CustomCard";
import Header from "./components/Header";


function App() {
  const [noteDatas, setNoteDatas] = useState([]);

  return (
    <div className="App">
      <Header />

      <Container>
        <Grid container>
          {noteDatas.length === 0 ? (
            <div style={{ width: "100%", paddingTop: 200 }}>
              <Typography
                variant="h2"
                color="textSecondary"
                component="p"
                style={{ textAlign: "center" }}
              >
                Please add your notes here...
              </Typography>
            </div>
          ) : (
            noteDatas.map((item) => {
              return (
                <Grid item md={4} sm={6} xs={12}>
                  <CustomCard
                    {...item}
                    setNoteDatas={setNoteDatas}
                    noteDatas={noteDatas}
                  />
                </Grid>
              );
            })
          )}
        </Grid>

        <AddTask noteDatas={noteDatas} setNoteDatas={setNoteDatas} />
        
          
        
      </Container>
    </div>
  );
}

export default App;
