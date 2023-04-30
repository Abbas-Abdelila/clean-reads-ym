import { publicHttp } from "./http/http";
class PostService {
  getAllLatestPost = async () => {
    const response = await publicHttp.get("/posts/latest");
    return response;
  };
}

export default new PostService();
