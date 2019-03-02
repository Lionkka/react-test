import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

class SideBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  renderList = () => {
    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.toggleDrawer(true)}>
          Sidebar
        </Button>

        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.toggleDrawer(false)}>
              <ChevronLeft />
            </IconButton>
          </div>

          <Divider />

          {this.renderList()}
        </Drawer>
      </div>
    );
  }
}

export default SideBar;