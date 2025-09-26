import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthConfig, Session, User } from 'next-auth';
import { db } from './lib/db';
import Credentials from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
import type { JWT as NextAuthJWT } from "next-auth/jwt";



export const config = {
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  adapter: PrismaAdapter(db),
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: {type: "password"}
      },
      authorize: async (credentials) => {
        //check the login form ha sbeen filled out
        if (!credentials) return null

        //find the user in the db and return if available
        const user = await db.user.findFirst({
          where: {
            email: credentials.email as string
          }
        })

        //check if a user is return 
        if (!user) return null
        
        //if user exits now we need to check if the password is correct
        if (user?.password && compareSync(credentials.password as string, user.password)) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
          }
        }
        //if all else fails
        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: NextAuthJWT }) {
      //set the user id from the token
      if (session.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as string
        session.user.name = token.name as string
        session.user.image = token.image as string
      }
      return session;
    },
    async jwt({ token, user, }: { token: NextAuthJWT; user?: User }) {
      //assign user fields to the token
      if (user) {
        token.id = user.id;
        token.role = user.role as string;
        token.image = user.image as string
      }
      return token;
    },
  }
} satisfies NextAuthConfig
export const {handlers, auth, signIn, signOut} = NextAuth(config)