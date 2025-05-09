import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://oyyufwqwapjbngozgiku.supabase.co',  // Replace with your Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95eXVmd3F3YXBqYm5nb3pnaWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MjUwNzgsImV4cCI6MjA2MjQwMTA3OH0.4CcwxBYv8C_rMkbNxBSH5JqofaGeFFR3uWQfunALgws'                        // Replace with your Supabase anon key
    );
  }

  get client() {
    return this.supabase;
  }

  async verifyJWT(token: string) {
    const { data, error } = await this.supabase.auth.getUser(token);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}