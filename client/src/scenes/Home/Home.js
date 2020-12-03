const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to Hogwarts</h1>
            <h3>Let's get sorted!</h3>
            <div className='buttons'>
                <button id='1'>Gryffindor</button>
                <button id='2'>Hufflepuff</button>
                <button id='3'>Ravenclaw</button>
                <button id='4'>Slytherin</button>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>House</th>
                        <th>Status</th>
                    </tr>
                    {/* 
                        
                        TO DO
                        Map over users here 

                    */}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
