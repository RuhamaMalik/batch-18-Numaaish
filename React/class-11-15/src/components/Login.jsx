import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "../config/firebase.config";

function Login() {
  let [data, setData] = useState({ email: "", password: "",name:"" });

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //   let response = await createUserWithEmailAndPassword(
      //     auth,
      //     data?.email,
      //     data?.password,
      //   );
      //   console.log(response?.user);

      await setDoc(doc(db, "batch18", "bbbbbbbbbbbbbbbbbbb"), {
        name: data.name,
        email: data.email,
        password: data.password,
        country: "Pakistan",
        isActive: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 m-auto "
    >

  <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your Name</Label>
        </div>
        <TextInput
          onChange={(e) => setData({ ...data, name: e.target.value })}
          id="name"
          type="text"
          placeholder="Ruhama"
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          onChange={(e) => setData({ ...data, email: e.target.value })}
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput
          onChange={(e) => setData({ ...data, password: e.target.value })}
          id="password1"
          type="password"
          required
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Login;
