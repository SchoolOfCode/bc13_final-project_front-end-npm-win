import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Circles",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@test.com",
        },
        password: { label: "PIN", type: "password" },
      },

      async authorize(credentials, req) {
        console.log("credentials", credentials);
        if (
          credentials.username === "janedoe@test.com" &&
          credentials.password === "test"
        ) {
          return {
            id: 2,
            name: "Jane",
            email: "janedoe@test.com",
            role: "admin",
          };
        }
        return {
          id: 3,
          name: "John",
          surname: "Doe",
          email: "johndoe@test.com",
          role: "user",
        };
        // return null; Currently not needed for demonstration purposes. Implement if setting up a database and the code below.
        // }

        //   const res = await fetch("/your/endpoint", {
        //     method: "POST",
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" },
        //   });
        //   const user = await res.json();

        // If no error and we have user data, return it
        // if (user) {
        //   return user;
        // }
        // // Return null if user data could not be retrieved
        // return null;
      },
    }),
  ],
  theme: {
       colorScheme: "light", // "auto" | "dark" | "light"
       brandColor: "#000080", // Hex color code
       logo: "https://i.ibb.co/kyh22hV/cccccccc.png", // Absolute URL to image
  //   buttonText: "" // Hex color code
   },
  callbacks: {
    jwt: async (options) => {
      //if sign in is attempted successfully a jwt token is created, options contains all the data available
      console.log("options", options.user);
      if (options.user) {
        options.token.role = options.user.role; //Makes role available to access in object
      }
      return options.token;
    },
    session: async ({ session, token, user }) => {
      if (token.role) {
        session.role = token.role;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
  },
});
