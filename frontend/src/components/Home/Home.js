import { Route } from 'react-router-dom';
import UserTable from '../UserTable';

const Home = () => {
    /* Create a selector that..
    1. Assigns to a variable called instructors.
    2. Gets the instructors from store using useSelector
    3. Iterates over all of the instructor objects' values to 
       produce an array of instructors.                                  TODO */

    /* Create a useEffect that dispatches the ThunkActionCreator 
       "getInstructors" when the component mounts, be sure to
       import useDispatch and add it to your dependency array.           TODO */

    return (
        <div className='home'>
            <div className='buttons'>
                {/* Map over the instructors. For each instructor...
                    1. Create a NavLink that
                       a. Has a 'key' prop of the instructor's id
                       b. Has an 'id' prop of the instructor's id
                       c. Redirects the user to '/groups/${id}, ${id} 
                          being the instructor's id.
                       d. Display's the instructor's name               TODO */}
            </div>
            <Route path='/groups/:instructorId'>
                <UserTable />
            </Route>
        </div>
    );
};

export default Home;
