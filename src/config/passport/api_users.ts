export const apiUsers: Array<IApiUser> = [
    {
        'id': '1f1dc7d8-9395-11e9-b304-1c1bb5508a2e',
        'name': 'demo',
        'roles': ['admin'],
        'password': 'e5d50f9d7a9b4b51fd3f51b80ddf9749072b28b69b36691238108907'
        // demo
    }
];


export interface IApiUser {
    id: string;
    name: string;
    password: string;
    roles?: Array<string>;
}