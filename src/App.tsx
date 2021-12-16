import './App.css';
import Card from './components/Card';
import { CardVariant } from './components/Card/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
    const users: IUser[] = [
        { id: 1, name: 'N', age: 20, address: { city: 'M', flat: 3 } },
        { id: 2, name: 'H', age: 34, address: { city: 'F', flat: 32 } },
    ];
    return (
        <div className='App'>
            <Card
                width='200px'
                height='200px'
                variant={CardVariant.border}
                onClick={(str) => console.log(str)}
            >
                <button>Button</button>
            </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;
