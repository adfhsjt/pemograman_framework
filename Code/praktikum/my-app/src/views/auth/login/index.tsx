import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const [error, setError] = useState("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setError("");
        setIsLoading(true);
        event.preventDefault();
        // const form = event.currentTarget;
        // const formData = new FormData(event.currentTarget);
        // const email = formData.get("email") as string;
        // const password = formData.get("password") as string;
        // if (!email) {
        //     setIsLoading(false);
        //     setError("Email is required");
        //     return
        // }
        // if (password.length < 6) {
        //     setIsLoading(false);
        //     setError("Password must be at least 6 characters");
        //     return;
        // }
        // const response = await fetch("/api/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,
        //     }),
        // });
        // // const result = await response.json();
        // // console.log(result);
        // console.log("Response status:", response.status);
        // if (response.status === 200) {
        //     form.reset();
        //     // event.currentTarget.reset();
        //     setIsLoading(false);
        //     push("/auth/login");
        // } else {
        //     setIsLoading(false);
        //     setError(
        //         response.status === 400 ? "Email already exist" : "An error occured",
        //     );
        // }
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            });

            // console.log("SignIn response:", res);
            if (!res?.error) {
                setIsLoading(false);
                push("/");
            } else {
                setIsLoading(false);
                setError(res?.error || "Login failed");
            }
        } catch (error) {
            setIsLoading(false);
            setError("Wrong email or password");
        }

    };
    return (
        <div className={style.login}>
            {error && <p className={style.login__error}>{error}</p>} {/* Pesan ERROR */}
            <h1 className={style.login__title}>Halaman Login</h1>
            <div className={style.login__form}>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className={style.login__form__item}>
                        <label
                            htmlFor="email"
                            className={style.login__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={style.login__form__item__input}
                        />
                    </div>
                    {/* Password */}
                    <div className={style.login__form__item}>
                        <label
                            htmlFor="password"
                            className={style.login__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={style.login__form__item__input}
                        />
                    </div>
                    {/* Button Login */}
                    <button
                        type="submit"
                        className={style.login__form__item__button}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
                <br />
                <p className={style.login__form__item__text}>
                    Sudah punya akun? <Link href="/auth/register">Ke Halaman Register</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanLogin;