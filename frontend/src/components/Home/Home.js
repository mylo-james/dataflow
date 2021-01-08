import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import { getInstructors } from '../../store/instructorReducer';
import UserTable from '../UserTable';

const Home = () => {
    const dispatch = useDispatch();

    const { instructors } = useSelector(({ instructors }) => ({
        instructors: Object.values(instructors),
    }));

    useEffect(() => {
        dispatch(getInstructors());
    }, [dispatch]);

    return (
        <div className='home'>
            <div className='buttons'>
                {instructors.map(({ id, name }) => (
                    <NavLink
                        key={`instructorId-${id}-${name}`}
                        id={id}
                        to={`/groups/${id}`}
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
            <Route path='/groups/:instructorId'>
                <UserTable />
            </Route>
        </div>
    );
};

export default Home;
