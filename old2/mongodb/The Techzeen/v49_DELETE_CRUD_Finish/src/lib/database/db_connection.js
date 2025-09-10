const username = process.env.myusername;
const password = process.env.mypassword;

if (!username || !password) {
  throw new Error("missing mongodb creditance");
}

export const connectionString = `mongodb+srv://${username}:${password}@cluster0.p8anpn6.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0`