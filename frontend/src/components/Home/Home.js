import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useHistory } from 'react-router-dom';
import { getInstructors } from '../../store/instructorReducer';
import UserTable from '../UserTable';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const instructorObj = useSelector(({ instructors }) => instructors);
    const instructors = Object.values(instructorObj);

    useEffect(() => {
        dispatch(getInstructors());
        history.push('/instructors/1');
    }, [dispatch, history]);

    return (
        <div className='home'>
            <h1>First Solo Project</h1>
            <h3>Let's GO!!</h3>
            <div className='buttons'>
                {instructors.map(({ id, name }) => (
                    <NavLink
                        key={`instructorId-${id}-${name}`}
                        id={id}
                        to={`/instructors/${id}`}
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
            <Route path='/instructors/:instructorId'>
                <UserTable />
            </Route>
        </div>
    );
};

export default Home;
