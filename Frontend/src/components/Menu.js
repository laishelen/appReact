import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../components/Menu.module.css";

import Logo from '../assets/images/logo.png'
import Silhueta from '../assets/images/silhueta.png'

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const imgDropdown = (
  <img className={styles.Silhueta} src={Silhueta} alt="Silhueta"/>
)

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Menu() {  

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className={styles.brand} to="/">
          <img className={styles.Logo} src={Logo} alt="Logo" />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/">Início</Nav.Link>
          <Nav.Link href="/quemsomos">Quem somos</Nav.Link>
          <Nav.Link href="/loja">Loja</Nav.Link>
          <Nav.Link href="/contatos">Contatos</Nav.Link>
        </Nav>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Nav>
          <NavDropdown title={imgDropdown} id="collasible-nav-dropdown">
            <NavDropdown.Item href="/gestao"><ManageAccountsIcon />&nbsp;Gestão</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login"><PersonIcon />&nbsp;          
              Login
            </NavDropdown.Item>
            <NavDropdown.Item href="/logout"><LogoutIcon />&nbsp;
              Sair
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>   
      </Container>
    </Navbar>
  );
};

export default Menu;
