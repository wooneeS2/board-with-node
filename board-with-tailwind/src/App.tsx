import './App.css';
import { BoardCreate } from './board/create';
import { BoardDetail } from './board/detail';
import { BoardList } from './board/list';

function App() {
    return (
        <div className="App">
            {/* <BoardList /> */}
            {/* <BoardCreate /> */}
            <BoardDetail />
        </div>
    );
}

export default App;
