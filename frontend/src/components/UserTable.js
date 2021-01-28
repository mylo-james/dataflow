import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUsers } from '../store/userReducer';
function UserTable() {
    const instructorId = Number.parseInt(useParams().instructorId);
    const dispatch = useDispatch();

    const users = useSelector(({ users }) =>
        Object.values(users).filter(
            (user) => user.instructorId === instructorId
        )
    );

    /* Create a useEffect that dispatches the ThunkActionCreator 
       "getUsers". This should watch for when 
       instructorId changes. Be sure to import useDispatch and add 
       it to your dependency array.                                    TODO 4 */
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className='tableWrapper' key={instructorId}>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Project Name</th>
                        <th>Live Link</th>
                        <th>Repo Link</th>
                    </tr>
                    {/* If there are users, for each user...
                        1. Create a table row
                           a. with a key of the user's id
                        2. Create table data for the user's name.
                        3. If the user has a projectName,
                           display projectName, otherwise display
                           "TBD".
                        4. If the user has a liveLink,
                           display liveLink, otherwise display
                           "TBD".
                        5. If the user has a repoLink,
                           display repoLink, otherwise display
                           "TBD".                                     TODO 3 */}
                    {users &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <Link to={`/edit/${user.id}`}>{user.name}</Link>
                                </td>
                                <td>
                                    {user.projectName
                                        ? user.projectName
                                        : 'TBD'}
                                </td>
                                <td>{user.liveLink ? user.liveLink : 'TBD'}</td>
                                <td>{user.repoLink ? user.repoLink : 'TBD'}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
