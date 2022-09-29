import { FC, MouseEvent } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  function handleRemove(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    remove(post);
  }

  function handleUpdate() {
    // eslint-disable-next-line no-alert
    const title = prompt('Измените пост') || '';
    update({ ...post, title });
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    <div style={{ border: '2px solid blue', padding: 15, borderRadius: 10, cursor: 'pointer' }} onClick={handleUpdate}>
      {post.id}. {post.title}
      <br />
      <button type='button' onClick={handleRemove}>
        Удалить пост
      </button>
    </div>
  );
};

export default PostItem;
