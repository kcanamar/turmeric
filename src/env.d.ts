/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_VERCEL_ANALYTICS_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// Builder.io API Key
interface ImportMetaEnv {
	readonly BUILDER_API_PUBLIC_KEY: string;
  }