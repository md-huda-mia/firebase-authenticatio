import { NavLink } from "react-router-dom";
import UseAuth from "../Hook/useAuth";

const Home = () => {
  const { user } = UseAuth();
  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            Welcome To Authenticate
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            Here, an user can authenticate using google or create an account
            using email password. Powered by Firebase.!
          </p>
          <div className="flex flex-wrap justify-center">
            {user?.email ? (
              <>
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50">
                  Visit Profile
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50">
                    Login
                  </button>
                </NavLink>

                <NavLink to="/register">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">
                    Register
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
