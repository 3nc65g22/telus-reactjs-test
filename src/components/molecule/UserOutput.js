import React from "react";
import PropTypes from "prop-types";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

const UserOutput = ({ username }) => {
  const paragraphRef = React.useRef(
    <LoremIpsum
      p={2}
      random
      startWithLoremIpsum={false}
      avgSentencesPerParagraph={5}
    />
  );
  const avatarRef = React.useRef(<Avatar />);

  return (
    <>
      <h2 style={{ textTransform: "capitalize" }}>{username}</h2>
      <div className="avatarWrapper" style={{ textAlign: "center" }}>
        {avatarRef.current}
      </div>
      <div>{paragraphRef.current}</div>
    </>
  );
};

UserOutput.propTypes = {
  username: PropTypes.string,
};

export default UserOutput;
