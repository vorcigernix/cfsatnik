/* eslint-disable no-undef */
import { json, useLoaderData } from "remix";

export const loader = async ({ params }) => {
  return json(
    await SATNIK.get(`Jelena`, {
      type: "json",
    })
  );
};

async function dbPut() {
  const result = await SATNIK.put("Jelena", "Super kozačky");
  return result;
}


async function dbRead() {
  const value = await SATNIK.get("Jelena");
  if (value === null) {
    return "No data";
  }

  return value;
}

export default function Index() {
  dbPut().then((result) => {
    console.log(result);
  });
  const hadry = useLoaderData();
  console.log(hadry);

  return (
    <div className="bg-gray-200">
      <h1>Welcome to Remix</h1>
      <ul className="flex">
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <div>
        <ul>
          {hadry.map((item) => (
            <li key={item.key}>
              <a href="/nevim">{item.key}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
