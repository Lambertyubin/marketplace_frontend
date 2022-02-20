import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import auth from './../auth/auth-helper'
import { makeStyles } from '@material-ui/core/styles'
import {NavLink, useNavigate} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from './../cart/cart-helper'


const useStyles = makeStyles(theme => ({
    active: {
        color: '#ff4081',
    },
    inactive: {
        minHeight: '#ffffff'
    }
})) 

const Menu = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return(
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" color="inherit">
            MERN MarketPlace
        </Typography>

        <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>
                <IconButton aria-label="Home">
                    <HomeIcon/>
                </IconButton>
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>
            <Button color="inherit">Users</Button>
        </NavLink>

        {
            !auth.isAuthenticated() && 
            (<span>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <Button color="inherit" >Sign up</Button>
            </NavLink>
            <NavLink to="/signin" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <Button color="inherit">Sign In</Button>
            </NavLink>
            
            </span>)
        }
        <NavLink to="/cart">
            <Button color="inherit">
                Cart
                <Badge invisible={false} color="secondary"
                        badgeContent= {cart.itemTotal()}>
                    <CartIcon />
                </Badge>
            </Button>
       </NavLink>

        {
            auth.isAuthenticated() && (<span>
            {auth.isAuthenticated().user.seller && (<NavLink to="/seller/shops"><Button >My Shops</Button></NavLink>)}
            <NavLink to={"/user/" + auth.isAuthenticated().user._id} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <Button color="inherit">My Profile</Button>
            </NavLink>
            <Button color="inherit" onClick={() => {
                auth.clearJWT(() => navigate('/'))}}>
                    Sign out
            </Button>
            </span>)
        }
        </Toolbar>
    </AppBar>
 )
}

export default Menu
