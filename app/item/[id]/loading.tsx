import MainLayout from "@/app/layouts/main";

export default function Loading() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center h-[500px]">
        <div className="w-16 h-16 border-t-2 border-b-2 border-gray-800 rounded-full animate-spin"></div>
      </div>
    </MainLayout>
  );
}
