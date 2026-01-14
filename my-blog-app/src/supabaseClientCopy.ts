import { createClient } from '@supabase/supabase-js';

//NOTE: rename this file to -> 'supabaseClient.ts'
// Get these from your Supabase Dashboard -> Settings -> API
const supabaseUrl = 'https://your-supabase-id.supabase.co';
const supabaseAnonKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);