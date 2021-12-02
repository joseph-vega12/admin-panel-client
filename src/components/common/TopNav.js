import React from "react";
import {
  Box,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  TextField,
  InputAdornment
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';

const NavBox = styled(Box)(() => ({
  display: "flex",
  height: "90px",
  justifyContent: "flex-end",
  alignItems: "center",
  textAlign: "center",
  width: "85%",
  float: "right",
  backgroundColor: "#FFFFFF",
}));

function TopNav() {
  return (
    <>
      <NavBox>
        <TextField
          sx={{ paddingRight: "70%" }}
          variant="outlined"
          size="small"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>MJ</Avatar>
          </IconButton>
        </Tooltip>
      </NavBox>
    </>
  );
}

export default TopNav;
