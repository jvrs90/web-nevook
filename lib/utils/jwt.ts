import cookie from 'cookie';
import { ServerResponse } from 'http';


const JWT_COOKIE_NAME = 'jid'; //TODO Move to env

export const getJwtFromCookie = (cookies?: string): string | void => {
  if (cookies) {
    return cookie.parse(cookies)[JWT_COOKIE_NAME];
  }
};

export const setJwtCookie = (token: string) => {
  const jwtCookie = cookie.serialize(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'lax',
    maxAge: Number(process.env.COOKIE_EXPIRATION) || 311040000,
  });
  return jwtCookie
  // res.setHeader('Set-Cookie', jwtCookie);
};

export const removeJwtCookie = (res: ServerResponse) => {
  const jwtCookie = cookie.serialize(JWT_COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'lax',
    maxAge: 0,
  });

  res.setHeader('Set-Cookie', jwtCookie);
};
