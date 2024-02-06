import axios from "axios";
import { useSuspenseQuery } from "@tanstack/react-query";

// 模擬的にスリープさせ、処理を何秒か待たせたいときに使う関数
const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

type Album = {
  userId: number;
  id: number;
  title: string
}

// fetcher関数 データフェッチに関する記述をした関数
const fetchAlubums = async () => {
  // const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albumsxxxx'); // 意図的にエラーを発生させる
  const result = await axios.get<Album[]>('https://jsonplaceholder.typicode.com/albums').then(await sleep(5000)); // 意図的に5秒待たせる
  return result.data;
}

export const AlbumList = () => {
  // useQueryの第一引数にはアプリで一意のキーを渡す
  // 第二引数にはfetcherを渡す
  // ここではSuspenseを使うため、useSuspenseQueryとしている
  const { data } = useSuspenseQuery<Album[]>({ queryKey: ['albums'], queryFn: fetchAlubums, });
  return (
    <div style={{ height: '300px', border: '2px solid gray', background: 'cornsilk', overflowY: 'scroll' }}>
      <h2>アルバム</h2>
      {data?.map((album) => <p key={album.id}>{album.title}</p>)}
    </div>
  )
}