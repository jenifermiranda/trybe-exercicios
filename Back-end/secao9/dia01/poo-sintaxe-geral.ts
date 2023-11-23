class TV {
    private _brand: string;
    private _size: number;
    private _resolution: number;
    private _connections: string[];
    private _connectedTo?: string;
    
    constructor(b: string, s: number, resol: number, connections: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = resol;
    this._connections = connections;
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }

    set connectedTo(value: string | undefined) {
        if (!value || this._connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        } else {
            console.log('Sorry, connection unavailable!');
        }
    }



    turnOn() {
        console.log(
            `TV ${this.brand}, ${this.size} polegadas, resolution ${this.resolution}, with ${this.connections} connection`
        );
    }
}

const tv1 = new TV('Samsung', 43, 1820, ['HDMI', 'VGA']);

tv1.connectedTo = 'HDMI';
console.log(tv1.connectedTo);

tv1.turnOn();

