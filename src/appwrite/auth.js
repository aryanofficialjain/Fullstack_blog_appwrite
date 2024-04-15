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
    async login(){}
    async getCurrenctUser(){}
    async logout(){}


}

const authservice = new Authservice()

export default authservice;