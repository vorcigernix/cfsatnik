/* eslint-disable no-undef */
import { json, redirect, Form } from "remix";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("name");
  const description = formData.get("description");
  const age = formData.get("age");
  const sex = formData.get("sex");
  const status = "new";
  const created = Date.now();
  //console.log(title, description);
  const result = await SATNIK.put(
    `${status}:${sex}:${id}`,
    JSON.stringify({ description, age, status, created })
  );
  console.log(result);
  return null;
};

export default function Add() {
  return (
    <div className="bg-gray-200">
      <h1>Welcome to Satnik</h1>
      <Form method="post">
        <p>
          <label>
            Name: <input name="name" type="text" />
          </label>
        </p>
        <p>
          <label>
            Requirements:
            <br />
            <textarea name="description" />
          </label>
        </p>
        <p>
          <label>
            Age:
            <br />
            <input name="age" />
          </label>
        </p>
        <p>
          <label>
            Sex:
            <br />
            <input name="sex" />
          </label>
        </p>
        <p>
          <button type="submit">Create</button>
        </p>
      </Form>
    </div>
  );
}
