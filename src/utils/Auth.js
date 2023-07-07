import Cookies from "js-cookie";

const Auth = {
	authenticated: () => {
		return Cookies.get("token");
	},
};

export default Auth;