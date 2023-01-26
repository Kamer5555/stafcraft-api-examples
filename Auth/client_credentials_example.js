// ESModule syntax
import axios from 'axios';
// CommonJS syntax
const axios = require('axios');

// Examples: EU https://dapi.stalcraft.net/EU/emission, RU https://dapi.stalcraft.net/RU/emission, NA https://dapi.stalcraft.net/NA/emission
// linkToApi      - Switch {region} to your server region.
// clientId       - Unique identifier for your application. You will receive it once your application has been approved.
// clientSecret   - Secret for your application. Same as client id, you will receive it once your application has been approved.
// grantType       - Must be set to 'client_credentials'.
const linkToApi   = 'https://exbo.net/oauth/token';
const clientId     = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET'
const grantType    = 'client_credentials'
const scope         = null;

// The Axios library is used to retrieve information from the API.
// method   - The method you want to use.
// url      - The link to the API.
// data     - The data which contains informations that you want to send to the API.
axios({
    method: 'post',                          
    url: linkToApi,
    data: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: grantType,
		scope: scope
    },                       
}).then(authData => {
    
    // Collected data from the API
    // "token_type": "Bearer",
    // "expires_in": 31536000,
    // "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwibmJmIjoxNjczNzk3ODM4LCJleHAiOjQ4MjczOTc4MzgsImlhdCI6MTY3Mzc5NzgzOCwianRpIjoiYXhwbzAzenJwZWxkMHY5dDgzdzc1N2x6ajl1MmdyeHVodXVlb2xsZ3M2dml1YjVva3NwZTJ3eGFrdjJ1eWZxaDU5ZDE2ZTNlN2FqdW16Z3gifQ.ZNSsvwAX72xT5BzLqqYABuH2FGbOlfiXMK5aYO1H5llG51ZjcPvOYBDRR4HUoPZVLFY8jyFUsEXNM7SYz8qL9ePmLjJl6pib8FEtqVPmf9ldXvKkbaaaSp4KkJzsIEMY_Z5PejB2Vr-q-cL13KPgnLGUaSW-2X_sHPN7VZJNMjRgjw4mPiRZTe4CEpQq0BEcPrG6OLtU5qlZ6mLDJBjN2xtK0DI6xgmYriw_5qW1mj1nqF_ewtUiQ1KTVhDgXnaNUdkGsggAGqyicTei0td6DTKtnl3noD5VkipWn_CwSqb2Mhm16I9BPfX_d5ARzWrnrwPRUf6PA_7LipNU6KkkW0mhZfmwEPTm_sXPus0mHPENoVZArdFT3L5sOYBcpqwvVIEtxRUTdcsKp-y-gSzao5muoyPVoCc2LEeHEWx0cIi9spsZ46SPRQpN4baVFp7y5rp5pjRsBKHQYUJ0lTmh1_vyfzOzbtNN2v6W_5w9JTLrN1U6fhmifvKHppFSEqD6DameL1TC59kpIdufRkEU9HE4O-ErEf1GuJFRx-Dew6XDvb_ExhvEqcw31yNvKzpVqLYJfLazqn6tUbVuAiPwpy6rP9tYO2taT1vj5TGn_vxwDu9zoLWe796tFMPS-kmbCglxB5C9L4EbpfWNbWxYjUkTvjT2Ml9OnrB0UbYo1jI"
    console.log(authData)
});