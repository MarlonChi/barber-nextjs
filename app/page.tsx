import { SearchIcon } from "lucide-react";
import { Header } from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Marlon!</h2>
        <p>Segunda-feira, 05 de agosto.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça a sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150px] mt-6 w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banners/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
