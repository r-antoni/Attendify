import Cookies from "js-cookie";

const Auth = {
	authenticated: () => {
		return Cookies.get("username");
	},
	logout: (navigate) => {
		Cookies.remove("username");
		Cookies.remove("password");
		Cookies.remove("role")
		navigate("/");
	},
};

export default Auth;