import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.subject) {
        return res.status(400).json({ error: true, message: 'No subject in query params' });
    }
    
    const { subject, page } = req.query;
    const gbooksReqParams = new URLSearchParams({
        q: `Subject:${subject}`,
        startIndex: String((Number(page) - 1) * 6),
        maxResults: '6'
    });
    
    if (!req.query.subject) {
        res.status(400).send({
            error: true,
            message: 'No subject in query params'
        })
    }

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`);
    const booksData = await response.json();

    res.status(200).json({ data: booksData });
}