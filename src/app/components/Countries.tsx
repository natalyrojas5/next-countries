import { getCountries } from "../actions/countries";
import { Country } from "./Country";

export const Countries = async () => {
  const countries = await getCountries();
  const thereAreCountries = countries?.length > 0;

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Países</h1>

      {thereAreCountries ? (
        <div className="grid grid-cols-4 gap-4">
          {countries?.map(({ name, population, flags }, index) => (
            <Country
              name={name?.common}
              population={population}
              flag={flags.png}
              flagAlt={flags?.alt ?? ""}
              nameOficial={name?.official}
              key={index}
            />
          ))}
        </div>
      ) : (
        <p>No se encontraron países</p>
      )}
    </>
  );
};
