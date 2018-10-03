import React from 'react';
import PropTypes from 'prop-types';



class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: {},
            data2: {},
            selectedPath: -1,
            showUpdateError: false
        };
    }


    componentDidMount() {
        fetch('http://localhost:5000/search-location-champ?champname=JadenYuki1&region=euw1')
            .then(res => res.json())
            .then(data => {
                // if(this.state.data) {
                //   this.setState({
                //     isLoading: true,

                //     data: data
                //   })


                //   console.log('search s', this.state.data);
                // } else {
                //      this.setState({isLoading:false})
                // 
                console.log(data.summonerData);
                // 
                console.log(data.summonerData.values[0].platformId);

                console.log(data.values);
                this.setState({
                    data: data.summonerData
                });

                this.setState({
                    data2: data.values
                })
                this.setState({
                    loaded: false
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        const {
            selectedPath,
            loaded,
            data
        } = this.state;

        let datalist;

        if (loaded) {
            datalist = < div className = "TaskList-empty" > Loading... < /div>; 

        } else if (data.length) {

            datalist = (


                <
                div >

                <
                section id = "summonerProfile" > < section id = "summoner-header" >

                <
                div className = "container" >
                <
                div id = "summoner-page-header"
                className = "champion-header"
                style = {
                    {
                        backgroundImage: 'url("//static.lolskill.net/img/skins/splash/Katarina_0.jpg")',
                        opacity: 1
                    }
                } >
                <
                div className = "overlay" >
                <
                div id = "summoner-page-header-champion-feature"
                className = "text-center"
                style = {
                    {
                        display: 'block'
                    }
                } >
                <
                h2 className = "skillscore" > < span className = "champion-skillscore" > 1, 721 < /span> LSS</h2 >
                <
                /div>


                <
                div className = "info-row d-flex align-items-center w-100" >
                <
                div className = "icon border-secondary d-inline-block"
                style = {
                    {
                        backgroundImage: 'url("http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/{data.profileIconId} + ".png")'
                    }
                } > & nbsp; < /div>

                <
                div className = "info-text d-inline-flex flex-column justify-content-center" >
                
                <div >
                
               < span className = "text-muted" > euw < /span> 
                <span className = "title" > {
                    this.state.data.name
                } < /span> 
                </div>


               
                 <div className = "subtitle" >
                
               < span className = "text-muted" > MAINS < /span><img className="role tip" src="/ / static.lolskill.net / img / roles / 32 / mid.png " title alt="
                Mid " data-original-title="
                Mid " /><img className="
                role tip " src=" //static.lolskill.net/img/roles/32/top.png" title alt="Top" data-original-title="Top" /><img className="role tip" src="//static.lolskill.net/img/roles/32/jungle.png" title alt="Jungle" data-original-title="Jungle" />
                
                </div>

                
                </div></div > < /div></div > < /div>
                 </section>

              
                < /section> <
                div className = "col-12 col-lg-8 match-history" >

                {
                    data.values.map(value => (


                        
                        <p > {
                            value.platformId
                        } < /p> 

                    ))
                }   
                </div>


                
                </div>

            );
        }


        return ({
            datalist
        });
    }

}

export default Stats;
