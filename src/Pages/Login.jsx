import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthHook from "../Hook/AuthHook";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // =======
  const { loginUser } = AuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // ==========
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        toast.success("Loging successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={submitHandler}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
              Sign in
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <NavLink to="/forgetpassword">
            <button className="text-xs hover:underline text-gray-400">
              Forgot password?
            </button>
          </NavLink>
        </div>
        <SocialLogin />
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <NavLink to="/register" className="hover:underline text-gray-600">
            Sign up
          </NavLink>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
