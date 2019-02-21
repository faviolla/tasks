function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this);
    this.name = name;
    this.satelliteName = satelliteName;
    let PlanetGetName = this.getName;
    this.getName = function() {
        return PlanetGetName.call(this) + '. The sattalite is ' + this.satelliteName;
    }
}

var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’