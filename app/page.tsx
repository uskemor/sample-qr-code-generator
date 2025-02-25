"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">QRコード生成アプリ</h1>
      <input
        type="text"
        className="border p-2 rounded w-64 text-center"
        placeholder="QRコードにするテキスト"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="bg-white p-4 rounded shadow mt-4">
        {text && <QRCodeCanvas value={text} size={200} />}
      </div>
    </div>
  );
}