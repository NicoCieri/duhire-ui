import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import GroupWorkIcon from 'material-ui-icons/GroupWork';
import HomeIcon from 'material-ui-icons/Home';
import AirplanemodeActiveIcon from 'material-ui-icons/AirplanemodeActive';
import ChatBubbleOutlineIcon from 'material-ui-icons/ChatBubbleOutline';
import BuildIcon from 'material-ui-icons/Build';
import AssignmentIcon from 'material-ui-icons/Assignment';
import AttachMoneyIcon from 'material-ui-icons/AttachMoney';
import NoteAddIcon from 'material-ui-icons/NoteAdd';
import PhotoSizeSelectSmallIcon from 'material-ui-icons/PhotoSizeSelectSmall';
import Divider from 'material-ui/Divider';

import { Link } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
    </Link>
    <Link to="/search-requests">
      <ListItem button>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="Solicitar búsqueda" />
      </ListItem>
    </Link>
    <Divider />
    <Link to="/admin/search-requests">
      <ListItem button>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="Solicitudes de búsqueda" />
      </ListItem>
    </Link>
    <Link to="/admin/clients">
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItem>
    </Link>
    <Link to="/admin/tech-skills">
      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Tech Skills" />
      </ListItem>
    </Link>
    <Link to="/admin/soft-skills">
      <ListItem button>
        <ListItemIcon>
          <ChatBubbleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Soft Skills" />
      </ListItem>
    </Link>
    <Link to="/admin/areas">
      <ListItem button>
        <ListItemIcon>
          <GroupWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Areas" />
      </ListItem>
    </Link>
    <Link to="/admin/sectors">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Sectores" />
      </ListItem>
    </Link>
    <Link to="/admin/countries">
      <ListItem button>
        <ListItemIcon>
          <AirplanemodeActiveIcon />
        </ListItemIcon>
        <ListItemText primary="Paises" />
      </ListItem>
    </Link>
    <Link to="/admin/company-sizes">
      <ListItem button>
        <ListItemIcon>
          <PhotoSizeSelectSmallIcon />
        </ListItemIcon>
        <ListItemText primary="Tamaños de empresas" />
      </ListItem>
    </Link>
  </div>
);

export const otherMailFolderListItems = (
  <div />
);
