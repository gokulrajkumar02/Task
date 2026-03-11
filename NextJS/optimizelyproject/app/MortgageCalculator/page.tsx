import {
  Stack,
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import ResultsPlaceholder from "@/Component/ResultsPlaceholder";
const page = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3f4fc",
      }}
    >
      <Box
        sx={{
          maxWidth: "900px",
          maxHeight: {
            xs: "100%",
            sm: "70%",
          },
          borderRadius: 5,
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            height: "100%",
            margin: "0%",
            color: "White",
            backgroundColor: "white",
            borderRadius: {
              sm: 5,
              xs: 0,
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: 5,
              color: "black",
              backgroundColor: "white",
              borderRadius: 5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                color: "black",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                alignItems: {
                  sm: "center",
                },
                height: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                }}
              >
                Mortgage Calculator
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#8aa9bd",
                  textDecoration: "underline",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                Clear All
              </Typography>
            </Box>

            <Stack
              spacing={1}
              sx={{
                marginTop: {
                  sm: "20px",
                  xs: "60px",
                },
              }}
            >
              <Typography sx={{ fontSize: "15px", color: "#949b9e" }}>
                Mortgage Amount
              </Typography>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 45,
                    padding: 0,
                    "&.Mui-focused fieldset": {
                      borderColor: "#848d93",
                      borderWidth: "0.5px",
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ m: 0, mr: 2 }}>
                      <Box
                        sx={{
                          backgroundColor: "#DCE8EE",
                          height: "45px",
                          display: "flex",
                          alignItems: "center",
                          px: 2,
                          m: 0,
                          fontWeight: "bold",
                        }}
                      >
                        £
                      </Box>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                width: "100%",
                gap: {
                  xs: 0,
                  sm: "15px",
                },
              }}
            >
              <Stack spacing={1} sx={{ marginTop: "35px" }}>
                <Typography sx={{ fontSize: "15px", color: "#949b9e" }}>
                  Mortgage Term
                </Typography>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 45,
                      padding: 0,
                      "&.Mui-focused fieldset": {
                        borderColor: "#848d93",
                        borderWidth: "0.5px",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ m: 0 }}>
                        <Box
                          sx={{
                            backgroundColor: "#DCE8EE",
                            height: "45px",
                            display: "flex",
                            alignItems: "center",
                            px: 2,
                            m: 0,
                            fontWeight: "bold",
                          }}
                        >
                          years
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack spacing={1} sx={{ marginTop: "35px" }}>
                <Typography sx={{ fontSize: "15px", color: "#949b9e" }}>
                  Interest Rate
                </Typography>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: 45,
                      padding: 0,
                      "&.Mui-focused fieldset": {
                        borderColor: "#848d93",
                        borderWidth: "0.5px",
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ m: 0 }}>
                        <Box
                          sx={{
                            backgroundColor: "#DCE8EE",
                            height: "45px",
                            display: "flex",
                            alignItems: "center",
                            px: 2,
                            m: 0,
                            fontWeight: "bold",
                          }}
                        >
                          %
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Box>

            <FormControl sx={{ marginTop: "25px", width: "100%", gap: "10px" }}>
              <FormLabel
                sx={{
                  width:"100%",
                  color: "#77868d",
                  "&.Mui-focused": {
                    color: "#77868d",
                  },
                }}
              >
                Mortgage type
              </FormLabel>
              <RadioGroup sx={{ width: "100%", gap: "5px" }}>
                <FormControlLabel
                  value={"Repayment"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#fdd835",
                        },
                      }}
                    />
                  }
                  label="Repayment"
                  sx={{
                    mx: "0px",
                    width: "100%",
                    border: "1px solid gray",
                    borderRadius: "10px",

                    "&:has(.Mui-checked)": {
                      backgroundColor: "#fff9c4",
                      borderColor: "#d9db31",
                    },
                  }}
                />
                <FormControlLabel
                  value={"Interest"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#fdd835",
                        },
                      }}
                    />
                  }
                  label="Interest Only"
                  sx={{
                    width: "100%",
                    border: "1px solid gray",
                    borderRadius: "10px",
                    mx: 0,
                    "&:has(.Mui-checked)": {
                      backgroundColor: "#fff9c4",
                      borderColor: "#d9db31",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>

            <Button
              startIcon={<CalculateIcon />}
              sx={{
                width: {
                  sm: "70%",
                  xs: "100%",
                },
                fontSize: "18px",
                marginTop: "20px",
                paddingY: 1.5,
                textAlign: "center",
                color: "black",
                borderRadius: "60px",
                backgroundColor: "#d9db31",
                textTransform: "none",
              }}
            >
              Calculate Payments
            </Button>
          </Box>
          <ResultsPlaceholder />
        </Box>
      </Box>
    </Box>
  );
};

export default page;
