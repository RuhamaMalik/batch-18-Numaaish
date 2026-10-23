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
import useFetchData from "./hook/useFetchData";

const Products = () => {
  let { data, isLoading, error } = useFetchData(
    "https://dummyjson.com/products",
  );

  if (isLoading) {
    return <h1>Loading ............ </h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {data?.products?.map((task, i) => (
            <TableRow
              key={i + task?.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>{task?.id}</TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {task?.title}
              </TableCell>
              <TableCell>{task?.price || "00"} $</TableCell>

              <TableCell className="flex gap-2">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Products;
