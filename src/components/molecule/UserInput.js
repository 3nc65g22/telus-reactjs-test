import React from "react";
import TextField from "atom/TextField";
import PropTypes from "prop-types";

const UserInput = ({
  handleUsernameOnchange,
  handledisplayCountOnchange,
  displayCount,
}) => {
  return (
    <div>
      <TextField
        onChange={handleUsernameOnchange}
        name="username"
        label="Username"
        borderradius={22}
        backgroundColor={"white"}
        placeholder="Username"
      />
      <TextField
        onChange={handledisplayCountOnchange}
        type="number"
        name="discountCount"
        label="Display Count"
        borderradius={22}
        backgroundColor={"white"}
        value={displayCount}
        placeholder="Display Count"
      />
    </div>
  );
};

UserInput.propTypes = {
  handleUsernameOnchange: PropTypes.func,
  handledisplayCountOnchange: PropTypes.func,
  displayCount: PropTypes.number,
};

export default UserInput;
