import { NextApiRequest, NextApiResponse } from 'next'

const fs = require('fs');

// import { usersRepo } from '../../../utils/users-repo';

// export default apiHandler({
//   post: register
// });

// let users = require('users.json');

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // split out password from user details
  const user = req.body;

  // console.log('users', users);

  // validate
  // if (usersRepo.find(x => x.username === user.username))
  //   throw `User with the username "${user.username}" already exists`;

  // hash password
  // user.hash = Date.now();

  // usersRepo.create(user);

  // fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify([{"name": "pepe"}], null, 2));
  fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify([{"name": "pepe"}], null, 2));
  // const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  console.log(__dirname)

  res.status(200).json({ name: __dirname })

}
