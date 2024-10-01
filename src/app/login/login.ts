import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

const secret = process.env.JWT_SECRET as string

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body

    if (username === 'user' && password === 'pass') {
      const token = jwt.sign({ username }, secret, { expiresIn: '1h' })

      res.setHeader(
        'Set-Cookie',
        serialize('auth', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600, // 1h
          sameSite: 'strict',
          path: '/',
        })
      )

      return res.status(200).json({ message: 'Page bem-sucedido' })
    }

    return res.status(401).json({ message: 'Credenciais inválidas' })
  }

  res.status(405).json({ message: 'Método não permitido' })
}
