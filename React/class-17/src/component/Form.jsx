import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/todo/todoSlice";

export function Form() {
  let dispatch = useDispatch();
  let inputRef = useRef(null);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputRef.current.value));
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="task">Add Task</Label>
        </div>
        <TextInput ref={inputRef} id="task" type="text" required />
      </div>

      <Button type="submit">Add Task</Button>
    </form>
  );
}

export default Form;
