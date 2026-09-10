import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kospzhwvquowrfzllksy.supabase.co';
const supabaseAnonKey ='sb_publishable_VKe7IRBAnwHKm9Qmbvm-pA_BbWR5pgk';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);
