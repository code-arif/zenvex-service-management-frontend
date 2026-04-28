import { useState, useEffect } from "react";
import api from "./api/axios";
import ServiceTable from "./components/ServiceTable";
import ServiceForm from "./components/ServiceForm";

function App() {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editService, setEditService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  // fatch all service
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await api.get("/services");
      setServices(response.data.data);
      setError(null);
    } catch (err) {
      setError("Failed to load services. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  // store service
  const handleAdd = async (formData) => {
    try {
      const response = await api.post("/services/store", formData);
      setServices([response.data.data, ...services]);
      setShowForm(false);
    } catch (err) {
      alert("Failed to add service. Please check your input.");
    }
  };

  const handleEditClick = (service) => {
    setEditService(service);
    setShowForm(true);
  };

  // update service
  const handleUpdate = async (formData) => {
    try {
      const response = await api.post(
        `/services/update/${editService.id}`,
        formData,
      );
      setServices(
        services.map((s) => (s.id === editService.id ? response.data : s)),
      );
      setShowForm(false);
      setEditService(null);
    } catch (err) {
      alert("Failed to update service.");
    }
  };

  // delete service
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?"))
      return;
    try {
      await api.delete(`/services/destroy/${id}`);
      setServices(services.filter((s) => s.id !== id));
    } catch (err) {
      alert("Failed to delete service.");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditService(null);
  };

  const activeCount = services.filter((s) => s.status === "active").length;
  const inactiveCount = services.filter((s) => s.status === "inactive").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-black tracking-tight">
              Service Management
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">Admin Panel</p>
          </div>
          {!showForm && (
            <button
              onClick={() => {
                setShowForm(true);
                setEditService(null);
              }}
              className="bg-black text-white text-sm px-4 py-2 font-medium hover:bg-gray-800"
            >
              + Add Service
            </button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-6 space-y-5">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
              Total Services
            </p>
            <p className="text-3xl font-bold text-black mt-1">
              {services.length}
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
              Active
            </p>
            <p className="text-3xl font-bold text-black mt-1">{activeCount}</p>
          </div>
          <div className="bg-white border border-gray-200 p-5">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
              Inactive
            </p>
            <p className="text-3xl font-bold text-black mt-1">
              {inactiveCount}
            </p>
          </div>
        </div>

        {/* Add / Edit Form Card */}
        {showForm && (
          <div className="bg-white border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-black">
                  {editService ? "Edit Service" : "Add New Service"}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {editService
                    ? "Update the service details below"
                    : "Fill in the details to create a new service"}
                </p>
              </div>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-black text-xl leading-none">
                ×
              </button>
            </div>
            <div className="px-6 py-5">
              <ServiceForm
                onSubmit={editService ? handleUpdate : handleAdd}
                onCancel={handleCancel}
                editData={editService}
              />
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-white border border-red-200 px-5 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Services Table Card */}
        <div className="bg-white border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-black">All Services</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {loading ? "Loading..." : `${services.length} record(s)`}
            </p>
          </div>
          <div>
            {loading ? (
              <div className="text-center py-12 text-sm text-gray-400">
                Loading services...
              </div>
            ) : (
              <ServiceTable
                services={services}
                onEdit={handleEditClick}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
