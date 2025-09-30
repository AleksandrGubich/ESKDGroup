import { Router } from "express";
import { Message } from "../models/Message";

const router = Router();

router.post("/", async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || name.length < 2)
    return res.status(400).json({ error: "Имя слишком короткое" });
  if (!/^(\+375|80)\d{9}$/.test(phone))
    return res.status(400).json({ error: "Неверный телефон" });
  if (!message || message.length < 2)
    return res.status(400).json({ error: "Сообщение слишком короткое" });

  try {
    const msg = new Message({ name, phone, message });
    await msg.save();
    res.status(201).json({ message: "Сообщение сохранено" });
  } catch (err) {
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

export default router;
