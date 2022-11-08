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

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}/${path}`;
    }

}

export { Subjects }