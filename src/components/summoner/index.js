import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ imageId, name }) => {
  return (
    <div className="col-12 col-lg-8 match-history"> 

<table className="match align-middle p-5 w-100 win" style={{backgroundImage: 'url(//static.lolskill.net/img/skins/tablerow/Talon_0.jpg)'}}>
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

                      
                  </div>  

                      

                  
  );
};

Profile.propTypes = {
  imageId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Profile;