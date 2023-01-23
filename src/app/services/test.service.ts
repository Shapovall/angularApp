import { Injectable } from "@angular/core";


// @Injectable({ providedIn: "root" })
@Injectable()
export class TetsService {
    private _str: string;

    set setStr(s: string){
        this._str = s;
    }

    get getStr(): string{
        return this._str;
    }
}