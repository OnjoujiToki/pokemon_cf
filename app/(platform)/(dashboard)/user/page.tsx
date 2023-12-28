import { auth, currentUser } from "@clerk/nextjs";

export default async function Page() {

    // Get the userId from auth() -- if null, the user is not logged in
    const { userId } = auth();

    if (userId) {

        console.log(userId)
    }

    // Get the User object when you need access to the user's information
    const user = await currentUser()
    // Use `user` to render user details or create UI elements
}