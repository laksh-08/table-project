import {
  Button,
  Grid,
  TextField,
  Typography,
  Pagination,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Selects from "react-select";
import { columns, rows } from "./Constant";
import { DataGrid } from "@mui/x-data-grid";
import { withStyles } from "@mui/styles";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SearchIcon from "@mui/icons-material/Search";
const styles = {
  downArrowIcon: {
    backgroundColor: "#F7F8F3 !important",
    color: "#C4C5C9 !important",

    height: "40px",
    width: "40px",
    borderRadius: "10px !important",
    marginTop: "20px !important",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0 0 0 / 60%)",
    borderRadius: "10px",
    alignItems: "center",
    padding: "20px",
    boxShadow: "10px 0px 20px #00000029",
  },
  productCategory: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0 0 0 / 60%)",
    boxShadow: "0px 0px 20px #00000029",
    borderRadius: "10px",
    alignItems: "center",
    padding: "20px",
  },
  summary: {
    padding: "10px 190px 0px 20px",
  },
  show: {
    padding: "10px 5px 0px 0px",
    fontSize: "16px",
  },
  column: {
    "& .MuiInputBase-root": {
      height: "50px",
      borderRadius: "10px",
      marginBottom: "10px",
    },
  },
  selectButton: {
    height: "40px",
    "& .MuiButtonBase-root": {
      borderRadius: "25px",
      margin: "0px 10px 0px 10px",
    },
  },
  pagination: {
    marginLeft: "200px",
  },
  catergoryInput: {
    "& .MuiInputBase-root": {
      height: "35px",
      borderRadius: "10px",
    },
    "& .Table-catergoryInput-8 .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "0px",
      },
    backgroundColor: "#F9FAFF",
    width: "600px",
  },
  dropDown: {
    "& .MuiInputBase-root": {
      height: "50px",
      borderRadius: "10px",
      marginBottom: "30px",
    },
  },

  select: {
    "& .css-1u9des2-indicatorSeparator": {
      alignSelf: "none",
    },
  },
  text: {
    padding: "0px 0px 0px 27px",
  },
  searchIcon: {
    position: "absolute",
    left: "50px",
    zIndex: 1200,
    marginTop: "5px",
  },
};

function Table(props) {
  const { classes } = props;
  return (
    <>
      <Grid container>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Typography variant="h5" fontWeight="bolder">
            Orders
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#3C4BE4", borderRadius: "10px" }}
          >
            Create New
          </Button>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          className={classes.searchContainer}
          sx={{
            margin: "10px 20px",
          }}
        >
          <Grid>
            <Typography>What are you looking for?</Typography>
            <TextField
              placeholder="Search for category,name,company,etc..."
              className={classes.catergoryInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="15px" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid>
            <Typography variant="h6" fontSize="14px" fontWeight="bolder">
              Category?
            </Typography>
            <Selects
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "280px",
                  borderRadius: "10px",
                  height: "35px",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  width: "280px",
                  height: "35px",
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  fontWeight: "bold",
                }),
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder="All "
            />
          </Grid>
          <Grid>
            <Typography varian="h6" fontSize="14px" fontWeight="bolder">
              Status
            </Typography>
            <Selects
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "280px",
                  height: "35px",
                  borderRadius: "10px",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  width: "280px",
                  height: "35px",
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  fontWeight: "bold",
                }),
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder="All "
            />
          </Grid>
          <div>
            <IconButton className={classes.downArrowIcon}>
              <KeyboardDoubleArrowDownIcon />
            </IconButton>
          </div>
          <div>
            <Button
              variant="contained"
              sx={{
                height: "36px",
                padding: "0px 40px",
                margin: "18px 0px 0px 0px",
                backgroundColor: "#3C4BE4",
                borderRadius: "10px",
              }}
            >
              Search
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        className={classes.productCategory}
        sx={{
          margin: "10px 20px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Grid item lg={3} md={3} sm={3} xs={12} sx={{ width: "400px" }}>
            <Typography variant="h6" fontWeight="bold">
              Product Summary
            </Typography>
          </Grid>
          <Grid item lg={8} md={3} sm={3} xs={12}></Grid>

          <Grid
            item
            lg={3}
            md={3}
            sm={3}
            xs={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="body2" margin={1.2}>
              Show
            </Typography>
            <Selects
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  width: "350px",

                  borderRadius: "10px",
                }),
                menu: (provided, state) => ({
                  ...provided,
                  width: "350px",
                }),
                placeholder: (provided, state) => ({
                  ...provided,
                  fontWeight: "bold",
                }),
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
              placeholder="All Column"
            />
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={12}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3C4BE4",
                borderRadius: "10px",
                height: "36px",
                padding: "0px 30px",
              }}
            >
              DISPTACH SELECTED
            </Button>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={12} marginTop={0.5}>
            <Pagination count={10} />
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooterPagination
            checkboxSelection
            hideFooter
          />
        </Grid>
      </Grid>
    </>
  );
}
export default withStyles(styles)(Table);
