import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const CountryInfoContainer = (props) => {
const {selectedCountry , requiredInformation , selectedCountryInfo} = props;
    return (
        <Container style={{textAlign : "center"}}>
                <Box my={4}>
                    <Typography variant="h2" > {selectedCountry} </Typography>
                </Box>
                    {Object.values(requiredInformation).map((info) => {
                        return  <Box my={2}>
                                    <Typography variant="h5" color="primary" key={info+selectedCountry}>{info} </Typography>
                                    {info !== 'flag' ? <Typography variant="h5" > {selectedCountryInfo[info]+selectedCountry} </Typography> : <img src={props.selectedCountryInfo[info]} width="20%"/>}
                                </Box>  
                    })}                                      
        </Container>
        
    );
};

export default CountryInfoContainer;