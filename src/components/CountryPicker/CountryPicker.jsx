import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl,InputLabel} from '@material-ui/core'

import styles from './CountryPicker.module.css'

import {getCountries} from './../../api'

const CountryPicker = ({handleCountryChange})=>{
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI =async ()=>{
            setFetchedCountries(await getCountries())
        }

        fetchAPI();
    },[setFetchedCountries])

    return(
        <FormControl className={styles.formControl}>
            <InputLabel className={styles.lable} htmlFor="select">Country</InputLabel>
            <NativeSelect className={styles.select} id="select"  defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;