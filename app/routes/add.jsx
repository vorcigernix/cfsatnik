/* eslint-disable no-undef */
import { json, useLoaderData, redirect, Form } from "remix";

export const loader = async ({ params }) => {
  // return json(
  //   await SATNIK.get(`Jelena`, {
  //     type: "json",
  //   })
  //);
  return json(await SATNIK.get(`Jelena`), { type: "json" });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const id = formData.get("name");
  const description = formData.get("description");
  const age = formData.get("age");
  //console.log(title, description);
  const result = await SATNIK.put(id, JSON.stringify({ description, age }));
  console.log(result);
  return null;
};

export default function Index() {
  const hadry = useLoaderData();
  console.log(hadry);

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
          <button type="submit">Create</button>
        </p>
      </Form>
    </div>
  );
}
