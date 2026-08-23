import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type RsvpSubmission = {
  id?: string;
  name: string;
  attending: boolean;
  transport_preference?: 'Self' | 'need';
  guests: number;
  dietary?: string;
  message?: string;
  created_at?: string;
};
