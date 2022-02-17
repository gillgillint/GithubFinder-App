import React, { useContext } from 'react';
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../Context/github/GithubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {users.map((user, index) => {
            return <UserItem key={user.id} user={user} />;
          })}
        </div>
      )}
    </>
  );
}

export default UserResults;
