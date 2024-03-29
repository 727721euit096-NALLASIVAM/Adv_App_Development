import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Register() {
  const [countries, setCountries] = useState([]);
  const [defaultCountry, setDefaultCountry] = useState("");
  console.log(defaultCountry, countries);
  // data fetching to get country list
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/raselmahmud22/fakeData/main/countries.json",
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  // for default country setup
  useEffect(() => {
    if (countries?.data?.[18]) {
      setDefaultCountry(countries?.data?.[18].country);
    }
  }, [countries]);

  // form handler
  const handleSubmit = (event) => {};

  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
              required
              fullWidth
              id="Date-of-Birth"
              label="Date-of-Birth"
              name="Date-Of-Birth"
              InputLabelProps={{
                shrink: true,
              }}
            />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Re-enter Password"
                  type="password"
                  id="confirm-password"
                  autoComplete="password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>

            

            <Grid container spacing={2} marginY={3}>
              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  fullWidth
                  id="Phone number"
                  label="Phone Number"
                  name="phone number"
                  autoComplete="phone number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
               
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
              required
              fullWidth
              id="Country"
              label="Country"
              name="Country"
              InputLabelProps={{
                shrink: true,
              }}
            />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              <Link to="/">Sign Up</Link>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <center>
                <Link to="/" >
                  Already have an account? Sign in
                </Link>
                </center>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}