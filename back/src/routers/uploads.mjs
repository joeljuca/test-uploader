import Router from "@koa/router";

export const router = new Router({
  prefix: "/uploads",
});

router
  .get("/", (ctx) => {
    // List uploads
  })
  .get("/:id", (ctx) => {
    // Return uploads
  })
  .post("/", (ctx) => {
    // Create a new upload
  })
  .put("/:id", (ctx) => {
    // Create a new upload
  })
  .delete("/:id", (ctx) => {
    // List uploads
  });

export default router;
