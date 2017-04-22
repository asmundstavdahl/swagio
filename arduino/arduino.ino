
#define THE_END -1

/**
 * Digital pins to use as inputs
 */
int dPinsIn[] = {
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        THE_END
};

/**
 * Analog pins to report
 * @type {Number}
 */
int aPins[] = {
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        THE_END
};

void setup() {
        for(int i = 0; dPinsIn[i] != THE_END; i++) {
                pinMode(dPinsIn[i], INPUT);
        }
        Serial.begin(115200);
}

void loop() {
        String dataString = String("{ ");
        for(int i = 0; dPinsIn[i] != THE_END; i++) {
                int pin = dPinsIn[i];
                dataString = dataString
                             + "\"" + "D" + pin + "\": "
                             + digitalRead(pin) + ", ";
        }
        for(int i = 0; aPins[i] != THE_END; i++) {
                int pin = aPins[i];
                dataString = dataString
                             + "\"" + "A" + pin + "\": "
                             + String(analogRead(pin) / 1023.0) + ", ";
        }

        Serial.write(
                (dataString.substring(0, dataString.length() - 2)
                 + " }\n"
                )
                .c_str()
                );
        delay(10);
}
