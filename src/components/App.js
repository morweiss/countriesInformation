import Grid from '@material-ui/core/Grid';
import Header from './Header';
import SearchContainer from './SearchContainer';


const App = () => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Header/>
            <SearchContainer/>
        </Grid>
    );
};

export default App;