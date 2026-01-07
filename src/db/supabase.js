import { createClient } from "@supabase/supabase-js";

// 🔴 TEMPORARY HARD-CODED CONFIG (ENV BYPASS)
const supabaseUrl = "https://qfbcjvuvbgdoqfoyudqo.supabase.co";
const supabaseKey =
  "sb_publishable_8f87cnHdoHQRRNAmzcsKVg_LUvDBKNK";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
