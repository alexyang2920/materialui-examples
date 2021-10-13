import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
    ExpandLess,
    ExpandMore,
} from '@mui/icons-material'

export default function Demo() {
    const theme = useTheme();
    const [topMenuOpen, setTopMenuOpen] = React.useState({'Calibration': false, 'UserProfile': false});
    const handTopMenuClick = (label) => {
        setTopMenuOpen(prev=> {
            return {...prev, [label]: !prev[label]};
        });
    };

    return (
        <List
            component="nav"
            style={{
                width: "100%",
                maxWidth: 240,
                backgroundColor: theme.palette.background.paper
            }}
        >
            <ListItem button onClick={() => handTopMenuClick('Calibration')}>
                <ListItemText primary="Calbration" />
                {topMenuOpen['Calibration'] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={topMenuOpen['Calibration']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button style={{ paddingLeft: theme.spacing(4) }} >
                        <ListItemText primary="AgencyBonds" />
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button style={{ paddingLeft: theme.spacing(4) }}>
                        <ListItemText primary="SupranationalBonds" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={() => handTopMenuClick('UserProfile')}>
                <ListItemText primary="User Profile" />
                {topMenuOpen['UserProfile'] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={topMenuOpen['UserProfile']} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button style={{ paddingLeft: theme.spacing(4) }} >
                        <ListItemText primary="profile" />
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    <ListItem button style={{ paddingLeft: theme.spacing(4) }}>
                        <ListItemText primary="logout" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
