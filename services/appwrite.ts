import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);
const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: any) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", query),
    ]);
    if (result.documents.length) {
      const doc = result.documents[0];
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc["$id"], {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm: query,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        title: movie.title,
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update search count");
  }
};
