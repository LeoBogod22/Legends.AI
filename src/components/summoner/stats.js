import React from 'react';
import PropTypes from 'prop-types';



class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: {},
      selectedPath: -1,
      showUpdateError: false
    };
  }


componentDidMount() {
   fetch('/search-location-champ')
    .then(res => res.json())
    .then(data => {
if(this.state.data) {
        this.setState({
          isLoading: true,
         
          data: data
        })

        
        console.log('search s', this.state.data);
      } else {
           this.setState({isLoading:false})


}

   
    })
 .catch(err => {
       console.log(err);
    })
  }
  render() {
    const { selectedPath, loaded, data } = this.state;

    return (
        <div id="content-wrapper">
        <div className="container text-center aaa aaaLB"><div id="cdm-zone-01" data-google-query-id="COu2xZWd0d0CFUpgAQodU44AoA"><div id="google_ads_iframe_/58309977/lolskill_0__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="http://tpc.googlesyndication.com/safeframe/1-0-29/html/container.html" id="google_ads_iframe_/58309977/lolskill_0" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div></div> <section id="summonerProfile"> <section id="summoner-header">
            <div className="container">
              <div id="summoner-page-header" className="champion-header" style={{backgroundImage: 'url("//static.lolskill.net/img/skins/splash/Katarina_0.jpg")', opacity: 1}}>
                <div className="overlay">
                  <div id="summoner-page-header-champion-feature" className="text-center" style={{display: 'block'}}>
                    <h2 className="skillscore"><span className="champion-skillscore">1,721</span> LSS</h2>
                    <h5 className="rank color-secondary text-uppercase"><span className="champion-rank" /> <span className="champion-name">Katarina</span></h5>
                  </div>
                  <div className="info-row d-flex align-items-center w-100">
                    <div className="icon border-secondary d-inline-block" style={{backgroundImage: 'url(//static.lolskill.net/img/profileicons/64/1666.png)'}}>&nbsp;</div>
                    <div className="info-text d-inline-flex flex-column justify-content-center">
                      <div>
                        <span className="text-muted">EUW</span>
                        <span className="title">{this.state.data.name} </span>
                      </div>
                      <div className="subtitle">
                        <span className="text-muted">MAINS</span><img className="role tip" src="//static.lolskill.net/img/roles/32/mid.png" title alt="Mid" data-original-title="Mid" /><img className="role tip" src="//static.lolskill.net/img/roles/32/top.png" title alt="Top" data-original-title="Top" /><img className="role tip" src="//static.lolskill.net/img/roles/32/jungle.png" title alt="Jungle" data-original-title="Jungle" />
                      </div>
                    </div> <div className="best-champions ml-auto">
                      <div id="summoner-page-header-champion-55" className="summoner-page-header-champion d-inline-block active" data-champion-id={55} data-champion-name="Katarina" data-champion-image="//static.lolskill.net/img/skins/splash/Katarina_0.jpg" data-skillscore="1,721" data-champion-rank style={{backgroundImage: 'url(//static.lolskill.net/img/champions/64/katarina.png)'}}>
                        <div className="overlay">&nbsp;</div>
                      </div><div id="summoner-page-header-champion-83" className="summoner-page-header-champion d-inline-block" data-champion-id={83} data-champion-name="Yorick" data-champion-image="//static.lolskill.net/img/skins/splash/Yorick_0.jpg" data-skillscore="1,542" data-champion-rank style={{backgroundImage: 'url(//static.lolskill.net/img/champions/64/yorick.png)'}}>
                        <div className="overlay">&nbsp;</div>
                      </div><div id="summoner-page-header-champion-91" className="summoner-page-header-champion d-inline-block" data-champion-id={91} data-champion-name="Talon" data-champion-image="//static.lolskill.net/img/skins/splash/Talon_0.jpg" data-skillscore="1,516" data-champion-rank style={{backgroundImage: 'url(//static.lolskill.net/img/champions/64/talon.png)'}}>
                        <div className="overlay">&nbsp;</div>
                      </div><div id="summoner-page-header-champion-50" className="summoner-page-header-champion d-inline-block hidden-sm-down" data-champion-id={50} data-champion-name="Swain" data-champion-image="//static.lolskill.net/img/skins/splash/Swain_0.jpg" data-skillscore="1,428" data-champion-rank style={{backgroundImage: 'url(//static.lolskill.net/img/champions/64/swain.png)'}}>
                        <div className="overlay">&nbsp;</div>
                      </div><div id="summoner-page-header-champion-238" className="summoner-page-header-champion d-inline-block hidden-sm-down" data-champion-id={238} data-champion-name="Zed" data-champion-image="//static.lolskill.net/img/skins/splash/Zed_0.jpg" data-skillscore="1,394" data-champion-rank style={{backgroundImage: 'url(//static.lolskill.net/img/champions/64/zed.png)'}}>
                        <div className="overlay">&nbsp;</div>
                      </div>
                    </div> </div>
                </div>
              </div>
              <nav className="nav nav-content navbar-expand-lg flex-wrap align-items-stretch">
                <button className="navbar-toggler hidden-lg-up btn btn-outline-primary" type="button" data-toggle="collapse" data-target="#nav-content-responsive" aria-controls="nav-content-responsive" aria-expanded="false" aria-label="Toggle navigation">
                  Summary
                </button>
                <div className="collapse navbar-collapse" id="nav-content-responsive">
                  <div className="nav nav-content flex-wrap align-items-stretch w-100"> <a className="nav-link active" href="summoner/EUW/Jaden%20Yuki1%20/summary">Summary</a> <a className="nav-link" href="summoner/EUW/Jaden%20Yuki1%20/current-game">Current Game</a> <a className="nav-link" href="summoner/EUW/Jaden%20Yuki1%20/champions">Champion Performance</a> <a className="nav-link" href="summoner/EUW/Jaden%20Yuki1%20/leagues">Leagues</a> <a className="nav-link" href="summoner/EUW/Jaden%20Yuki1%20/matches">Matches</a> </div>
                </div>
              </nav>
            </div>
          </section> <div id="summoner-updated-message" className="container">
            <div className="alert alert-info" role="alert">
              This summoner profile has been updated!
            </div>
          </div> <div className="container">
            <div className="row summoner-row-ranks">
              <div className="col-12 col-lg-4 ranks"> <div className="rank d-flex align-items center">
                  <div className="d-flex align-items-center">
                    <img src="//static.lolskill.net/img/tiers/192/unranked.png" alt />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="content text-left">
                      <p className="type color-secondary">Ranked Solo/Duo</p>
                      <p className="tier">Unranked</p>
                      <p className="leaguepoints">&nbsp;</p>
                    </div>
                  </div>
                </div> <div className="rank d-flex align-items center">
                  <div className="d-flex align-items-center">
                    <img src="//static.lolskill.net/img/tiers/192/unranked.png" alt />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="content text-left">
                      <p className="type color-secondary">Ranked Flex 5v5</p>
                      <p className="tier">Unranked</p>
                      <p className="leaguepoints">&nbsp;</p>
                    </div>
                  </div>
                </div> <div className="rank d-flex align-items center">
                  <div className="d-flex align-items-center">
                    <img src="//static.lolskill.net/img/tiers/192/unranked.png" alt />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="content text-left">
                      <p className="type color-secondary">Ranked Flex 3v3</p>
                      <p className="tier">Unranked</p>
                      <p className="leaguepoints">&nbsp;</p>
                    </div>
                  </div>
                </div> </div> <div className="col-12 col-lg-8 match-history"> <table className="match align-middle p-5 w-100 win" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Talon_0.jpg)'}}>
                  <tbody><tr>
                      <td className="align-middle text-left p-2">
                        <div className="shortinfo">
                          <p className="value outcome">Victory</p>
                          <p className="text queue">Ranked Flex 5v5</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="kda tip text-center" data-champion-name="Talon" data-champion-image="//static.lolskill.net/img/champions/120/talon.png" data-kills="9.2" data-deaths="7.1" data-assists="6.4" data-original-title title>
                          <p className="value"><span className="kills stat-good">16</span> / <span className="deaths stat-average">7</span> / <span className="assists stat-good">14</span></p>
                          <p className="text">KDA</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="performance d-flex align-items-center justify-content-center tip" title data-original-title="Champion Performance">
                          <canvas id="performance-111260429" className="performance" width={64} height={64} style={{display: 'block'}} />
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell align-middle height-100">
                        <div className="d-flex icons">
                          <div className="spells">
                            <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                            <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                          </div>
                          <div className="items d-flex flex-column">
                            <div className="d-flex">
                              <img className="item tip" data-item-name="Guardian Angel" data-item-cost={2800} data-item-image="//static.lolskill.net/img/items/64/3026.png" src="//static.lolskill.net/img/items/32/3026.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                              <img className="item tip" data-item-name="The Black Cleaver" data-item-cost={3000} data-item-image="//static.lolskill.net/img/items/64/3071.png" src="//static.lolskill.net/img/items/32/3071.png" alt data-original-title title />
                            </div>
                            <div className="d-flex align-items-center">
                              <img className="item tip" data-item-name="Ionian Boots of Lucidity" data-item-cost={900} data-item-image="//static.lolskill.net/img/items/64/3158.png" src="//static.lolskill.net/img/items/32/3158.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Duskblade of Draktharr" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3147.png" src="//static.lolskill.net/img/items/32/3147.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                            </div>
                          </div>
                          <div className="trinket d-flex align-items-center">
                            <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-right p-2">
                        <div className="time tip text-right" title data-original-title="September 22nd, 2018 – 20:56 CEST">
                          <p className="value duration">52:35</p>
                          <p className="text date">18 hours ago</p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                <div className="match-sm d-flex d-md-none align-items-center justify-content-start w-100 win">
                  <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                  <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                  <div className="ml-auto" />
                  <img className="item tip" data-item-name="Guardian Angel" data-item-cost={2800} data-item-image="//static.lolskill.net/img/items/64/3026.png" src="//static.lolskill.net/img/items/32/3026.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                  <img className="item tip" data-item-name="The Black Cleaver" data-item-cost={3000} data-item-image="//static.lolskill.net/img/items/64/3071.png" src="//static.lolskill.net/img/items/32/3071.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Ionian Boots of Lucidity" data-item-cost={900} data-item-image="//static.lolskill.net/img/items/64/3158.png" src="//static.lolskill.net/img/items/32/3158.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Duskblade of Draktharr" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3147.png" src="//static.lolskill.net/img/items/32/3147.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                </div> <table className="match align-middle p-5 w-100 win" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Talon_0.jpg)'}}>
                  <tbody><tr>
                      <td className="align-middle text-left p-2">
                        <div className="shortinfo">
                          <p className="value outcome">Victory</p>
                          <p className="text queue">Ranked Flex 5v5</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="kda tip text-center" data-champion-name="Talon" data-champion-image="//static.lolskill.net/img/champions/120/talon.png" data-kills="9.2" data-deaths="7.1" data-assists="6.4" data-original-title title>
                          <p className="value"><span className="kills stat-good">13</span> / <span className="deaths stat-good">5</span> / <span className="assists stat-bad">5</span></p>
                          <p className="text">KDA</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="performance d-flex align-items-center justify-content-center tip" title data-original-title="Champion Performance">
                          <canvas id="performance-1108130200" className="performance" width={64} height={64} style={{display: 'block'}} />
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell align-middle height-100">
                        <div className="d-flex icons">
                          <div className="spells">
                            <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                            <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                          </div>
                          <div className="items d-flex flex-column">
                            <div className="d-flex">
                              <img className="item tip" data-item-name="Corrupting Potion" data-item-cost={500} data-item-image="//static.lolskill.net/img/items/64/2033.png" src="//static.lolskill.net/img/items/32/2033.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                              <img className="item tip" data-item-name="The Black Cleaver" data-item-cost={3000} data-item-image="//static.lolskill.net/img/items/64/3071.png" src="//static.lolskill.net/img/items/32/3071.png" alt data-original-title title />
                            </div>
                            <div className="d-flex align-items-center">
                              <img className="item tip" data-item-name="Duskblade of Draktharr" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3147.png" src="//static.lolskill.net/img/items/32/3147.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                              <div className="item noitem" />
                            </div>
                          </div>
                          <div className="trinket d-flex align-items-center">
                            <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-right p-2">
                        <div className="time tip text-right" title data-original-title="September 22nd, 2018 – 19:31 CEST">
                          <p className="value duration">27:33</p>
                          <p className="text date">19 hours ago</p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                <div className="match-sm d-flex d-md-none align-items-center justify-content-start w-100 win">
                  <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                  <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                  <div className="ml-auto" />
                  <img className="item tip" data-item-name="Corrupting Potion" data-item-cost={500} data-item-image="//static.lolskill.net/img/items/64/2033.png" src="//static.lolskill.net/img/items/32/2033.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                  <img className="item tip" data-item-name="The Black Cleaver" data-item-cost={3000} data-item-image="//static.lolskill.net/img/items/64/3071.png" src="//static.lolskill.net/img/items/32/3071.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Duskblade of Draktharr" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3147.png" src="//static.lolskill.net/img/items/32/3147.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                  <div className="item noitem" />
                  <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                </div> <table className="match align-middle p-5 w-100 win" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Talon_0.jpg)'}}>
                  <tbody><tr>
                      <td className="align-middle text-left p-2">
                        <div className="shortinfo">
                          <p className="value outcome">Victory</p>
                          <p className="text queue">Ranked Flex 5v5</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="kda tip text-center" data-champion-name="Talon" data-champion-image="//static.lolskill.net/img/champions/120/talon.png" data-kills="9.2" data-deaths="7.1" data-assists="6.4" data-original-title title>
                          <p className="value"><span className="kills stat-bad">0</span> / <span className="deaths stat-good">0</span> / <span className="assists stat-bad">0</span></p>
                          <p className="text">KDA</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="performance d-flex align-items-center justify-content-center tip" title data-original-title="Champion Performance">
                          <canvas id="performance-975370630" className="performance" width={64} height={64} style={{display: 'block'}} />
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell align-middle height-100">
                        <div className="d-flex icons">
                          <div className="spells">
                            <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                            <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                          </div>
                          <div className="items d-flex flex-column">
                            <div className="d-flex">
                              <img className="item tip" data-item-name="Corrupting Potion" data-item-cost={500} data-item-image="//static.lolskill.net/img/items/64/2033.png" src="//static.lolskill.net/img/items/32/2033.png" alt data-original-title title />
                              <div className="item noitem" />
                              <div className="item noitem" />
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="item noitem" />
                              <div className="item noitem" />
                              <div className="item noitem" />
                            </div>
                          </div>
                          <div className="trinket d-flex align-items-center">
                            <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-right p-2">
                        <div className="time tip text-right" title data-original-title="September 22nd, 2018 – 17:04 CEST">
                          <p className="value duration">3:20</p>
                          <p className="text date">22 hours ago</p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                <div className="match-sm d-flex d-md-none align-items-center justify-content-start w-100 win">
                  <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                  <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                  <div className="ml-auto" />
                  <img className="item tip" data-item-name="Corrupting Potion" data-item-cost={500} data-item-image="//static.lolskill.net/img/items/64/2033.png" src="//static.lolskill.net/img/items/32/2033.png" alt data-original-title title />
                  <div className="item noitem" />
                  <div className="item noitem" />
                  <div className="item noitem" />
                  <div className="item noitem" />
                  <div className="item noitem" />
                  <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                </div> <table className="match align-middle p-5 w-100 loss" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Talon_0.jpg)'}}>
                  <tbody><tr>
                      <td className="align-middle text-left p-2">
                        <div className="shortinfo">
                          <p className="value outcome">Defeat</p>
                          <p className="text queue">Ranked Flex 5v5</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="kda tip text-center" data-champion-name="Talon" data-champion-image="//static.lolskill.net/img/champions/120/talon.png" data-kills="9.2" data-deaths="7.1" data-assists="6.4" data-original-title title>
                          <p className="value"><span className="kills stat-bad">6</span> / <span className="deaths stat-good">5</span> / <span className="assists stat-bad">2</span></p>
                          <p className="text">KDA</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="performance d-flex align-items-center justify-content-center tip" title data-original-title="Champion Performance">
                          <canvas id="performance-1867741281" className="performance" width={64} height={64} style={{display: 'block'}} />
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell align-middle height-100">
                        <div className="d-flex icons">
                          <div className="spells">
                            <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                            <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                          </div>
                          <div className="items d-flex flex-column">
                            <div className="d-flex">
                              <img className="item tip" data-item-name="Refillable Potion" data-item-cost={150} data-item-image="//static.lolskill.net/img/items/64/2031.png" src="//static.lolskill.net/img/items/32/2031.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Phage" data-item-cost={1250} data-item-image="//static.lolskill.net/img/items/64/3044.png" src="//static.lolskill.net/img/items/32/3044.png" alt data-original-title title />
                            </div>
                            <div className="d-flex align-items-center">
                              <img className="item tip" data-item-name="Ionian Boots of Lucidity" data-item-cost={900} data-item-image="//static.lolskill.net/img/items/64/3158.png" src="//static.lolskill.net/img/items/32/3158.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                              <div className="item noitem" />
                            </div>
                          </div>
                          <div className="trinket d-flex align-items-center">
                            <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-right p-2">
                        <div className="time tip text-right" title data-original-title="September 22nd, 2018 – 03:58 CEST">
                          <p className="value duration">29:40</p>
                          <p className="text date">1 day ago</p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                <div className="match-sm d-flex d-md-none align-items-center justify-content-start w-100 loss">
                  <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                  <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                  <div className="ml-auto" />
                  <img className="item tip" data-item-name="Refillable Potion" data-item-cost={150} data-item-image="//static.lolskill.net/img/items/64/2031.png" src="//static.lolskill.net/img/items/32/2031.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Phage" data-item-cost={1250} data-item-image="//static.lolskill.net/img/items/64/3044.png" src="//static.lolskill.net/img/items/32/3044.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Ionian Boots of Lucidity" data-item-cost={900} data-item-image="//static.lolskill.net/img/items/64/3158.png" src="//static.lolskill.net/img/items/32/3158.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                  <div className="item noitem" />
                  <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                </div> <table className="match align-middle p-5 w-100 win" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Talon_0.jpg)'}}>
                  <tbody><tr>
                      <td className="align-middle text-left p-2">
                        <div className="shortinfo">
                          <p className="value outcome">Victory</p>
                          <p className="text queue">Ranked Flex 5v5</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="kda tip text-center" data-champion-name="Talon" data-champion-image="//static.lolskill.net/img/champions/120/talon.png" data-kills="9.2" data-deaths="7.1" data-assists="6.4" data-original-title title>
                          <p className="value"><span className="kills stat-good">11</span> / <span className="deaths stat-good">2</span> / <span className="assists stat-bad">2</span></p>
                          <p className="text">KDA</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="performance d-flex align-items-center justify-content-center tip" title data-original-title="Champion Performance">
                          <canvas id="performance-494050616" className="performance" width={64} height={64} style={{display: 'block'}} />
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell align-middle height-100">
                        <div className="d-flex icons">
                          <div className="spells">
                            <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                            <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                          </div>
                          <div className="items d-flex flex-column">
                            <div className="d-flex">
                              <img className="item tip" data-item-name="Corrupting Potion" data-item-cost={500} data-item-image="//static.lolskill.net/img/items/64/2033.png" src="//static.lolskill.net/img/items/32/2033.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                            </div>
                            <div className="d-flex align-items-center">
                              <img className="item tip" data-item-name="Ionian Boots of Lucidity" data-item-cost={900} data-item-image="//static.lolskill.net/img/items/64/3158.png" src="//static.lolskill.net/img/items/32/3158.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Phage" data-item-cost={1250} data-item-image="//static.lolskill.net/img/items/64/3044.png" src="//static.lolskill.net/img/items/32/3044.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Serrated Dirk" data-item-cost={1100} data-item-image="//static.lolskill.net/img/items/64/3134.png" src="//static.lolskill.net/img/items/32/3134.png" alt data-original-title title />
                            </div>
                          </div>
                          <div className="trinket d-flex align-items-center">
                            <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-right p-2">
                        <div className="time tip text-right" title data-original-title="September 22nd, 2018 – 04:57 CEST">
                          <p className="value duration">25:12</p>
                          <p className="text date">1 day ago</p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                <div className="match-sm d-flex d-md-none align-items-center justify-content-start w-100 win">
                  <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                  <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                  <div className="ml-auto" />
                  <img className="item tip" data-item-name="Corrupting Potion" data-item-cost={500} data-item-image="//static.lolskill.net/img/items/64/2033.png" src="//static.lolskill.net/img/items/32/2033.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Tiamat" data-item-cost={1200} data-item-image="//static.lolskill.net/img/items/64/3077.png" src="//static.lolskill.net/img/items/32/3077.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Ionian Boots of Lucidity" data-item-cost={900} data-item-image="//static.lolskill.net/img/items/64/3158.png" src="//static.lolskill.net/img/items/32/3158.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Phage" data-item-cost={1250} data-item-image="//static.lolskill.net/img/items/64/3044.png" src="//static.lolskill.net/img/items/32/3044.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Serrated Dirk" data-item-cost={1100} data-item-image="//static.lolskill.net/img/items/64/3134.png" src="//static.lolskill.net/img/items/32/3134.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                </div> <table className="match align-middle p-5 w-100 loss" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Zed_0.jpg)'}}>
                  <tbody><tr>
                      <td className="align-middle text-left p-2">
                        <div className="shortinfo">
                          <p className="value outcome">Defeat</p>
                          <p className="text queue">Ranked Flex 5v5</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="kda tip text-center" data-champion-name="Zed" data-champion-image="//static.lolskill.net/img/champions/120/zed.png" data-kills="8.8" data-deaths="6.7" data-assists="5.9" data-original-title title>
                          <p className="value"><span className="kills stat-bad">4</span> / <span className="deaths stat-bad">8</span> / <span className="assists stat-average">6</span></p>
                          <p className="text">KDA</p>
                        </div>
                      </td>
                      <td className="align-middle">
                        <div className="performance d-flex align-items-center justify-content-center tip" title data-original-title="Champion Performance">
                          <canvas id="performance-1847015155" className="performance" width={64} height={64} style={{display: 'block'}} />
                        </div>
                      </td>
                      <td className="d-none d-md-table-cell align-middle height-100">
                        <div className="d-flex icons">
                          <div className="spells">
                            <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                            <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                          </div>
                          <div className="items d-flex flex-column">
                            <div className="d-flex">
                              <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Mercury's Treads" data-item-cost={1100} data-item-image="//static.lolskill.net/img/items/64/3111.png" src="//static.lolskill.net/img/items/32/3111.png" alt data-original-title title />
                              <img className="item tip" data-item-name="Ravenous Hydra" data-item-cost={3500} data-item-image="//static.lolskill.net/img/items/64/3074.png" src="//static.lolskill.net/img/items/32/3074.png" alt data-original-title title />
                            </div>
                            <div className="d-flex align-items-center">
                              <img className="item tip" data-item-name="Ruby Crystal" data-item-cost={400} data-item-image="//static.lolskill.net/img/items/64/1028.png" src="//static.lolskill.net/img/items/32/1028.png" alt data-original-title title />
                              <div className="item noitem" />
                              <div className="item noitem" />
                            </div>
                          </div>
                          <div className="trinket d-flex align-items-center">
                            <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-right p-2">
                        <div className="time tip text-right" title data-original-title="September 21st, 2018 – 19:56 CEST">
                          <p className="value duration">41:07</p>
                          <p className="text date">1 day ago</p>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
                <div className="match-sm d-flex d-md-none align-items-center justify-content-start w-100 loss">
                  <img className="spell tip" data-spell-name="Flash" data-spell-cooldown={300} data-spell-description="Teleports your champion a short distance toward your cursor's location." data-spell-image="//static.lolskill.net/img/spells/32/4.png" src="//static.lolskill.net/img/spells/32/4.png" alt data-original-title title />
                  <img className="spell tip" data-spell-name="Ignite" data-spell-cooldown={210} data-spell-description="Ignites target enemy champion, dealing 80-505 true damage (depending on champion level) over 5 seconds, grants you vision of the target, and reduces healing effects on them for the duration." data-spell-image="//static.lolskill.net/img/spells/32/14.png" src="//static.lolskill.net/img/spells/32/14.png" alt data-original-title title />
                  <div className="ml-auto" />
                  <img className="item tip" data-item-name="Youmuu's Ghostblade" data-item-cost={2900} data-item-image="//static.lolskill.net/img/items/64/3142.png" src="//static.lolskill.net/img/items/32/3142.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Mercury's Treads" data-item-cost={1100} data-item-image="//static.lolskill.net/img/items/64/3111.png" src="//static.lolskill.net/img/items/32/3111.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Ravenous Hydra" data-item-cost={3500} data-item-image="//static.lolskill.net/img/items/64/3074.png" src="//static.lolskill.net/img/items/32/3074.png" alt data-original-title title />
                  <img className="item tip" data-item-name="Ruby Crystal" data-item-cost={400} data-item-image="//static.lolskill.net/img/items/64/1028.png" src="//static.lolskill.net/img/items/32/1028.png" alt data-original-title title />
                  <div className="item noitem" />
                  <div className="item noitem" />
                  <img className="item tip" data-item-name="Warding Totem (Trinket)" data-item-cost={0} data-item-image="//static.lolskill.net/img/items/64/3340.png" src="//static.lolskill.net/img/items/32/3340.png" alt data-original-title title />
                </div> </div>
            </div>
          </div>
          <div className="container">
            <div className="row summoner-row-chart">
              <div className="col-12 col-md-4 d-flex justify-content-center"><div className="container text-center aaa aaaMR"><div id="cdm-zone-02" data-google-query-id="CPKTxpWd0d0CFVJ7AQodxGkA9g"><div id="google_ads_iframe_/58309977/lolskill_1__container__" style={{border: '0pt none', display: 'inline-block', width: 300, height: 250}}><iframe frameBorder={0} src="http://tpc.googlesyndication.com/safeframe/1-0-29/html/container.html" id="google_ads_iframe_/58309977/lolskill_1" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={300} height={250} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div></div> </div> <div className="col-12 col-md-8">
                <div className="role-chart d-flex flex-column justify-content-center text-right"> <div className="d-flex align-items-center">
                    <div className="icon"><img src="//static.lolskill.net/img/roles/32-grey/top.png" alt /></div>
                    <div className="bar-area d-flex align-items-center">
                      <div className="bar d-flex align-items-center justify-content-end" style={{width: '69%'}} />
                      <div className="number">79</div>
                    </div>
                    <div className="role ml-auto">Top</div>
                  </div> <div className="d-flex align-items-center">
                    <div className="icon"><img src="//static.lolskill.net/img/roles/32-grey/jungle.png" alt /></div>
                    <div className="bar-area d-flex align-items-center">
                      <div className="bar d-flex align-items-center justify-content-end" style={{width: '42%'}} />
                      <div className="number">48</div>
                    </div>
                    <div className="role ml-auto">Jungle</div>
                  </div> <div className="d-flex align-items-center">
                    <div className="icon"><img src="//static.lolskill.net/img/roles/32/mid.png" alt /></div>
                    <div className="bar-area d-flex align-items-center">
                      <div className="bar d-flex align-items-center justify-content-end" style={{width: '100%'}} />
                      <div className="number">114</div>
                    </div>
                    <div className="role ml-auto">Mid</div>
                  </div> <div className="d-flex align-items-center">
                    <div className="icon"><img src="//static.lolskill.net/img/roles/32-grey/marksman.png" alt /></div>
                    <div className="bar-area d-flex align-items-center">
                      <div className="bar d-flex align-items-center justify-content-end" style={{width: '16%'}} />
                      <div className="number">19</div>
                    </div>
                    <div className="role ml-auto">Marksman</div>
                  </div> <div className="d-flex align-items-center">
                    <div className="icon"><img src="//static.lolskill.net/img/roles/32-grey/support.png" alt /></div>
                    <div className="bar-area d-flex align-items-center">
                      <div className="bar d-flex align-items-center justify-content-end" style={{width: '31%'}} />
                      <div className="number">36</div>
                    </div>
                    <div className="role ml-auto">Support</div>
                  </div> </div>
              </div> </div>
          </div> </section><div className="container text-center aaa aaaLB"><div id="cdm-zone-04" data-google-query-id="COmvxZWd0d0CFUGrAQoddWIAEw"><div id="google_ads_iframe_/58309977/lolskill_2__container__" style={{border: '0pt none', display: 'inline-block', width: 728, height: 90}}><iframe frameBorder={0} src="http://tpc.googlesyndication.com/safeframe/1-0-29/html/container.html" id="google_ads_iframe_/58309977/lolskill_2" title="3rd party ad content" name scrolling="no" marginWidth={0} marginHeight={0} width={728} height={90} data-is-safeframe="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{border: 0, verticalAlign: 'bottom'}} data-load-complete="true" /></div></div></div> </div>
    );
  }

}

export default Stats;