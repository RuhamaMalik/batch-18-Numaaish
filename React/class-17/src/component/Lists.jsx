import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useSelector } from "react-redux";

export function Lists() {
  let tasks = useSelector((state) => state.todo);

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
            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell>{task?.id}</TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {task?.task}
              </TableCell>
              <TableCell>InProgress</TableCell>

              <TableCell>
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="ms-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Delete
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Lists;
