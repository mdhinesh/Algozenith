import { useState } from 'react'
import hero from './assets/hero.png'
import logo from './assets/homelogo.png'
import transparent from './assets/transparent.jpg'
import rightarrow from './assets/rightarrow.png'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className='Hero Texture'>

        <div id='Hero_alltext_content'>
          <h1 id='heading_intro_text'>Be better at DSA & CP</h1>
          <p id='Hero_text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sed accusamus quidem maiores beatae vel ratione culpa soluta dolorem!</p>
          <div id='button_container'> 
            <button className='join_btn_1'>Join now -{'>'}</button>
            <button className='curriculum_btn'>View curriculum</button>
          </div>
          <div className='Hero_feature_div_container'>
            <div className='Hero_feature_div_1'>
              <div className='Hero_feature_div_1_subdiv'>
                <div className="Hero_feature_list_icon"></div>
                <div className="Hero_feature_list_text">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className='Hero_feature_div_1_subdiv Hero_feature_div_2_subdiv'>
                <div className="Hero_feature_list_icon"></div>
                <div className="Hero_feature_list_text">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
            <div className='Hero_feature_div_2'>
              <div className='Hero_feature_div_1_subdiv '>
                <div className="Hero_feature_list_icon"></div>
                <div className="Hero_feature_list_text">Lorem ipsum dolor sit amet.</div>
              </div>
              <div className='Hero_feature_div_1_subdiv Hero_feature_div_2_subdiv'>
                <div className="Hero_feature_list_icon"></div>
                <div className="Hero_feature_list_text">Lorem ipsum dolor sit amet.</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img id='logo' src={logo} alt="hero" />
        </div>

      </div>

      <div className='pricing_container'>

        <div className='pricing_details_div'>
          <h1 id='pricing_intro_text'>Invest in skills,<br/> <span className='highlightened_text'>earn 10X</span> of what you <br />paid.</h1>
          <p id='pricing_intro_text_p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className='pricing_feature_list_container'>
            <div className='pricing_feature_list_div_container'>
              <div className='pricing_feature_list_div'>
                <div className='pricing_empty_icon' ></div>
                <div>
                  <div className='pricing_feature_list_div_line_1'>1.2 Cr/Year</div>
                  <div className="pricing_feature_list_div_line_2">highest fresher package</div>
                </div>
              </div>
              <div className='pricing_feature_list_div'>
                <div className='pricing_empty_icon' ></div>
                <div>
                  <div className='pricing_feature_list_div_line_1'>1000+ Offers</div>
                  <div className="pricing_feature_list_div_line_2">from top companies</div>
                </div>
              </div>
            </div>
            <div className='pricing_feature_list_div_container'  id='pricing_feature_list_div_container_2'>
              <div className='pricing_feature_list_div'>
                <div className='pricing_empty_icon' ></div>
                <div>
                  <div className='pricing_feature_list_div_line_1'>Multiple {'<'}100 Ranks</div>
                  <div className="pricing_feature_list_div_line_2">in kickstart last year</div>
                </div>
              </div>
              <div className='pricing_feature_list_div'>
                <div className='pricing_empty_icon' ></div>
                <div>
                  <div className='pricing_feature_list_div_line_1'>Trusted by IITians</div>
                  <div className="pricing_feature_list_div_line_2">for their career prep</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='card'>
            <div className='card_header_div'>
              <div className="card_header_container">
                <p className='card_heading' >Premium Victory Batch</p>
                <p className='actual_price' >₹19,999</p>
                <p className='discount_price' >₹13,999</p>
              </div>
            </div>
            <div id="color">
              <div id="card_body">
                <div className="card_body_content">
                  <div className='transparent_logo_rectangle' ></div>
                  <div className='pricing_card_list_text_div'>100+ Hrs Live Content</div>
                </div>
                <div className="card_body_content">
                  <div className='transparent_logo_rectangle' ></div>
                  <div className='pricing_card_list_text_div'>50+ Hrs Contest</div>
                </div>
                <div className="card_body_content">
                  <div className='transparent_logo_rectangle' ></div>
                  <div className='pricing_card_list_text_div'>500+ Problems</div>
                </div>
                <div className="card_body_content">
                  <div className='transparent_logo_rectangle' ></div>
                  <div className='pricing_card_list_text_div'>Includes an interview bootcamp and access to a mentor network</div>
                </div>
                <div className="card_body_content">
                  <div className='transparent_logo_rectangle' ></div>
                  <div className='pricing_card_list_text_div'>Enjoy access to our content for one year (paid extensions available)</div>
                </div>
                <div className="card_body_content">
                  <div className='transparent_logo_rectangle' ></div>
                  <div className='pricing_card_list_text_div'>Flexible payment options, including no-cost EMI, are available.</div>
                </div>
                <div id='button_container'> 
                  <button className='join_btn'>Join now -{'>'}</button>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
