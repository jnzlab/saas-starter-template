import { UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <div className="flex justify-end items-center h-[10dvh] w-full px-4">
            <div className="h-8 flex items-center">
                <UserButton />
            </div>
        </div>
    );
}