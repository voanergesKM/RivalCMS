import { Route, Routes } from 'react-router-dom';
import { CreatePage } from './pages/CreatePage/CreatePage';
import { FilesPage } from './pages/FilesPage/FilesPage';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ViewPage } from './pages/ViewPage/ViewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/view" element={<ViewPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/files" element={<FilesPage />} />
    </Routes>
  );
}

export default App;
