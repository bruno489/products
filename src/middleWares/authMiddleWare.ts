import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export default function authMiddleware (req: Request, res: Response, next: NextFunction) {
  try {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const [, token] = authHeader.split(' ')

      verify(token, process.env.JWT_TOKEN||'', async error => {
        if (error) {
          console.error('Falha na validação do JWT')
          return res.status(401).send({ message: 'Erro de autenticação' })
        }

        next()
      })
    } else {
      return res.status(401).send('Não autorizado. Falha de autenticação!')
    }
  } catch {
    return res.status(401).send('Não autorizado. Falha de autenticação!')
  }
}
