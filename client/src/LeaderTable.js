import React from 'react'

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
    return (
        <div key={props.leaderboardData[0]._id}>
            <table>
                <thead>
                    <tr>
                        <th>Wallet</th>
                        <th>Score</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.leaderboardData.map((item) => (
                        <tr>
                            <td>{item.walletId}</td>
                            <td>{item.score}</td>
                            <td>{getDateString(item.createdAt)} - {getTimeString(item.createdAt)}</td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}

export default LeaderTable;