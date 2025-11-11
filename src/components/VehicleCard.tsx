import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VehicleCardProps {
  image: string;
  title: string;
  price: string;
  type: "Carro" | "Moto";
  color: string;
}

const VehicleCard = ({ image, title, price, type, color }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {type}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-muted-foreground">Cor:</span>
          <span className="text-sm font-medium">{color}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{price}</span>
          <Button variant="default" size="sm">
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
