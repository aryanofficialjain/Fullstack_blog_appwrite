import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID)
        this.databases = new Databases(this.client)

        this.bucket = new Storage(this.client)
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.databaseID, conf.collectionID, slug)

        } catch (error) {
            console.log("Appwrite service :: getPost() :: ", error);
            return false
            
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.databaseID, conf.collectionID, queries)
        } catch (error) {
            console.log("Appwrite service :: getPosts() :: ", error)
            return false
            
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.databaseID, conf.collectionID, slug,{
                    title, content, featuredImage, status, userId
                } 
            )
        } catch (error) {
            console.log("Appwrite service :: createPost() ::", error)
            return false
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.databaseID, conf.collectionID, slug, {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrte Service :: updateDocument() ::", error)
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile() ::", error);
            return false
        }
    }


    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.bucketID,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile() ::", error);
            return false
        }
    }


    getfilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.bucketID, 
            fileId
        ).href

    }


}


const service = new Service()

export default service;

