// ESModule syntax
import axios from 'axios';
// CommonJS syntax
const axios = require('axios');

// Examples: EU https://dapi.stalcraft.net/EU/emission, RU https://dapi.stalcraft.net/RU/emission, NA https://dapi.stalcraft.net/NA/emission.
// linkToApi  - Switch {region} to your server region.
// TOKEN        - Your API token | This example uses DEMO token from "https://eapi.stalcraft.net/overview.html".
const linkToApi   = `https://dapi.stalcraft.net/{region}/emission`;
const TOKEN         = `YOUR_TOKEN`;

// The Axios library is used to retrieve information from the API.
// method   - The method you want to use.
// url      - Link to the API.
// headers  - The header contains your authorization token to pass it to the API.
axios({
    method: 'get',                          
    url: linkToApi,                       
    headers: {                              
        'Authorization': 'Bearer ' + TOKEN  
    },
}).then(emissionData => {

    // Collected data from the API
    // currentStart string<date-time>   - The time when emission is active. (Available during emission only!)
    // previousStart string<date-time>  - The time since the last emission ended.
    // previousEnd string<date-time>    - The time since the last emission ended.
    var currentEmission         = emissionData.data.currentStart ? emissionData.data.currentStart : null,
        previousEmissionStart   = emissionData.data.previousStart,
        previousEmissionEnd     = emissionData.data.previousEnd;

    // The rest of the code... (For example, printing values.)
    // Values are as ISO8601.
    /// 2023-01-24T07:59:26.531845Z
    /// 2023-01-24T05:57:26.531845Z
    /// 2023-01-24T06:02:26.531845Z
    console.log(currentEmission)
    console.log(previousEmissionStart)
    console.log(previousEmissionEnd)
});