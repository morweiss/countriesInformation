import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


class SearchForm extends Component {
    constructor(props) {
        super(props);
        let selectedCountry, requestedInfo;
    }

    getInfoClicked(){
        if(this.selectedCountry && this.requestedInfo){
            this.props.getInformation(this.selectedCountry, this.requestedInfo);
        }
    }

    render(){
        const {countries , informationTypeList} = this.props;
        const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
        const checkedIcon = <CheckBoxIcon fontSize="small" />;

        return(
            <Container style={{textAlign : "center", borderBottom: "1px solid"}}>
                <Box my={4}>
                    <Typography variant="h4" style ={{fontFamily: "cursive",fontWeight:200}} > What do you want to know? </Typography>
                </Box>
                <Box my={2}>
                    <Autocomplete
                        options={countries}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, newValue) => {
                            this.selectedCountry = newValue.name;
                          }}
                        style={{ width: 500 , marginLeft: "auto", marginRight: "auto"}}
                        renderInput={(params) => <TextField {...params} label=" Choose the country" required margin="normal" />}
                    />
                </Box>
                <Box my={2}>
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={informationTypeList}
                        id="tags-standard"
                        getOptionLabel={(option) => option}
                        onChange={(event, newValue) => {
                            this.requestedInfo = newValue;
                          }}
                        renderOption={(option, { selected }) => (
                            <React.Fragment>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option}
                            </React.Fragment>
                        )}
                        style={{ width: 500 , marginLeft: "auto", marginRight: "auto"}}
                        renderInput={(params) => (
                            <TextField {...params} variant="standard" required label="What do you want to know?"  />
                        )}
                    />
                </Box>
                <Box my={4}>
                    <Button variant="contained" style ={{backgroundColor : "black" , color: "white"}} onClick={() =>{ this.getInfoClicked()}}>
                        GO!
                    </Button>
                </Box>
            </Container>
        );
    }
};

export default SearchForm;