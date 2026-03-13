import Controls from './Controls';
import sampleUsers from './sampleUsers';
import UserList from './UserList';
import {useState, useEffect} from 'react';

function UserDirectoryPage() {
  // TODO: add users, sortBy, and viewMode state in this component.
  const [users, setUsers] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const [viewMode, setViewMode] = useState("grid");

  // TODO: fetch the initial users with useEffect.
  useEffect(() => {
      fetch('https://69a1e5762e82ee536fa284af.mockapi.io/users_api')
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  function handleDeleteClick(userId) {
    console.log('TODO: delete the user with id', userId);
      }
    


  function handleDeleteClick(userId) {
    console.log('TODO: delete the user with id', userId);
    fetch(`https://69a1e5762e82ee536fa284af.mockapi.io/users_api/${userId}`,{
    method: `DELETE`,
    })
    .then((response) => {
    if (response.ok) {
      setUsers(users.filter((user) => user.id !== userId));
    } 
    else {
      console.error('Failed to delete user with id', userId);
    }
    })
    .catch((error) => {
    console.error('Error deleting user with id', userId, error);
    });

    }


  function handleSortByGroupClick() {
    console.log('TODO: sort users by user_group');
    setSortBy('group');
    const sortedUsers = [...users].sort((a,b) => a.user_group - b.user_group);
    setUsers(sortedUsers);
  }

  function handleSortByIdClick() {
    console.log('TODO: sort users by id');
    setSortBy('id');
    const sortedUsers = [...users].sort((a,b) => a.id - b.id);
    setUsers(sortedUsers);
  }

  function handleViewToggleClick() {
    console.log('TODO: switch between grid and list layouts');
    if (viewMode === "grid") {
      setViewMode("list");
    } else {
      setViewMode("grid");
    }

  }


  return (
    <>
      <section className="panel">
        <h1>User Directory</h1>
      </section>

      <section className="panel">
        <h2>Controls</h2>
        <Controls 
          onDeleteClick={handleDeleteClick}
          onSortByGroupClick={handleSortByGroupClick}
          onSortByIdClick={handleSortByIdClick}
          onViewToggleClick={handleViewToggleClick}
        />
      </section>

      <section className="panel">
        <h2>All Users</h2>
        <UserList users={users} viewMode={viewMode} />
      </section>
    </>
  );
}

export default UserDirectoryPage;
