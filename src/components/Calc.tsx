import { MyStore } from '@/store/store'
import {Component} from 'vue-property-decorator'
import { useStore } from 'vuex-simple'
import {VueComponent} from '../shims-vue'

import styles from './Calc.css?module'

@Component
export default class Calc extends VueComponent {

    public store: MyStore = useStore(this.$store);

    addSym(event: any) {
        let buttonValue = event.target.value;
        let topD = this.store.foo.topDisp;

        if ((buttonValue === '-' && (topD[topD.length - 1] !== '-' && topD[topD.length - 1] !== '+')) 
        || (buttonValue === '+' && (topD[topD.length - 1] !== '-' && topD[topD.length - 1] !== '+'))) {
            this.store.foo.updateTopDisplay(buttonValue)
        } else if (buttonValue !== '-' && buttonValue !== '+') {
            this.store.foo.updateTopDisplay(buttonValue)
        }
    };

    clearVal() {
        this.store.foo.clear()
    };

    loadVal() {
        let topD = this.store.foo.topDisp;

        if ((topD[topD.length - 1] === '-' || topD[topD.length - 1] === '+') && topD.length > 1 ) {
            this.store.foo.removeSym();
            this.store.foo.loadValue(this.store.foo.topDisp);
        }
        if (((topD[0] === '+' || topD[0] === '-') && topD.length > 1) || (topD[0] !== '+' && topD[0] !== '-' && topD.length > 0)) {
            this.store.foo.btnDisabledOn(true);
            this.store.foo.loadValue(this.store.foo.topDisp);
        }  
    }

    render() {
        return(
            <div class={styles.calc}>
                <div class={styles.display_wrapper}>
                    <p class={styles.calc__display}>{this.store.foo.topDisp}</p>
                    <p class={styles.calc__display}>{this.store.foo.botDisp}</p>
                </div>
                <div class={styles.buttons_wrapper}>
                    <button class={styles.calc__btn} onClick={this.addSym} value="7" disabled={this.store.foo.btnDisabled}>7</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="8" disabled={this.store.foo.btnDisabled}>8</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="9" disabled={this.store.foo.btnDisabled}>9</button>
                    <button class={[styles.calc__btn_red, styles.calc__btn]} onClick={this.clearVal} disabled={this.store.foo.btnDisabled}>C</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="4" disabled={this.store.foo.btnDisabled}>4</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="5" disabled={this.store.foo.btnDisabled}>5</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="6" disabled={this.store.foo.btnDisabled}>6</button>
                    <button class={[styles.calc__btn_red, styles.calc__btn]} onClick={this.addSym} value="-" disabled={this.store.foo.btnDisabled}>-</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="1" disabled={this.store.foo.btnDisabled}>1</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="2" disabled={this.store.foo.btnDisabled}>2</button>
                    <button class={styles.calc__btn} onClick={this.addSym} value="3" disabled={this.store.foo.btnDisabled}>3</button>
                    <button class={[styles.calc__btn_red, styles.calc__btn]} onClick={this.addSym} value="+" disabled={this.store.foo.btnDisabled}>+</button>
                    <button class={[styles.calc__btn, styles.calc__btn_zero]} onClick={this.addSym} value="0" disabled={this.store.foo.btnDisabled}>0</button>
                    <button class={[styles.calc__btn_red, styles.calc__btn]} onClick={this.loadVal} disabled={this.store.foo.btnDisabled}>=</button>
                </div>
            </div>
        )
    }
}