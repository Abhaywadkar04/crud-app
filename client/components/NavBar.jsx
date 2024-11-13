import { AppBar,  Toolbar,styled } from '@mui/material'
import { NavLink } from 'react-router-dom';
const Header=styled(AppBar)`
background-color:#111111;
`;

const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:#FFFFFF;
`


const navbar=() => {
    return (
        <Header >
            <Toolbar>
            <Tabs to='/'>code for interview</Tabs>
            <Tabs to='/all'>All users</Tabs>
            <Tabs to='/add'>Add user</Tabs>
            </Toolbar>
        </Header>
    )
}
export default navbar