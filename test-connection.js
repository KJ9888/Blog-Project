// Simple test to verify Appwrite connection
import { Client } from 'appwrite';

// Test environment variables
console.log('Testing environment variables:');
console.log('VITE_APPWRITE_ENDPOINT:', process.env.VITE_APPWRITE_ENDPOINT || 'undefined');
console.log('VITE_APPWRITE_PROJECT_ID:', process.env.VITE_APPWRITE_PROJECT_ID || 'undefined');
console.log('VITE_APPWRITE_DATABASE_ID:', process.env.VITE_APPWRITE_DATABASE_ID || 'undefined');
console.log('VITE_APPWRITE_COLLECTION_ID:', process.env.VITE_APPWRITE_COLLECTION_ID || 'undefined');
console.log('VITE_APPWRITE_BUCKET_ID:', process.env.VITE_APPWRITE_BUCKET_ID || 'undefined');

// Test Appwrite client initialization
try {
    const client = new Client();
    client
        .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1')
        .setProject(process.env.VITE_APPWRITE_PROJECT_ID || '68bd63de001808a5cc8f');
    
    console.log('✅ Appwrite client initialized successfully');
    console.log('Client endpoint:', client.config.endpoint);
    console.log('Client project:', client.config.project);
} catch (error) {
    console.error('❌ Failed to initialize Appwrite client:', error);
}
