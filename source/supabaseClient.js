import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kqwcivdzdjuptgozahnw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eHdwa25jZmdrb2d5dnFkZHR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MTUxODQsImV4cCI6MjA3NjQ5MTE4NH0.Cv9wVOlXpKVO05ADOZIeW0OA9hsRlcu5ebmtWpCGoCs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

