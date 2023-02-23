import { Injectable } from "@angular/core";

@Injectable()
export class SomeService {
    random: number;
    constructor() {
        this.random = Math.random();
        console.log("instanciated")
    }
}