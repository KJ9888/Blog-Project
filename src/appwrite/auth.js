import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteENDPOINT)
            .setProject(conf.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async signup({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                return this.login({ email, password });
            }else{
                return userAccount;
            }

        } catch (error) {
            console.log("Appwrite :: signup :: error", error);
            throw error;
        }
    }

    // Alias method for compatibility with Signup component
    async createAccount(data) {
        return this.signup(data);
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.log("Appwrite :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return true;
        } catch (error) {
            console.log("Appwrite :: logout :: error", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
