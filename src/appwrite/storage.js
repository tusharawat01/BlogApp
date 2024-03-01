// import config from "../config"
// import { Client, ID, Storage } from "appwrite";


// export class StorageService {
//     client = new Client;
//     storage;

//     constructor() {
//         this.client
//             .setEndpoint(config.appwriteUrl) // Your API Endpoint
//             .setProject(config.appwriteProjectId);    //  Your project ID

//         this.storage = new Storage(this.client);

//     }


//     async uploadFile(file) {
//         try {
//             return await this.storage.createFile(
//                 config.appwriteBucketId,
//                 ID.unique(),
//                 file
//             )
//         } catch (error) {
//             console.log("Appwrite service :: uploadFile :: error", error);
//             return false;

//         }
//     }
//     async deleteFile(fileId) {
//         try {
//             await this.storage.deleteFileFile(
//                 config.appwriteBucketId,
//                 fileId
//             )
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deleteFile :: error", error);
//             return false;

//         }
//     }

//     getFilePreview(fileId) {
//         try {
//             this.storage.getFilePreview(
//                 config.appwriteBucketId,
//                 fileId
//             );

//         } catch (error) {
//             console.log("Appwrite service :: getFilePreview :: error", error);
//             return false;

//         }

//     }

// };

// const storageService = new StorageService()
// export default storageService;