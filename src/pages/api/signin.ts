import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const author = req.body;

		client
			.createIfNotExists(author)
			.then(() => res.status(201).json('Logged in successfully'));
	}
};

export default handler;
