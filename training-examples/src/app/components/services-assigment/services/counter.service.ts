export class CounterService {
    activationCounter: number = 0;
    inactivationCounter: number = 0;

    addActivation() {
        this.activationCounter += 1;
        console.log("Activation actions: " +this.activationCounter);
    }

    addInactivation() {
        this.inactivationCounter += 1;
        console.log("Inactivation actions: " + this.inactivationCounter);
    }
}