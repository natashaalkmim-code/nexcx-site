// app/page.tsx
import CopilotCard from "@/components/CopilotCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F1E9] overflow-auto p-6 flex items-center justify-center">
      <CopilotCard />
    </main>
  );
}