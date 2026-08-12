const SUPABASE_URL =
    "https://vjrgmemaisxzjkmncvov.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_9HmiXjkGNr-zAs2JUNzTlA_hXW8_DlE";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
