import Routes from 'routes';


// provider import
import AppProvider from 'providers/app';

// ==============================|| APP ||============================== //

const App = () => (
    <AppProvider>
        <Routes />
    </AppProvider>

);

export default App;
