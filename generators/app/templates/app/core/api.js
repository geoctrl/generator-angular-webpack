import axios from 'axios';

let mockApi = '0.0.0.0:7001/rest';
let prodApi = '/rest';
let responseType = 'json';

module.exports.prod = axios.create({
	baseURL: prodApi,
  responseType: responseType
});

module.exports.mock = axios.create({
	baseURL: mockApi,
  responseType: responseType
});
