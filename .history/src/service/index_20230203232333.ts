import Http from "@src/network/http";
import AuthService from "@src/service/authService";

const http = new Http('test');

const service = {
	auth: new AuthService();
}
