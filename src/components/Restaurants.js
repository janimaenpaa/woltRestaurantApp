import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "typeface-roboto";

const useStyles = makeStyles({
  root: {
    maxWidth: 600
  }
});

function addComma(number) {
  let makeAString = number.toString();
  let firstPart = makeAString.slice(0, makeAString.length - 2);
  let secondPart = makeAString.slice(makeAString.length - 2);
  return `${firstPart},${secondPart}`;
}

const Restaurants = ({ restaurants }) => {
  const classes = useStyles();

  const rows = () =>
    restaurants.map(restaurant => (
      <Grid key={restaurant.name} item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={restaurant.name}
              height="160"
              image={restaurant.image}
              title={restaurant.name}
            />
            <CardContent>
              {restaurant.online ? (
                <Typography
                  variant="body1"
                  color="primary"
                  component="p"
                  style={{ color: "#79DC78" }}
                >
                  Online
                </Typography>
              ) : (
                <Typography variant="body1" color="secondary" component="p">
                  Offline
                </Typography>
              )}

              <Typography gutterBottom variant="h5" component="h2">
                {restaurant.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                paragraph
              >
                {restaurant.description}
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                align="right"
              >
                Kuljetus{" "}
                {`${addComma(restaurant.delivery_price)} ${
                  restaurant.currency
                }`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {rows()}
      </Grid>
    </div>
  );
};

export default Restaurants;
