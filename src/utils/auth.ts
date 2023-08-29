import { createClient } from '@supabase/supabase-js'
import cookie from "cookie"

/////////////////////////
// SUPABASE CLIENT
////////////////////////
const supabaseUrl = import.meta.env.SUPABASE_PUBLIC_URL
const supabaseKey = import.meta.env.SUPABASE_PUBLIC_ANON
console.log({supabaseUrl, supabaseKey})

export const supabase = createClient( 
    import.meta.env.SUPABASE_PUBLIC_URL, 
    import.meta.env.SUPABASE_PUBLIC_ANON 
)

/////////////////////////
// FETCH USER SUPABASE
////////////////////////
export async function getUser(req: Request) {
    const c = cookie.parse(req.headers.get('cookie') ?? "");
    if (!c.sbat) {
        return null
    }

    const { data: { user } } = await supabase.auth.getUser(c.sbat);
    if (!user || user.role !== "authenticated") {
        return null
    }
    return user
}

/////////////////////////
// AUTHENTICATION CHECK
/////////////////////////
export async function isLoggedIn(req: Request) {
    return await getUser(req) != null
}