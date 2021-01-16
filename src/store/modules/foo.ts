import {Mutation, State} from 'vuex-simple';

export class FooModule {
    @State()
    public topDisp: string = '';

    @State()
    public botDisp: string = '';

    @State()
    public btnDisabled: boolean = false;

    @Mutation()
    public updateTopDisplay(newSym: string) {
        this.topDisp += newSym;
    }

    @Mutation()
    public removeSym() {
        let newTopDisp: string = this.topDisp.slice(0, (this.topDisp.length - 1));
        this.topDisp = newTopDisp;
    }

    @Mutation()
    public btnDisabledOn(boo: boolean) {
        this.btnDisabled = boo;
    }

    @Mutation()
    public calc(calcString: string) {
        this.botDisp = `= ${eval(calcString)}`;
        this.btnDisabled = false;
        this.topDisp = '';
    }

    @Mutation()
    public clear() {
        this.topDisp = '';
        this.botDisp = '';
    }

    public async loadValue(calcString: string) {
        await new Promise(r => setTimeout(r, 2000));
        this.calc(calcString);
    }
}