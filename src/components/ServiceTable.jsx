function ServiceTable({ services, onEdit, onDelete }) {
  if (services.length === 0) {
    return (
      <div className="text-center py-14">
        <p className="text-gray-400 text-sm">No services yet.</p>
        <p className="text-gray-300 text-xs mt-1">
          Click "+ Add Service" to get started.
        </p>
      </div>
    );
  }

  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-gray-100">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-10">
            #
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Category
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Description
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {services.map((service, index) => (
          <tr
            key={service.id}
            className="border-b border-gray-50 hover:bg-gray-50"
          >
            <td className="px-6 py-4 text-gray-300 text-xs">{index + 1}</td>

            <td className="px-6 py-4 font-medium text-black">
              {service.title}
            </td>

            <td className="px-6 py-4">
              {/* Category pill */}
              <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 font-medium">
                {service.category}
              </span>
            </td>

            <td className="px-6 py-4 text-gray-400 text-xs max-w-xs truncate">
              {service.description || "—"}
            </td>

            <td className="px-6 py-4">
              {/* Status badge */}
              <span
                className={`text-xs px-2.5 py-1 font-medium border ${
                  service.status === "active"
                    ? "border-black text-black"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                {service.status === "active" ? "● Active" : "○ Inactive"}
              </span>
            </td>

            <td className="px-6 py-4">
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => onEdit(service)}
                  className="text-xs px-3 py-1.5 border border-gray-200 text-gray-600 hover:border-black hover:text-black"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(service.id)}
                  className="text-xs px-3 py-1.5 border border-gray-200 text-gray-400 hover:border-red-400 hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServiceTable;