/********************************************************************************
 * Header component
 *
 * Header component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import MissionIcon from '@material-ui/icons/Notifications';
import CatsIcon from '@material-ui/icons/Pets';
import DogsIcon from '@material-ui/icons/Pets';
import AdoptionsIcon from '@material-ui/icons/Hotel';
import FosterIcon from '@material-ui/icons/InsertEmoticon';
import VolunteerIcon from '@material-ui/icons/Wc';
import SponsorsIcon from '@material-ui/icons/MonetizationOn';
import RescuesIcon from '@material-ui/icons/Healing';
import ResourcesIcon from '@material-ui/icons/Bookmarks';
import SuccessStoriesIcon from '@material-ui/icons/ImportContacts';
import DonateIcon from '@material-ui/icons/LocalAtm';
import './Header.scss';

function Header() {
    const [state, setState] = React.useState({
        showNav: false
    });
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const toggleNav = (event) => {
        const showNav = ! state.showNav;
        setState({showNav});
    };
    
  return (
      <div className="Header" id="header">
        <span id="menu-icon"><i className="material-icons" onClick={toggleNav}>menu</i></span>
        <a href="/"><div id="logo"/></a>
        <SwipeableDrawer anchor="right" open={state.showNav} onOpen={toggleNav} onClose={toggleNav} disableBackdropTransition={!iOS} disableDiscovery={iOS}>
          <List>
            <ListItem>
              <ListItemIcon><Link to="/" onClick={toggleNav}><HomeIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/" onClick={toggleNav}>Home</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/mission" onClick={toggleNav}><MissionIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/mission" onClick={toggleNav}>Mission</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/cats" onClick={toggleNav}><CatsIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/cats" onClick={toggleNav}>Cats</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/dogs" onClick={toggleNav}><DogsIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/dogs" onClick={toggleNav}>Dogs</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/adoptions" onClick={toggleNav}><AdoptionsIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/adoptions" onClick={toggleNav}>Adoptions</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/foster" onClick={toggleNav}><FosterIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/foster" onClick={toggleNav}>Foster</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/volunteer" onClick={toggleNav}><VolunteerIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/volunteer" onClick={toggleNav}>Volunteer</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/sponsors" onClick={toggleNav}><SponsorsIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/sponsors" onClick={toggleNav}>Sponsors</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/rescues" onClick={toggleNav}><RescuesIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/rescues" onClick={toggleNav}>Rescues</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/resources" onClick={toggleNav}><ResourcesIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/resources" onClick={toggleNav}>Resources</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/success_stories" onClick={toggleNav}><SuccessStoriesIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/success_stories" onClick={toggleNav}>Success Stories</Link></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon><Link to="/donate" onClick={toggleNav}><DonateIcon/></Link></ListItemIcon>
              <ListItemText><Link to="/donate" onClick={toggleNav}>Donate</Link></ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
  );
}

export default Header;
