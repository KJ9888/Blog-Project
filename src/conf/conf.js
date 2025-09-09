const conf = {
    appwriteENDPOINT: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// Debug: Log configuration values (only in development)
if (import.meta.env.DEV) {
    console.log('Appwrite Configuration:', {
        endpoint: conf.appwriteENDPOINT,
        projectID: conf.appwriteProjectID,
        databaseID: conf.appwriteDatabaseID,
        collectionID: conf.appwriteCollectionID,
        bucketID: conf.appwriteBucketID,
    });
}

export default conf;
