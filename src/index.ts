import { ApiService } from "./services/apiService";

async function main() {
  try {
    const posts = await ApiService.fetchPosts();
    console.log("Fetched posts:", posts);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

main();