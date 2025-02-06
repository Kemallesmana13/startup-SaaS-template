const Pricing = () => {
  return (
    <section className="py-20 text-center bg-white dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Paket Harga</h2>
      <p className="text-gray-600 mt-2">Pilih paket yang sesuai dengan kebutuhan Anda</p>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="w-80 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-gray-800 dark:text-white font-semibold">Basic</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Rp 99.000/bulan</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Pilih Paket</button>
        </div>

        <div className="w-80 bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-xl text-gray-800 dark:text-white font-semibold">Pro</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Rp 199.000/bulan</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md">Pilih Paket</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
