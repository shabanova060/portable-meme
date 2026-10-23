import { reset, seed } from "drizzle-seed";
import { database } from "~/database/connection";
import { users, admins } from "~/database/schema";

async function initialize() {
  await reset(database, { users, admins });
  const passwordHash = await Bun.password.hash("Secure55");

  await seed(database, { users, admins }).refine(function (f) {
    return {
      users: {
        count: 20,
        columns: {
          email: f.email(),
          passwordHash: f.default({ defaultValue: passwordHash }),
        },
      },
      admins: {
        count: 5,
        columns: {
          email: f.email(),
          passwordHash: f.default({ defaultValue: passwordHash }),
        },
      },
    };
  });
}

initialize().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
