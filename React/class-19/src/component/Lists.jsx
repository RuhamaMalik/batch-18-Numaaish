import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../store/todo/todoSlice";
import { useState } from "react";

export function Lists() {
  let dispatch = useDispatch();
  let tasks = useSelector((state) => state.todo);
  let [isEdit, setIsEdit] = useState(false);
  let [current, setCurrent] = useState(null);

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Task</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {tasks?.map((task, i) => (
            <TableRow
              key={i + task?.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>{task?.id}</TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {isEdit && task.id === current.id ? (
                  <TextInput

                    value={current?.task}
                    onChange={(e) =>
                      setCurrent({ ...current, task: e.target.value })
                    }

                    onKeyUp={(e) => {
                      if (e.key === "Enter") {
                        dispatch( updateTask(current));
                        setIsEdit(false);
                        setCurrent(null);
                      }
                    }}
                    
                    id="small"
                    type="text"
                    sizing="sm"
                  />
                ) : (
                  task?.task
                )}
              </TableCell>
              <TableCell>InProgress</TableCell>

              <TableCell className="flex gap-2">
                <Button
                  onClick={() => {
                    setIsEdit(true);
                    setCurrent(task);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => dispatch(deleteTask(task?.id))}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Lists;
