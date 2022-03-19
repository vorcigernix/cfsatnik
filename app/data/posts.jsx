/* eslint-disable no-undef */
export async function getPosts(lastcursor) {
  const entries = await SATNIK.list({
    prefix: "new:F:",
    limit: 2,
    cursor: lastcursor,
  });
  lastcursor = entries.cursor;
  //console.log(cursor);
  const data = await Promise.all(
    entries.keys.map((key) => SATNIK.get(key.name, { type: "json" }))
  );
  return {data:data, cursor:lastcursor};
}
