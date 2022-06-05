import {
  Card,
  CardHeader,
  Container,
  Typography,
  makeStyles,
  CardContent,
  FormControl,
  OutlinedInput,
  CardActions,
  Button,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
const useStyles = makeStyles((theme) => {
  return {
    searchFrame: {
      // display: "flex",
      maxWidth: 500,
      justifyContent: "center",
      background: "#3d26d9",
      color: "#fff",
      borderRadius: 15,
    },
    resultFrame: {
      // display: "flex",
      maxWidth: 750,
      padding: 30,
      background:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/images/background.jpg')",
      backgroundSize: "100% 100%",
      color: "#fff",
      textAlign: "start",
      borderRadius: 20,
    },
  };
});
const WeatherApp = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const Cors = "https://api.allorigins.win/get?url=";
  const Url = `https://www.metaweather.com/api/location/search/?query=${city.toLowerCase()}`;
  const idUrl = "https://www.metaweather.com/api/location";
  const mainUrl = `${Cors}${Url}`;
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const weatherApi = async () => {
    setLoading(true);
    const data = await axios(mainUrl).then((resp) => {
      let weather = JSON.parse(resp.data.contents);
      if (!weather || weather.length === 0) {
        setError("Result Not Found");
        setLoading(false);
        setAllData([]);
      }
      return weather;
    });
    if (data.length != 0) {
      const response = await axios(`${Cors}${idUrl}/${data[0].woeid}`).then(
        ({ data }) => {
          setLoading(false);
          return JSON.parse(data.contents);
        }
      );
      setAllData(response);
    }
  };

  const searchHandler = () => {
    weatherApi();
  };
  const degtocel = (cel) => {
    let degreeCel = cel * 1.8 + 32;
    return Math.trunc(degreeCel);
  };
  const searchCity = (event) => {
    setCity(event.target.value);
    setError("");
  };
  return (
    <div>
      <Container>
        <div align="center" justify="center">
          <Card className={classes.searchFrame}>
            <CardHeader
              title={
                <Typography component="span" variant="h4">
                  Weather App
                </Typography>
              }
            />
            <CardContent>
              <FormControl fullWidth onChange={searchCity}>
                <OutlinedInput
                  style={{ background: "#fff" }}
                  placeholder="Enter City"
                />
                <FormHelperText>
                  <Typography component="span" style={{ color: "#ff0000" }}>
                    {error}
                  </Typography>
                </FormHelperText>
              </FormControl>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button style={{ color: "#fff" }} onClick={searchHandler}>
                <Typography component="span" variant="button">
                  Search
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </div>
      </Container>
      <br />
      <br />
      {loading ? (
        <div align="center">
          <CircularProgress />
        </div>
      ) : (
        <div>
          {allData.length != 0 ? (
            <Container>
              <div align="center">
                <Card className={classes.resultFrame}>
                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <Typography component="h1" variant="h4">
                        {allData.title ? allData.title : null}
                      </Typography>
                      <Typography component="h1">
                        {allData.time
                          ? moment(
                              allData.consolidated_weather[0].applicable_date
                            )
                              .add(42, "minutes")
                              .format("dddd, MMMM Do YYYY", "LMT")
                          : null}
                      </Typography>
                      <br />
                      <img
                        src={`https://www.metaweather.com/static/img/weather/png/64/${allData.consolidated_weather[0].weather_state_abbr}.png`}
                        width="100"
                        height="100"
                      />
                      <Typography component="h1" variant="h5">
                        {allData.consolidated_weather[0].weather_state_name}
                      </Typography>
                    </Grid>
                    <Grid item md={6} align="end">
                      <Typography component="h1" variant="h1">
                        {degtocel(allData.consolidated_weather[0].the_temp) +
                          "°"}
                      </Typography>
                      <Typography
                        component="h1"
                        variant="h4"
                        style={{ marginRight: 20 }}
                      >
                        <span>
                          {degtocel(allData.consolidated_weather[0].max_temp) +
                            "°"}
                        </span>
                        /
                        <span style={{ color: "#0b7ef4" }}>
                          {degtocel(allData.consolidated_weather[0].min_temp) +
                            "°"}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container spacing={2} align="center">
                    {allData.consolidated_weather.map((item) => (
                      <Grid item sm={3} md={3} lg={2} key={item.id}>
                        <Typography>
                          {moment(item.applicable_date)
                            .format("dddd")
                            .slice(0, 3)}
                        </Typography>
                        <img
                          src={`https://www.metaweather.com/static/img/weather/ico/${item.weather_state_abbr}.ico`}
                          width="50"
                          height="50"
                        />
                        <Typography component="h1">
                          {degtocel(item.the_temp) + "°"}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </div>
            </Container>
          ) : null}
        </div>
      )}
    </div>
  );
};
export default WeatherApp;
