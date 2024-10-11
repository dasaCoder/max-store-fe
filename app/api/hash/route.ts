import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
type ResponseData = {
  hash: string
}
 
export function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  return res.status(200).json({ hash: process.env.PAYHERE_SECRET || "" });
}