import dynamic from "next/dynamic";

export default function DemoPage() {
  const DynamicBackgroundPaths = dynamic(() =>
    import("@/components/ui/background-paths").then((m) => m.BackgroundPaths)
  );
  return (
    <div className="w-full">
      <DynamicBackgroundPaths />
    </div>
  );
}
