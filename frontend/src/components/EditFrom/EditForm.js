import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../store/userReducer';
function EditForm() {
    const { userId } = useParams();
    const dispatch = useDispatch();
    // console.log(userId);
    const user = useSelector((state) => state.users[userId]);
    // console.log(user);
    const [name, setName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [liveLink, setLiveLink] = useState('');
    const [repoLink, setRepoLink] = useState('');

    useEffect(() => {
        dispatch(getUserById(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setProjectName(user.projectName || '');
            setLiveLink(user.liveLink || '');
            setRepoLink(user.repoLink || '');
        }
    }, [user]);

    return (
        <div>
            <h1>Edit User</h1>
            <form>
                <label>
                    Name
                    <input
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Project Name
                    <input
                        id='projectName'
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                </label>
                <label>
                    Live Link
                    <input
                        id='liveLink'
                        value={liveLink}
                        onChange={(e) => setLiveLink(e.target.value)}
                    />
                </label>
                <label>
                    Repo Link
                    <input
                        id='repoLink'
                        value={repoLink}
                        onChange={(e) => setRepoLink(e.target.value)}
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default EditForm;
