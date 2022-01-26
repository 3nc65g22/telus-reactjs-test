import React from "react";
import { styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const StyledGrid = styled(Grid)(({ padding }) => ({
  padding: "6px 16px !important",
}));

export default ({ children, container, ...rest }) =>
  container ? (
    <Grid container {...rest}>
      {children}
    </Grid>
  ) : (
    <StyledGrid {...rest}>{children}</StyledGrid>
  );
