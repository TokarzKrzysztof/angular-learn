import { InjectionToken } from "@angular/core";

export abstract class IAppComponent {
    something: number;
}
export const SOME_TOKEN = new InjectionToken('tokennn', { providedIn: 'root', factory: () => 10 });