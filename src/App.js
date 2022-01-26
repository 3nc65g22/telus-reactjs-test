import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "assets/index.scss";
import theme from "utils/theme";
import debounce from "debounce";
import Divider from "@material-ui/core/Divider";
import UserInput from "molecule/UserInput";
import UserOutput from "molecule/UserOutput";

const App = (props) => {
  const [username, setUsername] = React.useState("@Cererec");
  const [displayCount, setDisplayCount] = React.useState(0);

  const debouncedCb = React.useCallback(
    debounce((fn) => fn(), 100),
    []
  );

  const handleUsernameOnchange = (e) => {
    // Performance boost when displayCount is High
    // debouncedCb(() => {
    //   setUsername(e.target.value);
    // });
    setUsername(!!e.target.value ? e.target.value : "@Cererec");
  };

  const handledisplayCountOnchange = (e) => {
    setDisplayCount(parseInt(e.target.value));
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ padding: "15px", maxWidth: "500px", margin: "auto" }}>
        <UserInput
          username={username}
          setUsername={setUsername}
          displayCount={displayCount}
          setDisplayCount={setDisplayCount}
          handleUsernameOnchange={handleUsernameOnchange}
          handledisplayCountOnchange={handledisplayCountOnchange}
        />
        {parseInt(displayCount) >= 0 &&
          Array(displayCount)
            ?.fill()
            .map((_, index) => (
              <div key={index}>
                <UserOutput username={username} />
                {parseInt(displayCount) != index + 1 && <Divider />}
              </div>
            ))}
      </div>
    </MuiThemeProvider>
  );
};

export default App;
