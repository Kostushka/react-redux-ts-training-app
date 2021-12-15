import './App.css';
import Card from './components/Card';
import { CardVariant } from './components/Card/Card';

const App = () => {
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
        </div>
    );
};

export default App;
