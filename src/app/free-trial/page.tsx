export default function FreeTrialPage() {
  return (
    <main className="container mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Coba Gratis 7 Hari!</h1>
      <p className="text-gray-600 mt-2">Daftar sekarang dan nikmati akses penuh selama 7 hari tanpa biaya.</p>
      <form className="mt-6 max-w-md mx-auto">
        <input type="email" placeholder="Masukan email Anda" className="w-full p-3 border rounded-md" />
        <button type="submit" className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">
          Mulai Sekarang
        </button>
      </form>
    </main>
  );
}
