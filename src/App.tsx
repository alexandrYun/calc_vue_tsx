import { Component, Vue } from 'vue-property-decorator';
import Calc from './components/Calc';

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <Calc />
      </div>
    )
  }
}
