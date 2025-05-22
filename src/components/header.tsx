import { UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <div className="flex justify-end h-[10dvh] w-full px-4">
            <UserButton />
        </div>
    )
}