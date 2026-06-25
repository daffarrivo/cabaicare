import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
}

export function StatisticCard({ title, value, icon, description }: StatisticCardProps) {
  return (
    <Card className="border-border bg-white shadow-card overflow-hidden rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between p-5 pb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
          {title}
        </span>
        <div className="rounded-xl border border-border bg-muted/50 p-2">{icon}</div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
