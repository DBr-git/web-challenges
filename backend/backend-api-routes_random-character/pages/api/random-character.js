import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const name = chance.name({ nationality: "en" });
  const age = chance.age();
  const favoriteAnimal = chance.animal();
  const ssn = chance.ssn();
  const ip = chance.ip();

  const randomCharacter = {
    name: name,
    age: age,
    favoriteAnimal: favoriteAnimal,
    ssn: ssn,
    ip: ip,
  };

  res.status(200).json(randomCharacter);
}
