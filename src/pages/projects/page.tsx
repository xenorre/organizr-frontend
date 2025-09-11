import { Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

function MainProjects() {
  return (
    <main className="container pt-8">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6 mt-8">
        <div>
          <h2 className="m-0 mb-1 text-2xl font-semibold text-[var(--text-primary)]">
            Project Dashboard
          </h2>
          <p className="m-0 text-[var(--text-secondary)]">
            Manage your tasks and track progress across all projects
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="gap-2 bg-[var(--bg-muted)] border border-[var(--border)] text-[var(--text-secondary)]"
          >
            <Filter size={16} />
            Filter
          </Button>
          <Button className="gap-2 bg-[var(--brand-500)] text-white border-none hover:bg-[var(--brand-600)]">
            <Plus size={16} />
            New Task
          </Button>
        </div>
      </div>

      <div className="board overflow-x-auto min-h-[400px]">
        <div className="flex items-center justify-center h-[400px] bg-[var(--bg-surface)] border-2 border-dashed border-[var(--border)] rounded-[var(--radius-lg)] text-[var(--text-secondary)] text-lg">
          Board components will be connected here
        </div>
      </div>
    </main>
  );
}

export default MainProjects;
