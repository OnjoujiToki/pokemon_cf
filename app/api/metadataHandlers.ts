import { NextResponse } from 'next/server';
import { clerkClient } from "@clerk/nextjs";

export async function POST() {
    const { stripeId, userId } = await body.json();
    await clerkClient.users.updateUserMetadata(userId, {
        unsafeMetadata: {
            "birthday": "11-30-1969"
        }
    });

    console.log("here");
    return NextResponse.json({ success: true });
}