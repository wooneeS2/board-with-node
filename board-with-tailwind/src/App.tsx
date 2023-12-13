import './App.css';
import { BoardCreate } from './board/create';
import { BoardList } from './board/list';

function App() {
    return (
        <div className="App">
            {/* <BoardList /> */}
            <BoardCreate />
        </div>
    );
}

export default App;
