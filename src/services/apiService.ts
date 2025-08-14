import axios from "axios";
import { Post } from "../types/apiInterface";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export class ApiService {
  static async fetchPosts(): Promise<Post[]> {
    try {
      const res = await api.get<Post[]>("/posts");
     return res.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
}