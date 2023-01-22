import { createClient } from "@supabase/supabase-js";

async function main() {
  const clientSupabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const testres1 = await clientSupabase.from("some_table").select();
  console.log(testres1.data?.length); // succeeds

  const testres = await clientSupabase.from("some_table").insert({
    email: "test@gmail.com",
  });

  console.log(testres); // returns an error
}

main();
