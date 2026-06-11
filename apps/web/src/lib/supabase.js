import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://iqzekuhpomgzkrdehzvb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_kDdlV-wsKWboVTgu6x1V-w_F7TK5xpT';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
