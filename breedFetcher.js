const request = require('request');

const breedName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {

    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
    
    
    request(url, (error, _response, body) => {
        // console.log(body);
        // console.log(typeof body);
        
        if (error) {
            return callback(error,null)
        }
        
        const data = JSON.parse(body);
        // console.log(data);
        
        const breed = data[0];
        if (breed) {
            return callback(null,breed.description)
        } else {
            return callback("Not found" ,null)
        }
    });
};