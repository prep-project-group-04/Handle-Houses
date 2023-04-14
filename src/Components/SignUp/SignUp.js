// @ts-nocheck
import "./SignUp.css"
export default function SignUp(){

    return (
        <div className="body">
        <form action="" method="post">
            <h1>Sign Up</h1>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />

            <button type="submit">Sign Up</button>
        </form>
        </div>
    )
}