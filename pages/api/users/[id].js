import users_api from '../../json/users.json';

export default function handler({ query, ...req }, res) {
    const { data } = users_api;

    const id = +query.id;
    res.status(200).json(data.find(user => user.id === id));
}
