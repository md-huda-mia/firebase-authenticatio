import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleUser, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // social handler login ==========
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("login successfull");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around gap-3  mb-3">
        <button
          onClick={() => handleSocialLogin(googleUser)}
          className="btn btn-neutral btn-sm ">
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral btn-sm ">
          GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
