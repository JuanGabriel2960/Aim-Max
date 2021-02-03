import React from 'react'
import Menu from '../components/Menu'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'
import icon7 from '../images/icon7.png'
import icon8 from '../images/icon8.png'
import icon9 from '../images/icon9.png'
import icon10 from '../images/icon10.png'
import icon11 from '../images/icon11.png'
import icon12 from '../images/icon12.png'
import icon13 from '../images/icon13.png'
import icon14 from '../images/icon14.png'
import icon15 from '../images/icon15.png'
import icon16 from '../images/icon16.png'
import n1 from '../images/n1.png'
import n2 from '../images/n2.png'
import n3 from '../images/n3.png'
import n4 from '../images/n4.png'
import n5 from '../images/n5.png'
import n6 from '../images/n6.png'
import n7 from '../images/n7.png'
import n8 from '../images/n8.png'
import n9 from '../images/n9.png'
import n10 from '../images/n10.png'
import TopCard from '../components/TopCard'
import LeaderCard from '../components/LeaderCard'
import Footer from '../components/Footer'

const LeaderBoard = () => {

    const handleLeader =(e)=>{
        let menuss = document.querySelectorAll('.op-lb')

        if(e.target.tagName==='P' || e.target.tagName==='IMG'){
            menuss.forEach(element => {
                element.classList.remove('on')
            });
            e.target.parentElement.classList.add('on')
        }
    }

    return (
        <div className='leaderboard'>
            <Menu />
            <div className='cont-lb'>
                <div className='menu-lb'>
                    <div onClick={handleLeader} className='op-lb on'>
                        <hr/>
                        <img src={icon1} alt='icon-lb' />
                        <p>Reaction Time</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon2} alt='icon-lb' />
                        <p>Search Number</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon3} alt='icon-lb' />
                        <p>Find Impostor</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon4} alt='icon-lb' />
                        <p>Search Color</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon5} alt='icon-lb' />
                        <p>Color Text</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon6} alt='icon-lb' />
                        <p>Capture Color</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon7} alt='icon-lb' />
                        <p>Shape Change</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon8} alt='icon-lb' />
                        <p>Sound Reaction</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon9} alt='icon-lb' />
                        <p>Schulte Table</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon10} alt='icon-lb' />
                        <p>Visual Memory</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon11} alt='icon-lb' />
                        <p>Traffic Lights</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon12} alt='icon-lb' />
                        <p>Press Key</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon13} alt='icon-lb' />
                        <p>Target Shoot</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon14} alt='icon-lb' />
                        <p>Longest Line</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon15} alt='icon-lb' />
                        <p>Click Limit</p>
                    </div>
                    <div onClick={handleLeader} className='op-lb'>
                        <hr/>
                        <img src={icon16} alt='icon-lb' />
                        <p>Typing Test</p>
                    </div>
                    
                </div>
                <div className='right-lb'>
                    <h2>Top Players</h2>
                    <div className='top-3'>
                        <TopCard position={n1} name='Player Name' score='Score'/>
                        <TopCard position={n2} name='Player Name' score='Score'/>
                        <TopCard position={n3} name='Player Name' score='Score'/>
                    </div>
                    <h3>Best Players</h3>
                    <div>
                        <LeaderCard position={n4} name='Player Name' score='Score'/>
                        <LeaderCard position={n5} name='Player Name' score='Score'/>
                        <LeaderCard position={n6} name='Player Name' score='Score'/>
                        <LeaderCard position={n7} name='Player Name' score='Score'/>
                        <LeaderCard position={n8} name='Player Name' score='Score'/>
                        <LeaderCard position={n9} name='Player Name' score='Score'/>
                        <LeaderCard position={n10} name='Player Name' score='Score'/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LeaderBoard
