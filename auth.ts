import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // 1. SignIn callback
    async signIn({ user, profile, account }) {
      if (account?.provider === "github") {
        const sanityUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_ID_QUERY, { id: profile?.id });

        if (!sanityUser) {
          await writeClient.create({
            _type: "author",
            id: profile?.id,
            name: user.name,
            username: profile?.login,
            email: user.email,
            image: user.image,
            bio: profile?.bio || "",
          });
        }

        // Attach the ID to the user object so it reaches the JWT callback
        user.id = profile?.id;
      }

      return true;
    },

    // 2. JWT Callback
    async jwt({ token, user, account, profile }) {
      if (user) {
        const sanityUser = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_ID_QUERY, { id: user.id });
        if (sanityUser) {
          token.id = sanityUser._id;
        } else {
          token.id = null;
        }
      }

      return token;
    },

    // 3. Session callback
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
