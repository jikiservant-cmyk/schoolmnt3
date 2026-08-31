const { NextResponse } = require('next/server');
const res = NextResponse.next();
res.cookies.set('a', 'b', { secure: true, sameSite: 'none' });
console.log(res.headers.getSetCookie());
