import {Module} from 'vuex-simple';
import {FooModule} from './modules/foo';

export class MyStore {
    @Module()
    public foo = new FooModule();
}