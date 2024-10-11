import { NextApiRequest, NextApiResponse } from 'next';
import { validate } from '../../utils/supportFunctions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ error: true, message: 'Only POST' })
    }

    const { email, password } = req.body;

    const validatedInfo = validate(email, password);

    if (validatedInfo.error) {
        res.status(400).send({ error: true, message: validatedInfo.error, type: validatedInfo.type});
    } else {
        res.status(200).send({ success: true, token: 'testToken' });
    }
}