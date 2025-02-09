// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jsonServer from "json-server";
import auth from "json-server-auth";

// إعداد __dirname في بيئة ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// إعداد json-server لقراءة ملف db.json
const router = jsonServer.router("db.json"); // تأكد من وجود db.json في جذر المشروع
const middlewares = jsonServer.defaults();

app.use(express.json());
app.use(middlewares);

// ربط قاعدة البيانات مع json-server-auth
app.db = router.db;
app.use(auth);
app.use(router);

// تقديم ملفات الواجهة الثابتة الناتجة عن بناء تطبيق React (على سبيل المثال، من مجلد "dist" أو "build")
app.use(express.static(path.join(__dirname, "dist"))); // أو "build" حسب إعدادات مشروعك

// إعادة index.html لأي طلب غير معروف (لدعم تطبيق Single Page Application)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
