import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {StudentList} from './Pages/StudentList';
import {AddStu} from './Pages/AddStu';


function App11() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList/>} />
          <Route path='/add' element={<AddStu/>}/>
          <Route path="/add/:id" element={<AddStu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App11;
