// G:\rahmatpur-school\app\components/ApprovalBoard.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ApprovalBoard() {
  const data = [
    {
      key: "pathdan",
      title: "পাঠদান / শাখা / বিভাগ অনুমোদন",
      description: "শিক্ষা কার্যক্রম ও বিভাগসমূহের অনুমোদন।",
      color: "border-blue-500 bg-blue-50 hover:bg-blue-100",
    },
    {
      key: "swikrti",
      title: "স্বীকৃতি নবায়ন",
      description: "শিক্ষার্থীদের স্বীকৃতি নবায়নের প্রক্রিয়া।",
      color: "border-indigo-500 bg-indigo-50 hover:bg-indigo-100",
    },
    {
      key: "committee",
      title: "কমিটি অনুমোদন",
      description: "বিদ্যালয় কমিটির অনুমোদন।",
      color: "border-purple-500 bg-purple-50 hover:bg-purple-100",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto my-6 p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-6">
        অনুমোদন ও স্বীকৃতি বোর্ড
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {data.map((item) => (
          <div
            key={item.key}
            className={`flex flex-col items-start p-4 rounded-xl shadow-md border-l-4 ${item.color} transition hover:shadow-lg`}
          >
            <div className="flex items-center space-x-2 mb-2">
              <FaCheckCircle className="text-blue-500 w-5 h-5" />
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
