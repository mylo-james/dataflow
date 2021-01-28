import { useState } from 'react';

function EditForm() {
    const [name, setName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [liveLink, setLiveLink] = useState('');
    const [repoLink, setRepoLink] = useState('');
    
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
