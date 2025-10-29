abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    )
    {}
    abstract getSepia(): void
    getReelTime(): number{
        // some complex calculation
        return 8
    }
}
// we can't create instance from an abstract class but rather we can extend it and then useit.


class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
        
    }
}

const fk = new Instagram("test", "Test", 8)
fk.getReelTime()