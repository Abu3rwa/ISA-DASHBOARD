import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

function MyAppBar() {
  return (
    <AppBar className="appbar">
      <Toolbar>
        <Typography variant="h4" noWrap component="div">
          ISA School
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
