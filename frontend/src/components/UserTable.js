import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersByInstructor } from '../store/userReducer';

function UserTable() {
    const dispatch = useDispatch();
    const { instructorId } = useParams();

    const instructorObj = useSelector(({ instructors }) => instructors);
    const usersObj = useSelector(({ users }) => users);

    const users = Object.values(usersObj);

    useEffect(() => {
        dispatch(getUsersByInstructor(instructorId));
    }, [dispatch, instructorId]);

    if (!instructorObj[instructorId]) return null;

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Project Name</th>
                    <th>Live Link</th>
                    <th>Repo Link</th>
                </tr>
                {users.map(({ name, id, projectName, liveLink, repoLink }) => (
                    <tr key={`userId-${id}`}>
                        <td>{name}</td>

                        <td>{projectName ? projectName : 'TBD'}</td>
                        <td>
                            {liveLink ? (
                                <a href={liveLink}>Live Link</a>
                            ) : (
                                'TBD'
                            )}
                        </td>
                        <td>
                            {repoLink ? (
                                <a href={repoLink}>Live Link</a>
                            ) : (
                                'TBD'
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UserTable;
