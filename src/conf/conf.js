const conf = {
    appwriteURL: import.meta.env.APPWRITE_URL || '',
    databaseID: import.meta.env.DATABASE_ID || '',
    projectID: import.meta.env.PROJECT_ID || '',
    bucketID: import.meta.env.BUCKET_ID || '',
    collectionID: import.meta.env.COLLECTION_ID || '',
};

export default conf;
