import { useSelector, useDispatch } from 'react-redux';
import { getUsersByHouse } from '../../store/userReducer';

const Home = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(getUsersByHouse(e.target.id));
    };

    return (
        <div className='home'>
            <h1>Welcome to Hogwarts</h1>
            <h3>Let's get sorted!</h3>
            <div className='buttons'>
                <button id='1' onClick={handleClick}>
                    Gryffindor
                </button>
                <button id='2' onClick={handleClick}>
                    Hufflepuff
                </button>
                <button id='3' onClick={handleClick}>
                    Ravenclaw
                </button>
                <button id='4' onClick={handleClick}>
                    Slytherin
                </button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>House</th>
                        <th>Status</th>
                    </tr>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.House.name}</td>
                            <td>{user.teacher ? 'Teacher' : 'Student'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
