import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersByInstructor } from '../store/userReducer';

function UserTable() {
    const dispatch = useDispatch();
    const table = useRef();
    const instructorId = Number.parseInt(useParams().instructorId);
    const users = useSelector(({ users }) =>
        Object.values(users).filter(
            (user) => user.instructorId === instructorId
        )
    );

    useEffect(() => {
        dispatch(getUsersByInstructor(instructorId)).then(() =>
            table.current.classList.add('animation')
        );
    }, [dispatch, instructorId]);

    return (
        <div
            ref={table}
            key={`instructorTable-${instructorId}`}
            className='tableWrapper'
        >
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Project Name</th>
                        <th>Live Link</th>
                        <th>Repo Link</th>
                    </tr>
                    {users &&
                        users.map(
                            ({ name, id, projectName, liveLink, repoLink }) => (
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
                            )
                        )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
