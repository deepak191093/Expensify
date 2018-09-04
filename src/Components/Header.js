import React from 'react';
import { Link } from 'react-router-dom';
// import '../Style/header.css';
const Header = () => (

    <header className="NavBar">

    <h1> Expensify App!!! </h1>
     <Link to = '/' > Home Page </Link> ||            
     <Link to = '/create' > Create Page </Link>||  
     <Link to = '/edit' > Edit Page </Link> ||                 
     <Link to = '/help' > Help Page </Link> ||         

    </header>

);
export default Header;