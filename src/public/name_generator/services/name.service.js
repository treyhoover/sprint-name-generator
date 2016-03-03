import _ from 'lodash';

let people = {
  a: ['Aaliya', 'Abby', 'Adam', 'Adel', 'Adrienne', 'Alana', 'Alex', 'Alexa', 'Alexandra', 'Alice', 'Alicia', 'Amal', 'Amanda', 'Amber', 'Andre', 'Andrea', 'Andrew', 'Andy', 'Angel', 'Angelina', 'Angella', 'Angie', 'Anna', 'Anne', 'Annie', 'Anthony', 'Apollo', 'April', 'Ariana', 'Armie', 'Ashlee', 'Ashley', 'Ashton', 'Aubrey', 'Audrina', 'Ava', 'Aviva', 'Avril'],
  b: ['Barack', 'Barbara', 'Bashorun', 'Be', 'Ben', 'Benedict', 'Benji', 'Benzi', 'Bethenny', 'Beyon', 'Big', 'Bill', 'Blac', 'Blake', 'Bo', 'Bobbi', 'Bobby', 'Brad', 'Bradley', 'Brandi', 'Brandon', 'Brendan', 'Brian', 'Brie', 'Brielle', 'Bristol', 'Britney', 'Brittany', 'Brody', 'Brooke'],
  c: ['Caitlyn', 'Caleb', 'Calvin', 'Cam', 'Cameron', 'Cara', 'Carl', 'Carley', 'Carlton', 'Carole', 'Casper', 'Catelynn', 'Chantelle', 'Charice', 'Charli', 'Charlie', 'Charlize', 'Chelsea', 'Cheryl', 'Chris', 'Christina', 'Cia', 'Cicely', 'Claudia', 'Co', 'Cole', 'Corey', 'Courtney', 'Cristianna', 'Cynthia'],
  d: ['Dakota', 'Danielle', 'David', 'DawnCheré', 'Dax', 'Dean', 'Debra', 'Deena', 'Demi', 'Dhar', 'Diana', 'Dick', 'Dominic', 'Donald', 'Dorothy', 'Dr', 'Dra', 'Draya', 'Drew'],
  e: ['Earvin', 'Eddie', 'EJ', 'Elizabeth', 'Ellen', 'Elliott', 'Emma', 'Eric', 'Erica', 'Eva', 'Evan', 'Evelyn'],
  f: ['Farrah', 'Fern', 'FKA', 'Florina', 'Frances', 'Frankie', 'Freddie', 'Futu'],
  g: ['Gary', 'Gavin', 'Geneva', 'George', 'Gia', 'Gise', 'Giuliana', 'Gordon', 'Grace', 'Graham', 'Gwen', 'Gwyneth'],
  h: ['Hailey', 'Halle', 'Hank', 'Harry', 'Hayden', 'Heather', 'Hefe', 'Heidi', 'Hilary', 'Hulk'],
  i: ['Ian', 'Ice', 'Iggy', 'Ireland', 'Isaac'],
  j: ['Jack', 'Jackie', 'Jacqueline', 'Jada', 'Jaden', 'Jake', 'Jameelah', 'James', 'Jamie', 'Jason', 'Javi', 'Jay', 'Jea', 'Jeff', 'Jenelle', 'Jenna', 'Jennette', 'Jenni', 'Jennifer', 'Jenny', 'Jeremy', 'Jessica', 'Jessie', 'Jill', 'Jim', 'Jimmy', 'Jionni', 'Jo', 'Joan', 'Joe', 'Joel', 'John', 'Johnny', 'Jon', 'Jonathan', 'Jonny', 'Jordan', 'Joseline', 'Joseph', 'Josh', 'Josie', 'Joyce', 'Juan', 'June', 'Justin'],
  k: ['Kai', 'Kail', 'Kaitlynn', 'Kaley', 'Kandi', 'Kanye', 'Karina', 'Karrueche', 'Kasey', 'Kate', 'Kathy', 'Katie', 'Katy', 'Keaton', 'Kelley', 'Kelly', 'Kendall', 'Kendra', 'Kenya', 'Keshia', 'Khloe', 'Kiefer', 'Kim', 'Kimberly', 'Kit', 'Kordell', 'Kourtney', 'Kris', 'Kristen', 'Kristin', 'Kristina', 'Kylie'],
  l: ['LA', 'Lady', 'Lamar', 'Lana', 'Lara', 'Laura', 'Lauren', 'Lauryn', 'Laverne', 'Leah', 'LeAnn', 'Leonardo', 'Liam', 'Lilit', 'Lilly', 'Lindsay', 'Linsey', 'Lionel', 'Lisa', 'Lor', 'Louis', 'LuAnn', 'Lupita', 'Lydia', 'Lynne'],
  m: ['Maariyah', 'Maci', 'Mackenzie', 'Macklemo', 'Maddie', 'Madon', 'Maksim', 'Mandy', 'Marc', 'Margot', 'Mariah', 'Mario', 'Mark', 'Marlo', 'Mary', 'Mathew', 'Matt', 'Matthew', 'Max', 'Mayim', 'McKayla', 'Megan', 'Melanie', 'Melissa', 'Mendeecees', 'Meredith', 'Mia', 'Michael', 'Michelle', 'MIchelle', 'Mike', 'Mila', 'Miley', 'Mimi', 'Mindy', 'Miranda', 'Moises', 'Monica', 'Morgan'],
  n: ['Natalia', 'Nathan', 'Naya', 'NeNe', 'Nev', 'Niall', 'Nicholas', 'Nick', 'Nicki', 'Nicole', 'Nikki', 'Nina'],
  o: ['Olivia', 'Olivier', 'Opr', 'Orlando', 'Owen', 'Ozzy'],
  p: ['Paris', 'Pastor', 'Patti', 'Paul', 'Paula', 'Peaches', 'Perrie', 'Peter', 'Phaedra', 'Pharre', 'Porsha', 'Prince'],
  q: [],
  r: ['Rachel', 'Ramona', 'Raquel', 'Reese', 'Reggie', 'Rihan', 'Riley', 'Rita', 'Rob', 'Robbie', 'Robert', 'Robin', 'Ronda', 'Ronnie', 'Rose', 'Rosie', 'Roxie', 'Roxy', 'Russell', 'Ryan'],
  s: ['Sam', 'Sammi', 'Sarah', 'Scott', 'Sean', 'Selena', 'Selma', 'Seth', 'Shad', 'Shalana', 'Sharon', 'Sheree', 'Sherri', 'Shia', 'Shonda', 'Sienna', 'Simon', 'Snoo', 'Sofia', 'Sofie', 'Solan', 'Sonja', 'Sophie', 'Spencer', 'Stephanie', 'Stephen', 'Stevie', 'Sundy'],
  t: ['Tallulah', 'Tameka', 'Tami', 'Tammy', 'Tamra', 'Tanisha', 'Tara', 'Tasha', 'Taylor', 'Teresa', 'Terry', 'Theodore', 'Thomas', 'Tia', 'Tina', 'Todd', 'Tom', 'Tonye', 'Tori', 'Travis', 'Tricia', 'Ty', 'Tyler'],
  u: ['Ush'],
  v: ['Vanessa', 'Vee', 'Victoria'],
  w: ['Waka', 'Wendy', 'Wentworth', 'Wesley', 'Will', 'Willow', 'Willy', 'Wiz', 'Wladimir'],
  x: [],
  y: [],
  z: ['Zac', 'Zayn', 'Ze', 'Zenda']
};

let cars = {
  a: ['Accent', 'Acclaim', 'Accord', 'Achieva', 'Aerio', 'Aerostar', 'Alero', 'Allante', 'Alliance', 'Altima', 'Amigo', 'Amsia Motors Americas', 'Aries', 'Arnage', 'Arrow', 'Ascender', 'Aspen', 'Aspire', 'Astro', 'Aurora', 'Avalanche', 'Avenger', 'Aviator', 'Axiom', 'Axxess', 'Aztek', 'Azure'],
  b: ['Baja', 'Barchetta', 'Beetle', 'Beretta', 'Blackwood', 'Blazer', 'BMW', 'Bonneville', 'Boxter', 'Brat', 'Brava', 'Bravada', 'Breeze', 'Bronco', 'Brooklands', 'Brougham', 'Buick', 'BXR'],
  c: ['Caballero', 'Cabrio', 'Cabriolet', 'Cadillac', 'Calais', 'Callaway', 'Camargue', 'Camry', 'Capri', 'Caprice', 'Caravan', 'Caravelle', 'Catera', 'Cavalier', 'Cayenne', 'Celebrity', 'Celica', 'Century', 'Challenger', 'Champ', 'Charade', 'Charger', 'Cherokee', 'Chevelle', 'Chevette', 'Chevrolet', 'Cheyenne', 'Chrysler', 'Ciera', 'Cimarron', 'Cirrus', 'Citation', 'Civic', 'Club Wagon', 'Colorado', 'Colt', 'Comanche', 'Concord', 'Concorde', 'Conquest', 'Continental', 'Contour', 'Cooper', 'Cordia', 'Cordoba', 'Corniche', 'Corolla', 'Corrado', 'Corsica', 'Corvette', 'Cougar', 'Countach', 'Courier', 'Cressida', 'Crown Victoria', 'Cutlass'],
  d: ['Dakota', 'Dart', 'Dasher', 'Daytona', 'Defender', 'del Sol', 'Detroit Electric', 'DeVille', 'Diablo', 'Diamante', 'Dino', 'Diplomat', 'Discovery', 'Dodge', 'Durango', 'Duster', 'Dynasty'],
  e: ['E-Z-GO', 'Eagle', 'Echo', 'Eclipse', 'Econoline', 'Eight', 'Eighty-Eight', 'Elantra', 'ElCamino', 'Eldorado', 'Electra', 'Element', 'Encore', 'Envoy', 'Equinox', 'Escalade', 'Escape', 'Escort', 'Esperante', 'Esprit', 'Estate', 'Esteem', 'Eurovan', 'Excel', 'Excursion', 'Expedition', 'Explorer', 'Expo', 'Express'],
  f: ['4Runner', 'Fairmont', 'Falcon', 'Festiva', 'Fiero', 'Fifth Avenue', 'Firebird', 'Firenza', 'Fisker', 'Fleetwood', 'Focus', 'Ford', 'Forester', 'Fox', 'Freelander', 'Freightliner', 'Frontier', 'Fuego'],
  g: ['Galant', 'GEM', 'GMC', 'Golf', 'Graduate', 'Gran Fury', 'Grand Am', 'Grand Prix', 'Grand Voyager', 'Gremlin', 'Grenada'],
  h: ['Hennessey', 'Highlander', 'Hombre', 'Horizon', 'Hornet', 'Hummer'],
  i: ['Iconic', 'Impala', 'Imperial', 'Impreza', 'Impulse', 'Insight', 'Integra', 'International Harvester', 'Intrepid', 'Intrigue'],
  j: ['Javelin', 'Jeep', 'Jetta', 'Jimmy', 'Justy'],
  k: ['Kenworth', 'Kodiak'],
  l: ['Lagonda', 'Lancer', 'Land Cruiser', 'Lanos', 'Laser', 'LeBaron', 'Legacy', 'Leganza', 'Legend', 'LeMans', 'LeSabre', 'Liberte', 'Liberty', 'Lincoln',
    'Loyale', 'Lucra', 'Lumina', 'Luv', 'Lynx'],
  m: ['Malibu', 'Mangusta', 'Marquis', 'Matador', 'Matrix', 'Maxima', 'Medallion', 'Metro', 'Miata', 'Midget', 'Milano', 'Millenia', 'Mirada', 'Mirage', 'Modena', 'Monaco', 'Mondial', 'Montana', 'Monte Carlo', 'Montero', 'Mountaineer', 'Mulsanne', 'Murano', 'Murcielago', 'Mustang', 'Mystique'],
  n: ['Navajo', 'Navigator', 'Navistar', 'Neon', 'New Yorker', 'Newport', 'Ninety-Eight', 'Nova', 'Nubira'],
  o: ['Oasis', 'Odyssey', 'Omega', 'Omni', 'Optima', 'Oshkosh', 'Outback', 'Outlander'],
  p: ['Pacer', 'Pacifica', 'Panoz', 'Parisienne', 'Park Avenue', 'Park Ward', 'Paseo', 'Passat', 'Passport', 'Pathfinder', 'Peterbilt', 'Phaeton', 'Phantom', 'Phoenix', 'Pilot', 'Pininfarina', 'Polaris', 'Precis', 'Prelude', 'Premier', 'Previa', 'Prizm', 'Probe', 'Protégé', 'Prowler', 'Pruis', 'PT Cruiser', 'Pulsar'],
  q: ['Quadrifoglio', 'Quantum', 'Quattro', 'Quest'],
  r: ['Rabbit', 'Raider', 'Rally', 'Ram', 'Ramcharger', 'Rampage', 'Range Rover', 'Ranger', 'Reatta', 'Rebel', 'Regal', 'Regency', 'Reliant', 'Rendezvous', 'Rio', 'Riviera', 'Roadmaster', 'Roadster', 'Rocky', 'Rodeo', 'Rossion'],
  s: ['Sable', 'Safari', 'Saleen', 'Samuri', 'Santa Fe', 'Sapporo', 'Savana', 'Scamp', 'Scirocco', 'Scorpio', 'Scrambler', 'Sebring', 'Sedona', 'Sentra', 'Sephia', 'Sequoia', 'Seville', 'Shadow', 'Sidekick', 'Sienna', 'Sierra', 'Sigma', 'Silhouette', 'Silver Dawn', 'Silver Seraph', 'Silver Shadow', 'Silver Spirit', 'Silver Spur', 'Silver Wraith', 'Silverado', 'Skyhawk', 'Skylark', 'Solara', 'Somerset', 'Sonata', 'Sonoma', 'Sorento', 'Spectra', 'Spectrum', 'Spider', 'Spirit', 'Sportage', 'Sportvan', 'Sprint', 'Spyder', 'SSC', 'St. Regis', 'Stanza', 'Starion', 'Starlet', 'Stealth', 'Storm', 'Strada', 'Stratus', 'Stylus', 'Suburban', 'Summit', 'Sunbird', 'Sundance', 'Sunfire', 'Supra', 'Swift'],
  t: ['Tacoma', 'Tahoe', 'Talon', 'Taurus', 'Tempo', 'Tercel', 'Tesla', 'Testarossa', 'Thunderbird', 'Tiburon', 'Titan', 'Topaz', 'Toronado', 'Touareg', 'Town & Country', 'Town Car', 'tracker', 'TrailBlazer', 'Trans Sport', 'Tredia', 'Tribute', 'Trooper', 'Tundra', 'Turbo', 'Turismo'],
  u: [],
  v: ['Vanagon', 'Vandura', 'Vanquish', 'Vantage', 'VehiCROSS', 'Venture', 'Vibe', 'Vigor', 'Villager', 'Viper', 'Virage', 'Vision', 'Vitara', 'Volkswagen', 'Voyager'],
  w: ['Wagoneer', 'Windstar', 'Wrangler'],
  x: ['Xterra'],
  y: ['Yukon'],
  z: ['Zephyr']
};

export default function (module) {
  module.service('NameService', function () {
    this.randomLetter = function () {
      return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    };

    this.randomPerson = function (letter) {
      letter = letter && people[letter] ? letter : this.randomLetter();
      return _.sample(people[letter]);
    };

    this.randomCar = function (letter) {
      letter = letter && cars[letter] ? letter : this.randomLetter();
      return _.sample(cars[letter]);
    };
  });
}