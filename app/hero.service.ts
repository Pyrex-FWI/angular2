import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

    /*
    getHeroes() {
        console.log('HeroService called');
        console.log(JSON.stringify(HEROES));
        //return HEROES;
        return Promise.resolve(HEROES); // For no-blocking call
    }
    */

    /**
     * Simulate a slowly resposnse
     * @returns {Promise<T>}
     */
    getHeroes() {
        console.log('HeroService called');

        return new Promise(resolve =>
            setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }

}