import React, { useEffect, useState } from 'react';
import { getAllUser ,deleteUser} from '../src/service/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
function AllUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUser();
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  const Container = styled(Paper)`
    margin: 5% auto 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & > div {
      margin-top: 20px;
    }
  `;

  // Styling for button container
  const ButtonContainer = styled('div')`
    display: flex;
    gap: 10px; /* Adds space between buttons */
    justify-content: center;
  `;

  const deleteUserById = async (id) => {
    await deleteUser(id);
  }
  return (
    <div className="user-list">
      <h2>Users</h2>
      <Container component={Paper}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: 'black' }}>
                <TableCell align ="center" sx={{ color: 'white' }}>Name</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>Email</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>Phone</TableCell>
                <TableCell align="center" sx={{ color: 'white' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='center'>{user.name}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.phone}</TableCell>
                  <TableCell align="center">
                    <ButtonContainer>
                      <Button variant="contained" color="primary" component={Link} to={`/edit/${user._id}`}>
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          deleteUserById(user._id);
                        }}
                      >
                        Delete
                      </Button>
                    </ButtonContainer>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default AllUser;
