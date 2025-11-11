import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import bike1 from "@/assets/bike-1.jpg";

const vehicles = [
  {
    id: 1,
    image: car1,
    title: "Sedan Premium",
    price: "€35.000",
    type: "Carro" as const,
    color: "Prateado",
  },
  {
    id: 2,
    image: bike1,
    title: "Moto Desportiva",
    price: "€15.000",
    type: "Moto" as const,
    color: "Preto",
  },
  {
    id: 3,
    image: car2,
    title: "SUV Luxo",
    price: "€45.000",
    type: "Carro" as const,
    color: "Branco",
  },
];

const Vehicles = () => {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [colorFilter, setColorFilter] = useState<string>("all");

  const filteredVehicles = vehicles.filter((vehicle) => {
    if (typeFilter !== "all" && vehicle.type !== typeFilter) return false;
    if (colorFilter !== "all" && vehicle.color !== colorFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">Veículos Disponíveis</h1>
            <p className="text-xl text-muted-foreground">
              Explore nossa seleção de carros e motos de alta qualidade
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Tipo de veículo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Carro">Carros</SelectItem>
                <SelectItem value="Moto">Motos</SelectItem>
              </SelectContent>
            </Select>

            <Select value={colorFilter} onValueChange={setColorFilter}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Cor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Preto">Preto</SelectItem>
                <SelectItem value="Prateado">Prateado</SelectItem>
                <SelectItem value="Branco">Branco</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => {
                setTypeFilter("all");
                setColorFilter("all");
              }}
            >
              Limpar Filtros
            </Button>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenhum veículo encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
