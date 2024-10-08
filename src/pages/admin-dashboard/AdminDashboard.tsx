import ServiceDataTable from "@/components/tables/ServiceDataTable";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <ServiceDataTable />
      </div>
    </div>
  );
}
