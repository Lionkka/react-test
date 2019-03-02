import React from 'react';
import Drawer from '@material-ui/core/Drawer';
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
      <Drawer
        open={this.props.isOpen}
        onClose={this.props.toggleSidebar(false)}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.props.toggleSidebar(false)}>
            <ChevronLeft />
          </IconButton>
        </div>

        <Divider />

        {this.renderList()}
      </Drawer>
    );
  }
}

export default SideBar;