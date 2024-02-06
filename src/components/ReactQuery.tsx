import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

type Album = {
  userId: number;
  id: number;
  title: string
}

// fetcher関数 データフェッチに関する記述をした関数
const fetchAlubums = async () => {
  const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albumsxx');
  return result.data;
}

export const ReactQuery = () => {
  // useQueryの第一引数にはアプリで一意のキーを渡す
  // 第二引数にはfetcherを渡す
  // ここではSuspenseを使うため、useSuspenseQueryとしている
  const { isLoading, error, data } = useSuspenseQuery<Album[]>({ queryKey: ['albums'], queryFn: fetchAlubums, });

  // if (error) return <p>エラーが発生しました</p>;
  // if (isLoading) return <p>ローディング中です...</p>;
  
  return (
    <div>
      <p>React Query</p>
      {data?.map((album) => <p key={album.id}>{album.title}</p>)}
    </div>
  )
}