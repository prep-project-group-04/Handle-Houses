// @ts-nocheck
import "./SignUp.css"
export default function SignUp(){

    return (
        <div className="body">
        <form action="" method="post">
            <h1>Sign Up</h1>
            <input type="text" id="username" name="username" placeholder="Username" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
            <input type="password" id="password" name="password" placeholder="Password" required />
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
            <button type="submit" name="signUp">Sign Up</button>
        </form>
        </div>
    )
}