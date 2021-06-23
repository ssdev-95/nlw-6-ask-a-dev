import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CreateRoomPage } from './pages/CreateRoomPage';
import { Home } from './pages/Home';

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/rooms/new" component={CreateRoomPage} />
            </Switch>
        </BrowserRouter>
    );
}
