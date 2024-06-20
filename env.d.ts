// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_SECRET: string;
      DATABASE_URL: string;
      AUTH_SECRET: string;
      NEXTAUTH_SALT: string;
      GOOGLE_CLIENT_ID :string;
      GOOGLE_CLIENT_SECRET : string;
      RESEND_API_KEY : string;
      EDGE_STORE_ACCESS_KEY : string;
      EDGE_STORE_SECRET_KEY : string;
      PHONE_NUMBER : string;
      // otras variables de entorno...
    }
  }
  