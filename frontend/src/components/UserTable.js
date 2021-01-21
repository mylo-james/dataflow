function UserTable() {
    /* Assign the instructor's id, taken from the path using
       useParams, to a variable called instructorId. 
       Make sure to parse this parameter into an integer.
       Add this as a 'key' to the div with the 
       className='tableWrapper'                                      TODO 2.5 */

    /* Create a selector that..
    1. Assigns to a variable called users.
    2. Gets the users from store using useSelector
    3. Iterates over all of the user objects' values to 
       produce an array of users.
    4. Filters those users to show only users that have
       an instructorId equal to what was take from the path.           TODO 2 */

    /* Create a useEffect that dispatches the ThunkActionCreator 
       "getUsersByInstructor". This should watch for when 
       instructorId changes. Be sure to import useDispatch and add 
       it to your dependency array.                                    TODO 4 */

    return (
        <div className='tableWrapper'>
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
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
