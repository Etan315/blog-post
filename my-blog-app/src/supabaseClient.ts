import { createClient } from '@supabase/supabase-js';

// Get these from your Supabase Dashboard -> Settings -> API
const supabaseUrl = 'https://tzzitpiqxxuoytfnuzgi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6eml0cGlxeHh1b3l0Zm51emdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNDY1NDMsImV4cCI6MjA4MzgyMjU0M30.uycmgQCDS_6h-VsMGdAXIt8B0Cpv64pIXqywvBGKjFU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);