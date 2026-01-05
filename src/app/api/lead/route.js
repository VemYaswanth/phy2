import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

function safeFileName(name = "file") {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const payload = {
      type: (formData.get("type") || "").toString(), // contact | quote
      name: (formData.get("name") || "").toString(),
      phone: (formData.get("phone") || "").toString(),
      email: (formData.get("email") || "").toString(),
      message: (formData.get("message") || "").toString(),

      // Quote fields
      vehicleType: (formData.get("vehicleType") || "").toString(),
      model: (formData.get("model") || "").toString(),
      year: (formData.get("year") || "").toString(),
      registrationType: (formData.get("registrationType") || "").toString(),
      location: (formData.get("location") || "").toString(),

      createdAt: new Date().toISOString(),
    };

    const baseDir = path.join(process.cwd(), ".local", "leads");
    const uploadDir = path.join(baseDir, "uploads");
    fs.mkdirSync(uploadDir, { recursive: true });

    let savedFile = null;
    const file = formData.get("document");
    if (file && typeof file === "object" && "arrayBuffer" in file) {
      const bytes = Buffer.from(await file.arrayBuffer());
      const originalName = safeFileName(file.name || "document");
      const fileName = `${Date.now()}_${originalName}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, bytes);
      savedFile = { fileName, originalName, size: bytes.length };
    }

    const id = `${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const leadPath = path.join(baseDir, `${id}.json`);
    fs.writeFileSync(leadPath, JSON.stringify({ id, ...payload, file: savedFile }, null, 2));

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
