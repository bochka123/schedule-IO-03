import { ApiPath, HttpMethod } from '../../common/enums';

class Subjects {
    constructor({ baseURL, http }) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.SUBJECTS;
    }

    getAll(){
        return this._http.load(this._getUrl(), {
            method: HttpMethod.GET,
        });
    }

    particalUpdate(id){
        return this._http.load(this._getUrl(id), {
            method: HttpMethod.PATCH,
        });
    }

    _getUrl(path = '') {
        console.log(`${this._baseURL}${this._basePath}/${path}`);
        return `${this._baseURL}${this._basePath}/${path}`;
    }

}

export { Subjects }