"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const qrRef = useRef<HTMLCanvasElement | null>(null);


  // QRコードをPNGとしてダウンロードする関数
  const downloadQRCode = () => {
    if (qrRef.current) {
      const url = qrRef.current.toDataURL("image/png"); // PNGデータを取得
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.png";
      a.click();
    }
  };

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
        {text && <QRCodeCanvas value={text} size={200} ref={qrRef} />}
      </div>
      {text && (
        <button
          onClick={downloadQRCode}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          QRコードをダウンロード
        </button>
      )}
    </div>
  );
}