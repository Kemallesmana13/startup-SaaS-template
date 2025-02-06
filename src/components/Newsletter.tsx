const Newsletter = () => {
  return (
    <section className="text-center py-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray 800 dark:text-white">Dapatkan Update Terbaru</h2>
      <p className="text-gray-600 dark:text-gray-300">Masukan email Anda untuk mendapatkan info terbaru.</p>
      <form className="mt-4 flex justify-center">
        <input type="email" placeholder="Masukan email Anda" className="p-3 w-80 border rounded-md" />
        <button className="ml-3 px-4 py-3 bg-blue-600 text-white rounded-md">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
