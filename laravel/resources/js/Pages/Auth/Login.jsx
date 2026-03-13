import { Head, useForm } from "@inertiajs/react";

export default function Login({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Login" />
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f5f5",
                    padding: "20px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "white",
                        padding: "40px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        width: "100%",
                        maxWidth: "400px",
                    }}
                >
                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <img
                            src="/assets/images/logo-new.jpg"
                            alt="GKI Martadireja"
                            style={{
                                width: "168px",
                                height: "40px",
                                objectFit: "contain",
                                marginBottom: "20px",
                            }}
                        />
                    </div>
                    <h2
                        style={{
                            textAlign: "center",
                            fontSize: "24px",
                            fontWeight: "600",
                            marginBottom: "30px",
                            color: "#333",
                        }}
                    >
                        Login
                    </h2>
                    {status && (
                        <div
                            style={{
                                padding: "12px",
                                marginBottom: "20px",
                                backgroundColor: "#d4edda",
                                color: "#155724",
                                borderRadius: "6px",
                                fontSize: "14px",
                            }}
                        >
                            {status}
                        </div>
                    )}
                    <form onSubmit={submit}>
                        <div style={{ marginBottom: "20px" }}>
                            <label
                                htmlFor="email"
                                style={{
                                    display: "block",
                                    marginBottom: "8px",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "#555",
                                }}
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                autoComplete="username"
                                autoFocus
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    fontSize: "14px",
                                    border: errors.email
                                        ? "1px solid #dc3545"
                                        : "1px solid #ddd",
                                    borderRadius: "6px",
                                    outline: "none",
                                }}
                            />
                            {errors.email && (
                                <div
                                    style={{
                                        color: "#dc3545",
                                        fontSize: "12px",
                                        marginTop: "5px",
                                    }}
                                >
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <label
                                htmlFor="password"
                                style={{
                                    display: "block",
                                    marginBottom: "8px",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "#555",
                                }}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                autoComplete="current-password"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    fontSize: "14px",
                                    border: errors.password
                                        ? "1px solid #dc3545"
                                        : "1px solid #ddd",
                                    borderRadius: "6px",
                                    outline: "none",
                                }}
                            />
                            {errors.password && (
                                <div
                                    style={{
                                        color: "#dc3545",
                                        fontSize: "12px",
                                        marginTop: "5px",
                                    }}
                                >
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div style={{ marginBottom: "24px" }}>
                            <label
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    color: "#555",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                    style={{
                                        marginRight: "8px",
                                        cursor: "pointer",
                                    }}
                                />
                                Remember me
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            style={{
                                width: "100%",
                                padding: "12px",
                                fontSize: "16px",
                                fontWeight: "600",
                                color: "white",
                                backgroundColor: processing
                                    ? "#ccc"
                                    : "#f59e0b",
                                border: "none",
                                borderRadius: "6px",
                                cursor: processing ? "not-allowed" : "pointer",
                            }}
                        >
                            {processing ? "Loading..." : "Sign in"}
                        </button>
                    </form>
                    <div
                        style={{
                            marginTop: "30px",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#999",
                        }}
                    >
                        © {new Date().getFullYear()} GKI Martadireja
                    </div>
                </div>
            </div>
        </>
    );
}
