import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AdminChatRoom } from './AdminChatRoom';
import { ChatRoom } from './ChatRoom';
import { CreateRoomPage } from './CreateRoomPage';
import { Home } from './Home';
import { LandingPage } from './LandingPage';
import { NotFound } from './NotFound';

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/auth" component={Home} />
                <Route path="/rooms/new" exact component={CreateRoomPage} />
                <Route path="/rooms/:id" component={ChatRoom} />
                <Route path="/admin/rooms/:id" component={AdminChatRoom} />
                <Route path="/not-found" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
