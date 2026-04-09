import Link from "next/link";
import style from "../../auth/register/register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const [error, setError] = useState("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const fullname = formData.get("FullName") as string;
        const password = formData.get("Password") as string;
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                fullname,
                password,
            }),
        });
        // const result = await response.json();
        // console.log(result);
        if (response.status === 200) {
            form.reset();
            // event.currentTarget.reset();
            setIsLoading(false);
            push("/auth/login");
        }else{
            setIsLoading(false);
            setError(
                response.status === 400 ? "User already exist" : "An error occured",
            );
        }
    };
    return (
        <div className={style.register}>
            <h1 className={style.register__title}>Halaman Register</h1>
            <div className={style.register__form}>
                <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className={style.register__form__item}>
                        <label
                            htmlFor="email"
                            className={style.register__form__item__label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className={style.register__form__item__input}
                        />
                    </div>
                    {/* Full Name */}
                    <div className={style.register__form__item}>
                        <label
                            htmlFor="fullName"
                            className={style.register__form__item__label}
                        >
                            FullName
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="FullName"
                            className={style.register__form__item__input}
                        />
                    </div>
                    {/* Password */}
                    <div className={style.register__form__item}>
                        <label
                            htmlFor="password"
                            className={style.register__form__item__label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={style.register__form__item__input}
                        />
                    </div>
                    {/* Button Register */}
                    <button type="submit" className={style.register__form__item__button}>
                        Register
                    </button>
                </form>
                <br />
                <p className={style.register__form__item__text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
};

export default TampilanRegister;