import axios from 'axios';

const localStorageHandlerFunctions = {

    initCountrInformationOnLocalstorage(countryList) {
       let countriesInformation = {};
       countryList.forEach(country => {
            countriesInformation[country.name] = {};
       });
       localStorage.setItem('countriesInformation', JSON.stringify(countriesInformation));
    },

    async getCountriesList() {
        let countriesList = JSON.parse(localStorage.getItem('countriesList'));
        if (countriesList === "undefined" || countriesList === null) {
            const countriesListResponse = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;');
            countriesList = countriesListResponse.data;
            localStorage.setItem('countriesList', JSON.stringify(countriesList));
            
            //init country info array base on country list
            this.initCountrInformationOnLocalstorage(countriesList);
        }

        return countriesList;
    },

    async getMissingInfoFromAPI(countryName, missingInfoForCountry){
        let countriesObjFromLocalStorage = JSON.parse(localStorage.getItem('countriesInformation'));
        let missingInfoArray = [];
        let fieldsUrl = ''
             missingInfoForCountry.forEach(element => {
                fieldsUrl = fieldsUrl + element + ';';
            });
            
            const res = await axios.get('https://restcountries.eu/rest/v2/name/'+countryName+'?fields='+fieldsUrl);
            missingInfoForCountry.forEach(element => {
                let information = res.data[0][element];
                if(Array.isArray(information)){
                    information = this.convertResToString(information);
                }
                countriesObjFromLocalStorage[countryName][element] = information;
            });
            

            localStorage.setItem('countriesInformation', JSON.stringify(countriesObjFromLocalStorage));
            return missingInfoArray;
        
    },

    convertResToString(infoArray){
        let stringInformation = '';
        for (let i = 0; i < infoArray.length ; i++){
            if(infoArray[i].name){
                stringInformation =  infoArray[i].name + ' ' + stringInformation;
            } else {
                stringInformation =  infoArray[i] + ' ' + stringInformation;
            }
        }

        
        return stringInformation;
    },

    async getInformationAboutCountry(countryName, infoTypeList){
        let countriesObjFromLocalStorage = JSON.parse(localStorage.getItem('countriesInformation'));
        let missingInfoForCountry = [];
        let requiredInfo = [];
        let countryInfo = countriesObjFromLocalStorage[countryName];
            infoTypeList.forEach(element => {
                if(countryInfo[element] === undefined || countryInfo[element] === null){
                    missingInfoForCountry.push(element);
                }
                else{
                    requiredInfo.push(countryInfo[element]);
                }
            });

        if(missingInfoForCountry.length > 0){
            await this.getMissingInfoFromAPI(countryName,missingInfoForCountry);
        }

        countriesObjFromLocalStorage = JSON.parse(localStorage.getItem('countriesInformation'));
        countryInfo = countriesObjFromLocalStorage[countryName];
        
        return countryInfo;
    }
}

export default localStorageHandlerFunctions;
