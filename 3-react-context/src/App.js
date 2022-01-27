import './App.css';
import Content from './components/Content/Content'
import ThemeContextProvider from './Context/ThemeContext'
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
