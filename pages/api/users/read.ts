import type { NextApiRequest, NextApiResponse } from 'next'
const fs = require('fs');

type Data = {
  name: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
)  {
  const rawdata = fs.readFileSync(`${__dirname}/users.json`);

  let result = JSON.parse(rawdata);

  console.log(result)
  return res.status(200).json(result);
}
