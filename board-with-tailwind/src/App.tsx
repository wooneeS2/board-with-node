import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BoardCreate } from './board/create';
import { BoardDetail } from './board/detail';
import { BoardList } from './board/list';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BoardList />} />
                <Route path="/create" element={<BoardCreate />} />
                <Route path="/detail/:boardId" element={<BoardDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
