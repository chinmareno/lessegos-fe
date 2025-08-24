import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <h1 className="text-5xl font-bold mb-4">Oops! Halaman Tidak Ditemukan</h1>
      <p className="text-lg mb-8 text-gray-700">
        Sepertinya halaman yang kamu cari tidak ada.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="px-6 py-3 text-muted-foreground underline">
          Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
}
