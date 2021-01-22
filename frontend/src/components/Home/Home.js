import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import UserTable from '../UserTable';
import { getInstructors } from '../../store/instructorReducer';

const Home = () => {
    const dispatch = useDispatch();
    const instructors = useSelector((state) =>
        Object.values(state.instructors)
    );

    /* Create a useEffect that dispatches the ThunkActionCreator 
       "getInstructors" when the component mounts, be sure to
       import useDispatch and add it to your dependency array.         TODO 4 */

    useEffect(() => {
        dispatch(getInstructors());
    }, [dispatch]);

    return (
        <div className='home'>
            <div className='buttons'>
                {instructors.map((instructor) => (
                    <NavLink
                        key={instructor.id}
                        id={instructor.id}
                        to={`/groups/${instructor.id}`}
                    >
                        {instructor.name}
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
