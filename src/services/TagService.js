import { publicHttp } from "../services/http/http";

// eslint-disable-next-line no-unused-vars
class TagService {
  getAllTags = async () => {
    const response = await publicHttp.get("/tags");
    return await response;
  };
}

export default new TagService();
