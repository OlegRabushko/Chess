import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./game/game";
import Replays from "./replays/replays";
import StartWindow from "./start-window/start-window";

const Body: FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/replays">
            <Replays />
          </Route>
          <Route path="/">
            <StartWindow />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Body;
