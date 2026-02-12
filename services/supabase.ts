
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ybuoqlpfhmbmbfkwilce.supabase.co';
const supabaseKey = 'sb_publishable_3zStcHkMW8SM-yVVHbJLFQ_DPYivB-P';

export const supabase = createClient(supabaseUrl, supabaseKey);
