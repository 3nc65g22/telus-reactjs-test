import React from "react";

import FormTextField from "./TextField";

export default function index({ control, ...rest }) {
  switch (control) {
    case "textfield":
      return <FormTextField {...rest} />;
  }
}
