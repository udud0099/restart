const user = process.env.dbusername;
const password = process.env.dbpassword;

if (!user || !password) {
  throw new Error("login fail");
}

export const connectString = `mongodb+srv://${user}:${password}@cluster0.p8anpn6.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0`;
