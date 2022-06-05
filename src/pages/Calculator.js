import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  makeStyles,
  ButtonBase,
  TextField,
  InputBase,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => {
  return {
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    button: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(2),
      backgroundColor: "#555",
      color: "#fff",
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        backgroundColor: "#bbb",
      },
      fontSize: 25,
    },
    inputBase: {
      border: "1px solid #555",
      width: "100%",
      height: "20%",
      padding: theme.spacing(3),
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "right",
      "& input": {
        textAlign: "right",
      },
    },
    effect: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(2),
      backgroundColor: "#117aee",
      color: "#fff",
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        backgroundColor: "#117aee",
      },
      fontSize: 25,
    },
  };
});
const Calculator = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(value.concat(e.target.value));
  };
  const clear = () => {
    setValue("");
  };
  const backspace = () => {
    setValue(value.slice(0, -1));
  };
  const calculate = () => {
    setValue(eval(value).toString());
  };
  useEffect(() => {
    setValue("");
  }, []);
  return (
    <div justify="center" align="center">
      <Container>
        <Card style={{ width: 500, backgroundColor: "#000000" }}>
          <InputBase
            className={classes.inputBase}
            onChange={handleChange}
            value={value}
          />
          <CardContent>
            <Grid container spacing={0}>
              <Grid item md={6}>
                <Box className={classes.box}>
                  <ButtonBase className={classes.effect} onClick={clear}>
                    Clear
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase className={classes.effect} onClick={backspace}>
                    <span>C</span>
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.effect}
                    value="/"
                    onClick={handleChange}
                  >
                    <span>&divide;</span>
                  </ButtonBase>
                </Box>
              </Grid>

              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="7"
                    onClick={handleChange}
                  >
                    7
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="8"
                    onClick={handleChange}
                  >
                    8
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="9"
                    onClick={handleChange}
                  >
                    9
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.effect}
                    value="+"
                    onClick={handleChange}
                  >
                    <span>+</span>
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="4"
                    onClick={handleChange}
                  >
                    4
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="5"
                    onClick={handleChange}
                  >
                    5
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="6"
                    onClick={handleChange}
                  >
                    6
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.effect}
                    value="-"
                    onClick={handleChange}
                  >
                    <span>&ndash;</span>
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="1"
                    onClick={handleChange}
                  >
                    1
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="2"
                    onClick={handleChange}
                  >
                    2
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="3"
                    onClick={handleChange}
                  >
                    3
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.effect}
                    value="*"
                    onClick={handleChange}
                  >
                    <span>&times;</span>
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.button}
                    value="0"
                    onClick={handleChange}
                  >
                    0
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className={classes.box} value="." onClick={handleChange}>
                  <ButtonBase className={classes.button}>
                    <span>.</span>
                  </ButtonBase>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box className={classes.box}>
                  <ButtonBase
                    className={classes.effect}
                    value="="
                    onClick={calculate}
                  >
                    <span>=</span>
                  </ButtonBase>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Calculator;
