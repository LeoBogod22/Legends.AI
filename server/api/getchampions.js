

const fetch = require('node-fetch');

module.exports = (app) => {

    let champname;

    app.post('/search-champ', (req, res) => {
		champname = req.body.champname;   //added by hu

		//need to call api to get champions
		var result = {
            champs:[
                {
                    "name":"test1",
                },
                {
                    "name":"test2",
                },
            ]
        }

        //need to return result
		res.send(result)
    })

    app.get('/search-location-champ', (req, res) => {
        //build api URL with user zip
        const apiId = 'RGAPI-60b2da76-dfb4-4ea3-aee9-6183f6990887';
        const baseUrl = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+ champname + '?api_key='+apiId;


        const userLocation = (url1, url2, champname) => {

            let newUrl = url1 + champname + url2;
            return newUrl;
        };

        const apiUrl = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+ champname + '?api_key='+apiId;


        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
            })
            .catch(err => {
                res.redirect('/error');
            });


    })
}