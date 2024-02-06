import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// fetcher関数 データフェッチに関する記述をした関数
const fetchTodos = async () => {
  // const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albumsxxxx'); // 意図的にエラーを発生させる
  const result = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  return result.data;
}

export const TodoList = () => {
  // useQueryの第一引数にはアプリで一意のキーを渡す
  // 第二引数にはfetcherを渡す
  // ここではSuspenseを使うため、useSuspenseQueryとしている
  const { data } = useSuspenseQuery<Todo[]>({ queryKey: ['todos'], queryFn: fetchTodos, });
  return (
    <div style={{ height: '300px', border: '2px solid gray', background: 'mistyrose', overflowY: 'scroll' }}>
      <h2>TODO</h2>
      {data?.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  )
}