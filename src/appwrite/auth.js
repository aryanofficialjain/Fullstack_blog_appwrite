import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf';

export class Authservice {
    client = new Client();
    account;


    constructor(){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const UserAccount = await this.account.create(ID.unique(),email, password, name );
            if(UserAccount){
                return this.login({email, password})
            }
            else{
                return UserAccount
            }
        } catch (error) {
            throw error
        }
    }
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error 
        }
    }
    async getCurrenctUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: getcurrentuser() :: ", error)
        }
        return null
    }


    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout() :: ", error);
        }
    }


}

const authservice = new Authservice()

export default authservice;