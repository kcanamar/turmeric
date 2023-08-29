/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
	readonly SUPABASE_PUBLIC_URL: string;
	readonly SUPABASE_PUBLIC_ANON: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}