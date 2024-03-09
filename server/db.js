import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://yelasontypiaqpbulbvo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllbGFzb250eXBpYXFwYnVsYnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNDA1NTksImV4cCI6MjAyNDcxNjU1OX0.7q02oFJCNTUrnLqW3s77qeRjnO5nmkvGeAgO_r4ciwI');