import { memo, useDeferredValue } from "react";
import type { Task } from "./Transition"

type Props = {
  taskList: Task[];
}

export const TaskList = memo(({ taskList }: Props) => {
  // 緊急性が低い値を引数に指定
  // useDeferredValueを通して生成されたタスクリスト
  const deferredTaskList = useDeferredValue(taskList);
  return (
    <>
      {deferredTaskList.map((task) => (
        // <div key={task.id} style={{ width: '300px', margin: 'auto', background: 'lavender', opacity: isPending ? 0.5 : 1 }}>
        <div key={task.id} style={{ width: '300px', margin: 'auto', background: 'lavender' }}>
          <p>タイトル{task.title}</p>
          <p>担当{task.assignee}</p>
        </div>
      ))}
    </>
  )
})