"use client"

import { useUser } from "@clerk/nextjs"

export default function UserClient() {
    const { isSignedIn, user, isLoaded } = useUser()
    if (isSignedIn && isLoaded) {
        return user
    }
    return null
}