import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignInInner = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.message || "Échec de la connexion");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Erreur serveur lors de la tentative de connexion");
    }
  };

  // ✅ Ne redirige que si on n'est PAS déjà sur /sign-in ou /sign-up
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const currentPath = window.location.pathname;

    if (token && currentPath !== "/sign-in" && currentPath !== "/sign-up") {
      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  return (
    <div className="account py-120 position-relative">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <div className="bg-main-25 border border-neutral-30 rounded-8 p-32">
              <div className="mb-40">
                <h3 className="mb-16 text-neutral-500">Welcome Back!</h3>
                <p className="text-neutral-500">
                  Sign in to your account and join us
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-24">
                  <label
                    htmlFor="email"
                    className="fw-medium text-lg text-neutral-500 mb-16"
                  >
                    Enter Your Email ID
                  </label>
                  <input
                    type="email"
                    className="common-input rounded-pill"
                    id="email"
                    placeholder="Enter Your Email..."
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-16">
                  <label
                    htmlFor="password"
                    className="fw-medium text-lg text-neutral-500 mb-16"
                  >
                    Enter Your Password
                  </label>
                  <div className="position-relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="common-input rounded-pill pe-44"
                      id="password"
                      placeholder="Enter Your Password..."
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className={`toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y ph-bold ${
                        passwordVisible ? "ph-eye" : "ph-eye-closed"
                      }`}
                      onClick={togglePasswordVisibility}
                    ></span>
                  </div>
                </div>

                {error && (
                  <div className="mb-16">
                    <p className="text-danger">{error}</p>
                  </div>
                )}

                <div className="mb-16 text-end">
                  <Link
                    to="#"
                    className="text-warning-600 hover-text-decoration-underline"
                  >
                    Forget password
                  </Link>
                </div>
                <div className="mb-16">
                  <p className="text-neutral-500">
                    Don't have an account?{" "}
                    <Link
                      to="/sign-up"
                      className="fw-semibold text-main-600 hover-text-decoration-underline"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="mt-40">
                  <button
                    type="submit"
                    className="btn btn-main rounded-pill flex-center gap-8 mt-40"
                  >
                    Sign In
                    <i className="ph-bold ph-arrow-up-right d-flex text-lg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <div className="account-img">
              <img
                src="assets/images/thumbs/account-img.png"
                alt="login"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInner;
