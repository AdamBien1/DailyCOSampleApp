import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JoinMeeting from "./pages/JoinMeeting/JoinMeeting";
import DailyState from "./context/DailyCO/DailyState";
import AlertState from "./context/Alert/AlertState";
import MeetingRoom from "./pages/MeetingRoom/MeetingRoom";
import { GlobalReset } from "./helpers/GlobalReset.style";

function App() {
  return (
    <DailyState>
      <AlertState>
        <GlobalReset />
        <Router>
          <Switch>
            <Route exact path="/" component={JoinMeeting} />
            <Route exact path="/room/:id" component={MeetingRoom} />
          </Switch>
        </Router>
      </AlertState>
    </DailyState>
  );
}

export default App;
