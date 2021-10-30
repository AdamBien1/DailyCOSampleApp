import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import { Center, Container, StyledForm, StyledInput, Submit, SubText } from '../../helpers/UtilStyledComponents.style'
import FlexColumnLayout from '../../templates/FlexColumnLayout/FlexColumnLayout'
import Footer from "../../components/Footer/Footer"
import { Buttons } from './JoingMeeting.style'
import DailyContext from '../../context/DailyCO/dailyContext'
import AlertContext from '../../context/Alert/alertContext'
import Alert from '../../components/Alert/Alert'

const JoinMeeting = () => {
    // Context
    const dailyContext = useContext(DailyContext)
    const { createRoom, getRoom, joinRoom } = dailyContext;
    const alertContext = useContext(AlertContext)
    const { setAlert } = alertContext;

    // Local
    const [query, setQuery] = useState("");
    let history = useHistory();

    // Lifecycle
    useEffect(() => {

    }, [])

    // Methods
    const handleJoin = (e) => {
        e.preventDefault();

        getRoom(query)
            .then(room => {
                joinRoom(room.url);
                history.push(`/room/${room.name}`);
            })
            .catch(error => {
                setAlert(error);
            })
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        createRoom(query).then(room => {
            console.log(room)
            // joinRoom(room.url);
            // history.push(`/room/${room.name}`)
        })
    }

    return (
        <Fragment>  
            <Center>
                <StyledForm>
                    <Container>
                        <FlexColumnLayout centered>
                            <StyledInput value={query} onChange={(e) => setQuery(e.target.value)}/>
                            <SubText>
                                Insert <span style={{fontWeight: "bold"}}>room name</span> to join desired Room.
                            </SubText>
                            <SubText>
                                Insert <span style={{fontWeight: "bold"}}>name</span> to create a new Room. A random name with be assigned if left blank.
                            </SubText>
                            <Buttons>
                                <Submit 
                                    value={"Join Call"} 
                                    disabled={!query}
                                    onClick={(e) => handleJoin(e)}
                                    />
                                <Submit 
                                    value={"Create Call"}
                                    onClick={e => handleCreate(e)}
                                    />
                            </Buttons>
                            <Alert />
                        </FlexColumnLayout>
                    </Container>
                </StyledForm>
            </Center>
            <Footer />
        </Fragment>
    )
}

export default JoinMeeting
