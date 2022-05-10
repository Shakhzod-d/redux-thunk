const usersUrl = "https://jsonplaceholder.typicode.com/users";
// test

export const getUsers = async () => {
  try {
    const request = await fetch(`${usersUrl}`);
    return await request.json();
  } catch (e) {
    throw new Error("GET ERROR IN getUsers", e);
  }
};
