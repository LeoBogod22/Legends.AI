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

        // Get query parameters
        //build api URL with user zip
        champname = req.query.champname;
        let region = req.query.region;
        console.log(champname);
        console.log(region);

        //need to call api to get champions
        const apiId = 'RGAPI-092fb08a-8d6d-4d0f-b5c9-8d2db8105f12';
        const baseUrl = 'https://' + region + '.api.riotgames.com';

        const apiUrlSummonersByUsername = baseUrl + '/lol/summoner/v3/summoners/by-name/' + champname + '?api_key=' + apiId;

        fetch(apiUrlSummonersByUsername).then(res=>res.json()).then(data=>{
            var summonerData = data;
            const apiUrlMatchListsByAccountId = baseUrl + '/lol/match/v3/matchlists/by-account/' + data.accountId + '?api_key=' + apiId;

            fetch(apiUrlMatchListsByAccountId).then(res=>res.json()).then(data=>{

                var maxNumberOfMatches = 5; // Use -1 for all matches
                var promises = [];
                
                /* Delay is use to put avoid request-limit-exceed for the api '/lol/match/v3/matches/{matchId}' requests
                *  For more details check https://developer.riotgames.com/rate-limiting.html
                */
                var delay = 500;
                for(var i = 0; i < data.matches.length; i++) {
                    if(i == maxNumberOfMatches) {
                        break;
                    }
                    // MatchId is GameId
                    const apiUrlMatchesByMatchId = baseUrl + '/lol/match/v3/matches/' + data.matches[i].gameId + '?api_key=' + apiId;
                    delay += data.matches.length * 5;
                    promises.push(new Promise((resolve, reject) => {
                        setTimeout(() => {
                            fetch(apiUrlMatchesByMatchId).then(res=>res.json()).then(data=>{
                                resolve(data);
                                console.log("Called match Success");
                            }).catch(err=>{
                                console.log("Called match failed");
                                console.log(err);
                                reject();
                            })
                        }, delay);
                    }));
                }

                // Wait for all promises to be resolved or rejected
                Promise.all(promises)
                .then((matches) => {
                    summonerData.values = matches;
                    console.log("Sending data to client");
                    // Send combined responses for all (or limited say top 5) matches
                    res.send({
                        summonerData
                    });
                });
                
            }).catch(err=>{
                res.redirect('/error');
            });

        }).catch(err=>{
            res.redirect('/error');
        });

})

}