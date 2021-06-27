import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AdminChatRoom } from './pages/AdminChatRoom';
import { ChatRoom } from './pages/ChatRoom';
import { CreateRoomPage } from './pages/CreateRoomPage';
import { Home } from './pages/Home';

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/auth" component={Home} />
                <Route path="/rooms/new" exact component={CreateRoomPage} />
                <Route path="/rooms/:id" component={ChatRoom} />
                <Route path="/admin/rooms/:id" component={AdminChatRoom} />
            </Switch>
        </BrowserRouter>
    );
}
