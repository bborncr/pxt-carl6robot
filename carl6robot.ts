//% color=190 icon="\uf1b9" block="Carl6Robot"
namespace motors {

    export class Motor {
        spdPin: DigitalPin;
        dirPin: DigitalPin;
        speed: number;

        /**
         * Set the directional pin where the motor is connected, defaults to P0.
         */
        //% parts="motors"
        setDirPin(dirPin: DigitalPin): void {
            this.dirPin = dirPin;
            pins.digitalWritePin(this.dirPin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Set the speed pin where the motor is connected, defaults to P0.
         */
        //% parts="motors"
        setSpdPin(spdPin: DigitalPin): void {
            this.spdPin = spdPin;
            pins.digitalWritePin(this.spdPin, 0);
            // don't yield to avoid races on initialization
        }

        /**
         * Set the speed of the motor
         * @param speed is the speed of the motor
         */
        //% blockId="motor_forward" block="%motor|forward %speed"
        //% parts="motors"
        forward(speed: number): void {
            this.speed = speed;
        }

    }

    /**
     * Create a new Motor driver
     * @param spdPin is the speed pin
     * @param dirPin is the direction pin
     */
    //% blockId="motor_create" block="Create motor on speed pin %spdPin|and direction pin %dirPin"
    //% parts="motors"
    //% blockSetVariable=motor
    export function create(spdPin: DigitalPin, dirPin: DigitalPin): Motor {
        let motor = new Motor();
        motor.setDirPin(dirPin);
        motor.setSpdPin(spdPin);
        return motor;
    }
 
}
