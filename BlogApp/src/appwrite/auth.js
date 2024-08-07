/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import {Client, Account, ID} from 'appwrite';

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }
    async createAccount({email, password, name})
    {
        const  userAccount = await this.account.create(ID.unique(), email, password, name)
        try {
            if(userAccount){
                return this.login(email, password)
            } else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login(email, password){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }        
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }
    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService();
export default authService;