import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'marcos.reis',
//     'email': 'marcosaurelio@eris.net.br',
// });

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);

    if (email !== 'marcosaurelio@eris.net.br' || password !== 'admin'){
        return [400, {message: 'Seu e-mail ou senha estão incorretos!'}];
    }

    const user = {
        id: 1,
        name: 'Marcos Reis',
        username: 'marcos.reis',
        email: 'marcosaurelio@eris.net.br',
        avatar: '/images/avatars/avatar_1.jpeg',
    }

    return [200, {user}];
});

