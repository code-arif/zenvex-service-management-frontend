import { useState, useEffect } from "react";

function ServiceForm({ onSubmit, onCancel, editData }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    status: "active",
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editData) {
      setForm({
        title: editData.title,
        description: editData.description || "",
        category: editData.category,
        status: editData.status,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Two column layout for title + category */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
            Title <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 px-3 py-2.5 text-sm text-black focus:outline-none focus:border-black bg-gray-50"
            placeholder="Enter service title"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
            Category <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 px-3 py-2.5 text-sm text-black focus:outline-none focus:border-black bg-gray-50"
            placeholder="e.g. IT, Cleaning"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-200 px-3 py-2.5 text-sm text-black focus:outline-none focus:border-black bg-gray-50 resize-none"
          placeholder="Optional description..."
        />
      </div>

      {/* Status */}
      <div className="mb-5">
        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">
          Status <span className="text-red-400">*</span>
        </label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border border-gray-200 px-3 py-2.5 text-sm text-black focus:outline-none focus:border-black bg-gray-50"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* Divider + Buttons */}
      <div className="border-t border-gray-100 pt-4 flex gap-2">
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 text-sm font-medium hover:bg-gray-800"
        >
          {editData ? "Update Service" : "Add Service"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-200 text-gray-600 px-5 py-2 text-sm hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ServiceForm;