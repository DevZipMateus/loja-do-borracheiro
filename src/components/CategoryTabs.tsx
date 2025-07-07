import { Button } from "@/components/ui/button";
import { Settings, Wrench, Zap, Circle } from "lucide-react";

const categories = [
  {
    name: "CÂMARA DE AR FVA",
    icon: Circle,
    active: true
  },
  {
    name: "ACESSÓRIOS DE RODA", 
    icon: Settings,
    active: false
  },
  {
    name: "PNEUS",
    icon: Circle,
    active: false
  },
  {
    name: "VÁLVULAS",
    icon: Zap,
    active: false
  }
];

const CategoryTabs = () => {
  return (
    <section className="bg-white shadow-sm border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.name}
                variant="ghost"
                className={`
                  h-auto py-6 px-4 rounded-none flex items-center gap-3 justify-start
                  ${category.active ? 'bg-primary/5 border-b-2 border-primary text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}
                  ${index !== categories.length - 1 ? 'border-r border-border' : ''}
                `}
              >
                <div className={`
                  p-2 rounded-full 
                  ${category.active ? 'bg-primary/10' : 'bg-muted'}
                `}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-sm lg:text-base">
                  {category.name}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;