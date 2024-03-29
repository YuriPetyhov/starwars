class SwapiService {
<<<<<<< HEAD
    _urlBase = `https://swapi.co/api/`;
    _imgBase = `https://starwars-visualguide.com/assets/img/`

=======
    _urlBase = `https://swapi.co/api/`
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
    async getResource(url) {
        const body = await fetch(`${this._urlBase}${url}`);
        if(!body.ok) {
           console.log(`Cant take data from ${url} error --> ${body.status}`)
        }
        return  await body.json();
    }
    async getAllPeople() {
        const res = await this.getResource('people/');
        return res.results
    }

    getPeople(id) {
        if(id == 0) {
            return this.getResource(`people/${10}`)
        } else {
            return this.getResource(`people/${id}`)
        }
    }

    getaAllPlanet = async() =>  {
        const res = await this.getResource('planets/');
        return res.results.map(item => this._transformDataPlanet(item))
    }

     getPlanet = async(id) => {
        const res = await this.getResource(`planets/${id}`);
        return this._transformDataPlanet(res);
    }

    async getAllStarships(){
        const res = await this.getResource('starships/');
        return res.results.map(item => this._transformDataStarhips(item))
    }

    getStarship(id) {
        return this.getResource(`starships/${id}`)
    }

    _getid(item) {
       if(!item.url) {
           return -1;
       } else {
           const regExpId = /(\d+)(?!.*\d)/;
           const id = item.url.match(regExpId)[1];
           return id;
       }

    }

<<<<<<< HEAD
    getPersonImg = (id) => {
        return `${this._imgBase}characters/${id}.jpg`
    };

    getPlanetImg = (id) => {
        return `${this._imgBase}planets/${id}.jpg`
    };

    getStarShipImg = (id) => {
        return `${this._imgBase}starships/${id}.jpg`
    };

=======
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
    _transformDataPeople = (people) => {
        return {
            id: this._getid(people),
            name: people.name,
            population: people.population,
            rotationPeriod: people.rotation_period,
            diameter: people.diameter
        }
    };

    _transformDataPlanet = (planet) => {
        return {
            id: this._getid(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformDataStarhips = (starship) => {
        return {
            id: this._getid(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            url: starship.url
        }
    }
}

const newSwapiService = new SwapiService(); 
export default newSwapiService;