import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        this._isLoaded = false;
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setIsLoaded(bool) {
        this._isLoaded = bool;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
    get id() {
        if (!this._user.data) {
            return null;
        }
        return this._user.data[0].id;
    }
    get isLoaded() {
      
        return this._isLoaded;
    }
}