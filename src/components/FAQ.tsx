const FAQ = () => {
  const faqs = [
    {
      question: "Apakah template ini bisa untuk semua bisnis?",
      answer: "Ya, template ini fleksibel dan bisa digunakan untuk berbagai bisnis startup & SaaS.",
    },
    {
      question: "Apakah bisa di-custom sesuai kebutuhan?",
      answer: "Tentu! Template ini dibuat dengan Next.js dan Tailwind, jadi mudah disesuaikan.",
    },
    {
      question: "Apakah ada support jika saya membeli template ini?",
      answer: "Ya, kami menyediakan support via email jika Anda mengalami kendala.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Pertanyaan Umum</h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
