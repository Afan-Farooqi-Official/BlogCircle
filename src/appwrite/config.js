import conf from '../config/conf'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // post service
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            const data = { title, content, status, userId, }; 
            // only add featuredImage if provided if (featuredImage) 
            { data.featuredImage = featuredImage; } 
            return await this.databases.createDocument({ 
                databaseId: conf.appwriteDatabaseId, 
                collectionId: conf.appwriteCollectionId, 
                documentId: slug, 
                data, 
            });
        } catch (error) {
            console.log('Appwrite service : createPost : error', error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            })
        } catch (error) {
            console.log('Appwrite service : updatePost : error', error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug
            })
            return true;
        } catch (error) {
            console.log('Appwrite service : deletePost : error', error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug
            })
        } catch (error) {
            console.log('Appwrite service : getPost : error', error)
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                queries
            })
        } catch (error) {
            console.log('Appwrite service : getPosts : error', error)
            return false
        }
    }

    //file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file: file
            })
        } catch (error) {
            console.log('Appwrite service : updateFile : error', error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
            return true
        } catch (error) {
            console.log('Appwrite service : updateFile : error', error)
            return false
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId: fileId
        });
        } catch (error) {
            console.log('Appwrite service : filePreview : error', error)
            return false
        }
    }

    async downloadFile(fileId){
        try {
            return this.bucket.getFileDownload({
                bucketId: conf.appwriteBucketId,
                fileId: fileId
            })
        } catch (error) {
            console.log('Appwrite service : downloadFile : error', error)
            return false
        }
    }
};

const service = new Service()

export default service