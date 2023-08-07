import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({});

const MyMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu")
        ?.children[2] as HTMLElement | null;
      if (!menu) return;

      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
        handleClose(e);
      }
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id="menubutton1"
          aria-owns={open ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{ zIndex: 1301 }}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          Menu
          <br />
          Items
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default MyMenu;
