import { FC } from 'react';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer: FC = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(100);
  const [createPost] = postApi.useCreatePostMutation();
  const [updatePost] = postApi.useUpdatePostMutation();
  const [removePost] = postApi.useRemovePostMutation();

  async function handleCreate() {
    // eslint-disable-next-line no-alert
    const title = prompt('Создайте пост') || '';
    await createPost({ title, body: title } as IPost);
  }

  return (
    <div>
      <button style={{ marginBottom: 20 }} type='button' onClick={handleCreate}>
        Создать пост
      </button>
      {isLoading && <h1>Загрузка...</h1>}
      {error && <h1>Ошибка при загрузке</h1>}
      <div style={{ display: 'flex', columnGap: 30 }}>
        {posts && posts.map(post => <PostItem post={post} remove={removePost} update={updatePost} />)}
      </div>
    </div>
  );
};

export default PostContainer;
