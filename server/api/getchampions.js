const fetch = require('node-fetch');

module.exports = (app)=>{

    let champname;

    app.post('/search-champ', (req,res)=>{
        champname = req.body.champname;
        //added by hu
        let region = req.body.region;
        let id = "80339518";
        //need to call api to get champions
        const apiId = 'RGAPI-092fb08a-8d6d-4d0f-b5c9-8d2db8105f12';
        const baseUrl = 'https://' + region + '/api.riotgames.com/lol/summoner/v3/summoners/by-name/' + champname + '?api_key=' + apiId;

        const userLocation = (url1,url2,champname)=>{

            let newUrl = url1 + champname + url2;
            return newUrl;
        };

        const apiUrl = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + champname + '?api_key=' + apiId;

        fetch(apiUrl).then(res=>res.json()).then(data=>{
            var id = data.accountId;
            console.log(data)
res.send({
                        data
                    });
            const apiUrl2 = 'https://euw1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + id + '?api_key=' + apiId;

            fetch(apiUrl2).then(res=>res.json()).then(data=>{
                var id2 = '3775198844';
               
                console.log(data)

                const apiUrl3 = 'https://euw1.api.riotgames.com/lol/match/v3/matches/' + id2 + '?api_key=' + apiId;

                fetch(apiUrl3).then(res=>res.json()).then(data=>{
                    res.send({
                        data
                    });
                    console.log(data)

                }).catch(err=>{
                    res.redirect('/error');
                });
            }).catch(err=>{
                res.redirect('/error');
            });

        }).catch(err=>{
            res.redirect('/error');
        });

    })
    app.get('/search-location-champ', (req,res)=>{
        //build api URL with user zip
        champname = req.body.champname;
        //added by hu
        let region = req.body.region;
        let id = "80339518";
        //need to call api to get champions
        const apiId = 'RGAPI-b95b9f13-9880-4973-98e3-2714e87fc13b';
        const baseUrl = 'https://' + region + '/api.riotgames.com/lol/summoner/v3/summoners/by-name/' + champname + '?api_key=' + apiId;

        const userLocation = (url1,url2,champname)=>{

            let newUrl = url1 + champname + url2;
            return newUrl;
        };

        const apiUrl = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + champname + '?api_key=' + apiId;

        fetch(apiUrl).then(res=>res.json()).then(data=>{
            var id = data.accountId;
            console.log(data)
res.send({
                        data
                    });
            const apiUrl2 = 'https://euw1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + id + '?api_key=' + apiId;

            fetch(apiUrl2).then(res=>res.json()).then(data=>{
                var id2 = '3775198844';
               
                console.log(data)

                const apiUrl3 = 'https://euw1.api.riotgames.com/lol/match/v3/matches/' + id2 + '?api_key=' + apiId;

                fetch(apiUrl3).then(res=>res.json()).then(data=>{
                    res.send({
                        data
                    });
                    console.log(data)

                }).catch(err=>{
                    res.redirect('/error');
                });
            }).catch(err=>{
                res.redirect('/error');
            });

        }).catch(err=>{
            res.redirect('/error');
        });

    })}