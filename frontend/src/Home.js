/*********** TO DO *************/

const Home = () => {
    /*********** TO DO *************/

    const handleClick = (e) => {
        /*********** TO DO *************/
        console.log(e.target.id);
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
                    {/*********** TO DO *************/}
                </tbody>
            </table>
        </div>
    );
};

export default Home;