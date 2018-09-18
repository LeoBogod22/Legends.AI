
const fetch = require('node-fetch');

module.exports = (app) => {

    let champname;

    app.post('/search-champ', (req, res) => {
        champname = req.body.champname;   //added by hu
    server = req.body.server; 
        //need to call api to get champions
     const apiId = 'RGAPI-de8d0358-cbb7-4708-9602-615fa4035c52';
        const baseUrl = 'https://'+ server+'/api.riotgames.com/lol/summoner/v3/summoners/by-name/'+ champname + '?api_key='+apiId;


        const userLocation = (url1, url2, champname) => {

            let newUrl = url1 + champname + url2;
            return newUrl;
        };

        const apiUrl = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+ champname + '?api_key='+apiId;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var id = data.id;
            })
            .catch(err => {
                res.redirect('/error');
            });



const apiUrl2 = 'https://euw1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/'+id;

   fetch(apiUrl2)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
            })
            .catch(err => {
                res.redirect('/error');
            });



    })
    app.get('/search-location-champ', (req, res) => {
        //build api URL with user zip
        const apiId = 'RGAPI-de8d0358-cbb7-4708-9602-615fa4035c52';
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