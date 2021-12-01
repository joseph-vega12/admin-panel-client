import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./SidebarNav.css";

function SidebarNav() {
  const SelectedItemList = styled(ListItem)(() => ({
    backgroundColor: "#FFEBEC",
    borderRadius: "10px",
    ".MuiTypography-root": {
      color: "#FF3E40",
      borderRadius: "10px",
    },
  }));

  const ItemList = styled(ListItem)(() => ({
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#FFEBEC",
      borderRadius: "10px",
    },
  }));

  return (
    <nav>
      <Drawer
        sx={{
          ".MuiPaper-root": { width: "15%", borderRight: "0" },
        }}
        open={true}
        variant="permanent"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          <SelectedItemList button>
            <ListItemText primary={"Live Orders"} />
          </SelectedItemList>
          {["Order History", "Products", "Settings"].map((text, index) => (
            <ItemList button key={text}>
              <ListItemText primary={text} />
            </ItemList>
          ))}
        </List>
      </Drawer>
    </nav>
  );
}

export default SidebarNav;
