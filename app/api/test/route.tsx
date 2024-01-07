import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

export async function GET() {
    const { userId, getToken } = auth();
    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }
    const token = await getToken();
    return NextResponse.json({ token: token });
}