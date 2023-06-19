const heroes = [
  // { name: "Dynaguy", powers: ["fly", "disintegration ray"] },
  // { name: "Apogee", powers: ["fly", "gravity control"] },
  // {
  //   name: "Blazestone",
  //   powers: ["control of fire", "pyrotechnic dischargers"],
  // },
  // { name: "Frozone", powers: ["freeze water"] },
  // { name: "Mr. Incridible", powers: ["phyisical strength"] },
  { name: "Elastigirl", powers: ["phyisical strength"] },
  { name: "Violet ", powers: ["invisibility", "force fields"] },
  { name: "Dash", powers: ["speed"] },
  { name: "Jack", powers: ["shapeshifting", "fly"] },
];

function showBudi(kondisi: boolean) {
  if (kondisi) {
    console.log("Budi");
  } else {
    console.log("Bukan Budi");
  }
}

function getFlyingSuperHeroes() {
  return heroes.filter((hero) => {
    return hero.powers.includes("fly");
  });
}

export { getFlyingSuperHeroes };
