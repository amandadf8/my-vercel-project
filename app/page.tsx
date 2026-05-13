import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 p-6 text-white antialiased">
      {/* Kartu Utama */}
      <div className="relative max-w-md transform rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/15 border border-white/20 text-center">
        
        {/* Dekorasi Elemen Lucu */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce text-6xl">
          🚀
        </div>

        {/* Judul Utama */}
        <h1 className="mt-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400 bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-sm">
          Simsalabim, Live!
        </h1>

        {/* Isi Teks Lucu */}
        <div className="mt-6 space-y-3 text-gray-200">
          <p className="text-lg font-semibold text-yellow-300">
            🎉 Berhasil di-deploy lewat jalur gaib (Git)!
          </p>
          <p className="text-sm italic text-gray-300">
            "Kodingnya sambil nangis, pas di-deploy kok malah jalan. Jangan disentuh lagi, takut error."
          </p>
        </div>

        {/* Tombol Interaktif Iseng */}
        <div className="mt-8">
          <button 
            onClick={() => alert("Eits, jangan diklik! Nanti servernya lelah. 🙈")}
            className="w-full transform rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-bold text-white shadow-lg transition-all hover:from-pink-600 hover:to-rose-600 active:scale-95"
          >
            Jangan Diklik!
          </button>
        </div>

        {/* Footer Kecil */}
        <p className="mt-6 text-xs text-purple-300/70">
          Powered by Kopi saset & Doa Ibu
        </p>
      </div>
    </main>
  );
}
