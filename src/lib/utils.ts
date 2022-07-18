import axios from 'axios';
import jwt_decode from 'jwt-decode';
import useAuthStore from '../store/authStore';

type AuthorDetails = {
	given_name: String;
	name: string;
	email: string;
	picture: string;
	sub: string;
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetAuthor = async (response: any, addAuthor: any) => {
	const decodedJwt: AuthorDetails = jwt_decode(response.credential);
	console.log(decodedJwt);
	const { given_name, name, email, picture, sub } = decodedJwt;

	const author = {
		_id: sub,
		_type: 'author',
		givenName: given_name,
		fullName: name,
		email: email,
		picture: picture,
	};

	addAuthor(author);

	await axios.post(`${BASE_URL}/api/signin`, author);
};
