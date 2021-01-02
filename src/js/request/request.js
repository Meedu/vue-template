import {
    get,
    post,
    put
} from 'http';

const Api = {
    Auth: {
        Login(params) {
            return post('/api/v1/auth/login', params);
        },
        Register(params) {
            return post('/api/v1/auth/login', params);
        }
    },
    App: {
        Index(params) {
            return get('/api/v1/app/index', params);
        },
        Store(params) {
            return post('/api/v1/app/store', params);
        },
        Edit(id, params) {
            return get(`/api/v1/app/edit/${id}`, params);
        },
        Update(id, params) {
            return put(`/api/v1/app/edit/${id}`, params);
        },
        Recharge(id, params) {
            return post(`/api/v1/app/recharge/${id}`, params);
        },
        Record(id, params) {
            return get(`/api/v1/app/${id}/record`, params);
        }
    },
    Member: {
        Info() {
            return get(`/api/v1/member/info`);
        }
    }
}

export default Api;