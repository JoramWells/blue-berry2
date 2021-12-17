import { useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';


// themes
import themes from 'themes';

// local imports
import NavigationScroll from 'layout/NavigationScroll';

const AppProvider = ({children}) => {
    const customization = useSelector((state) => state.customization);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    {children}
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );

}

AppProvider.propTypes={
    children:propTypes.node
};

export default AppProvider