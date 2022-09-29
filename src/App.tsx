import { FC } from 'react';
import PostContainer from './components/PostContainer';

const App: FC = () => (
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer);
  //
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  <div>
    <h3>Для удаления и создания поста нажмите соответствующие кнопки</h3>
    <h3>Для изменения поста нажмите на сам пост</h3>
    <PostContainer />
  </div>
);
export default App;
