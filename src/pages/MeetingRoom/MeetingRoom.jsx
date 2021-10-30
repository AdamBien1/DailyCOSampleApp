import React from 'react'

const MeetingRoom = ({ match }) => {
    const id = match.params.id;

    return (
        <div>
            <h1>THIS IS MEETING ROOM id={id}</h1>
        </div>
    )
}

export default MeetingRoom
