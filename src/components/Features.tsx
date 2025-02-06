import { FaRocket, FaBolt, FaShieldAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Fitur Unggulan</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Kenapa memilih template ini?</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <FaRocket className="text-blue-600 text-4xl mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4">Cepat & Ringan</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Optimasi performa untuk loading super cepat.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <FaBolt className="text-yellow-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4">Modern & Elegan</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Desain profesional dengan UI/UX terbaik.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
            <FaShieldAlt className="text-green-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4">Keamanan Terjamin</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Kode bersih & aman untuk bisnis Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
