import React from 'react'
// import jamie from '../../public/riders/jamie.png'
// import jack from '/riders/jamie.png'
// import classpresident from '/riders/jamie.png'
// import frosti from '/riders/jamie.png'
// import dill from '/riders/jamie.png'
// import dire from '/riders/jamie.png'
// import moony from '/riders/jamie.png'
// import goit from '/riders/jamie.png'
// import uncani from '/riders/jamie.png'

const LeaderTable = (props) => {
    console.log(props);

    function getDateString(dateString) {
        const dateObj = new Date(dateString);
        return dateObj.toLocaleDateString(); 
    }

    function getTimeString(dateString) {
        const dateObj = new Date(dateString);
        return dateObj.toLocaleTimeString(); 
    }

    function getRider(avatarId) {
        const riderMap = {
            '1': 'jamie',
            '2': 'jack',
            '3': 'classpresident',
            '4': 'frosti',
            '5': 'dill',
            '6': 'dire',
            '7': 'moony',
            '8': 'goit',
            '9': 'uncani',
        }
        return riderMap[avatarId];
    }
    return (
        <div className="leaderboard" key={props.leaderboardData[0]._id}>
            <table className="leaderboard-table">
                <thead>
                    <tr className="leaderboard-table-row">
                        <th>Wallet</th>
                        <th>Score</th>
                        <th>Rider</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.leaderboardData.map((item) => (
                        <tr key={item._id} className="leaderboard-table-row">
                            <td>{item.walletId}</td>
                            <td>{item.score}</td>
                            {item.avatar ? <td><img className="leaderboard-table-rider bounce-1" src={`/riders/${getRider(item.avatar)}.png`} alt={getRider(item.avatar)}></img></td>
                             : <td><img className="leaderboard-table-rider bounce-1" src='/riders/jamie.png' alt="jamie"></img></td>}
                            <td>{getDateString(item.createdAt)} - {getTimeString(item.createdAt)}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}

export default LeaderTable;