import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const ResultsPlaceholder = () => {
  return (
    <Box
      sx={{
        height: "100%",
        flex: 1,
        p: 2,
        backgroundColor: "#133040",
        borderBottomLeftRadius: { sm: 80 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        borderTopLeftRadius: 0,
        borderTopRightRadius: {
          sm: "20px",
        },
        borderBottomRightRadius: {
          sm: "20px",
        },
      }}
    >
      <Box
        component="img"
        src="/illustration-empty.svg"
        alt="Mortgage Illustration"
        sx={{
          width: {
            xs: 150,
            sm: 200,
          },
        }}
      />
      <Typography variant="h3" sx={{ fontSize: "20px", marginTop: "20px" }}>
        Result shown here
      </Typography>
      <Typography
        sx={{ color: "#8aa9bd", marginTop: "20px", fontSize: "15px" }}
      >
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </Typography>
    </Box>
  );
};

export default ResultsPlaceholder;
