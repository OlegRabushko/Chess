import cors from "cors";
import { Router } from "express";
import {
  createCategory,
  getCategories,
  getTurnQueue,
  updateState,
} from "./repository";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await getCategories();
  return res.json(categories);
});
router.post("/", async (req, res) => {
  const data = req.body;
  if (!data.name) return res.sendStatus(400);
  try {
    const newCategory = await createCategory(data);
    return res.json(newCategory);
  } catch (e) {
    return res.status(400).send(e);
  }
});

// router.get("/:id", async (req, res) => {
//   const catId = Number(req.params.id);
//   if (!catId) {
//     return res.sendStatus(400);
//   }
//   const cat = await getCategoryById(catId);
//   if (!cat) {
//     return res.sendStatus(404);
//   }
//   res.json(cat);
// });

// router.delete("/:id", async (req, res) => {
//   const catId = Number(req.params.id);
//   if (!catId) {
//     return res.sendStatus(400);
//   }
//   try {
//     await deleteCategory(catId);
//   } catch (e) {
//     return res.status(404).send(e);
//   }
// });

router.get("/queue", async (req, res) => {
  const queue = await getTurnQueue();
  return res.json(queue);
});

router.put("/queue", async (req, res) => {
  const data = req.body as boolean;
  if (!data) return res.sendStatus(400);
  try {
    const queue = await updateState(data);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "GET,POST,PUT");
    res.header("Access-Control-Allow-Origin", "Content-Type");
    return res.json(queue);
  } catch (e) {
    return res.status(400).send(e);
  }
});

export default router;
