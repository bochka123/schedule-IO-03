import { Http } from './http/httpService';
import { Subjects } from './subjects/subjectsService';

const http = new Http();

const subjects = new Subjects({
    baseURL: 'http://localhost:3001',
    http
});

export { http, subjects };