import './style.css'
import { setupClock } from './src/clock.js'
import { setupIPTV } from './src/iptv.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>实时时钟</h1>
    <div class="clock" id="clock"></div>
    <div id="iptv"></div>
  </div>
`

setupClock(document.querySelector('#clock'))
setupIPTV(document.querySelector('#iptv'))