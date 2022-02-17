import React, { useRef, useContext } from 'react';
import GithubContext from '../../Context/github/GithubContext';
import AlertContext from '../../Context/alert/AlertContext';
import { searchUsers } from '../../Context/github/GithubActions';

function UserSearch() {
  const searchRef = useRef();
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const searchText = searchRef.current.value;

    if (searchText.trim() === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(searchText);

      dispatch({ type: 'GET_USERS', payload: users });
    }
  };

  const clearHandler = () => {
    searchRef.current.value = '';
    dispatch({ type: 'CLEAR_USERS' });
  };
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:gird-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form className='form-control' onSubmit={submitHandler}>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search'
              ref={searchRef}
            />
            <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
              Go
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearHandler} className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
