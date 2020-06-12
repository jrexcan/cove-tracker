import React from 'react'

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'
import {getData} from './api'

class App extends React.Component{

    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchData = await getData();
        this.setState({data: fetchData})
    }


    handleCountryChange = async (country)=>{
       const fetchData = await getData(country);
       this.setState({data: fetchData,country:country})
    }


    render(){
        const {data,country} = this.state
        return(
            <div className={styles.container}>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
                <Chart data={data} country={country} /> 
            </div>
        )
    }
}

export default App;