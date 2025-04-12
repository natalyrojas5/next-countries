import Image from "next/image";
import { CountryProps } from "../interfaces/components/Country";

export const Country = (props: CountryProps) => {
  const { name, population, flag, nameOficial, flagAlt } = props;

  return (
    <aside className="p-8 rounded-2xl bg-white text-black">
      <Image
        src={flag}
        alt={flagAlt}
        width={220}
        height={220}
        className="w-[15rem] h-[10rem] mx-auto rounded-xl"
      />
      <h1 className="text-2xl mt-4">
        <b>País: </b>
        {name}
      </h1>

      {nameOficial && (
        <p className="text-xl">
          <b>Nombre Oficial: </b>
          {nameOficial}
        </p>
      )}

      <p className="text-xl">
        <b>Población: </b>
        {population}
      </p>
    </aside>
  );
};
