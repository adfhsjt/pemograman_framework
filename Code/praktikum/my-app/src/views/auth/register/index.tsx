import Link from "next/link";
import style from "../../auth/register/register.module.scss";

const TampilanRegister = () => {
    return (
        <div className={style.register}>
            <h1 className={style.register__title}>Halaman Register</h1>
            <div className={style.register__form}>
                <form action="">
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