/*
# Create enquiries table for contact form

1. New Tables
- `enquiries`
- `id` (uuid, primary key)
- `name` (text, not null) — name of the person enquiring
- `email` (text, not null) — email to reply to
- `business` (text) — optional company/business name
- `project_type` (text) — e.g. Business Website, Landing Page, Web Application, E-Commerce, Redesign, Maintenance
- `budget` (text) — selected budget range
- `details` (text, not null) — project description
- `status` (text, default 'new') — tracking status
- `created_at` (timestamptz)

2. Security
- Enable RLS on `enquiries`.
- This is a no-auth public contact form: allow anon + authenticated INSERT only.
- No SELECT/UPDATE/DELETE for anon — only the owner can read via the dashboard.
- INSERT is intentionally open so visitors can submit enquiries without signing in.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business text,
  project_type text,
  budget text,
  details text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
