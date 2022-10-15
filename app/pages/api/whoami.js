const axios = require('axios');
 
var parseString = require('xml2js').parseString;


export default async function handler(req, res) {
    console.log('logiing')
    await axios.get('https://www.essentiallysports.com/feed/')
        .then(response => {
            var xml = response.data;
            parseString(xml, function (err, result) {

                res.status(200).json(result.rss.channel[0].item) 
                //console.log(result.rss.channel[0].item);
                console.log('working ---axios');

            });

        })
        .catch(error => {
            console.log("error -- axios");
        });

}