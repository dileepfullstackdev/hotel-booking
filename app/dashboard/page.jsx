import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="p-4">Welcome to Dashboard 🎉</div>
    </ProtectedRoute>
  );
}