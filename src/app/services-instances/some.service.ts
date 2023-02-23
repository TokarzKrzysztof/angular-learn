import { Injectable } from "@angular/core";

@Injectable()
export class SomeService {
    from: string;
    random: number;
    constructor() {
        this.random = Math.random();
        console.log("instanciated")
    }
}