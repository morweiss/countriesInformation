import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import SearchForm from './SearchForm';
import CountryInfoContainer from './CountryInfoContainer';
import localStorageHandlerFunctions from '../utils/localStorageHandlerFunctions';
import informationConstants from '../utils/const';


class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedCountryInfo : [],
          selectedCountry : '',
          countriesNamesList : [],
          requiredInformation : [],
          informationTypeList: informationConstants.informationTypeList
        };
    }
    componentDidMount(){
        this.getCountriesList();
    }

    getCountriesList = async ()  => {
        const countriesList = await localStorageHandlerFunctions.getCountriesList();
        this.setState({
            countriesNamesList: countriesList
        })
    };

    getInformation = async (countryName, requiredInformation) => {
        const info =  await localStorageHandlerFunctions.getInformationAboutCountry(countryName, requiredInformation);
        this.setState({
            selectedCountry: countryName,
            selectedCountryInfo: info,
            requiredInformation: requiredInformation
        })
    };

    render(){

        return(
            <Container style={{textAlign : "center"}}>
               <SearchForm countries= {this.state.countriesNamesList} informationTypeList= {this.state.informationTypeList} getInformation = {this.getInformation} />
               <CountryInfoContainer selectedCountry={this.state.selectedCountry} selectedCountryInfo={this.state.selectedCountryInfo} requiredInformation= {this.state.requiredInformation}/>
            </Container>
        );
    }
};

export default SearchContainer;