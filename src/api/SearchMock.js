const timeout = ms => new Promise(res => setTimeout(res, ms));

const imageUri = 'https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80';

export default async ({
  offset,
  limit,
  q,
}) => {
  await timeout(300);
  const items = [...Array(limit).keys()].map(i => ({ id: i + offset, title: `Song ${q} ${i + offset}`, imageUri }));
  return items;
};
