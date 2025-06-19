import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiDataBaseService } from './05-dependency-c';


// Main
(async () => {

    //const provider = new JsonDataBaseService();
    //const provider = new LocalDataBaseService();
    const provider = new WebApiDataBaseService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();