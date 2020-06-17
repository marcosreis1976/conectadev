import mock from '../utils/mock';

mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': 'marcos.reis',
    'email': 'marcosaurelio@eris.net.br',
});

