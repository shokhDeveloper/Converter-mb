module.exports = {
    byte: (byte) => {
        if(byte == null || typeof byte !== "number") throw new Error("Entering a byte value is required !!");
        if(isNaN(byte)) throw new Error("Entering a byte value is required !!");
        if(byte < 0) throw new Error("A negative number cannot be entered !")
        let calculate = byte / (1024 * 1024);
        return +(calculate.toFixed(2))
    },
    kb: (kb) =>  {
        if(kb == null || typeof kb !== "number") throw new Error("Entering a kb value is required !!");
        if(isNaN(kb)) throw new Error("Entering a kb value is required !!");
        if(kb < 0) throw new Error("A negative number cannot be entered !")
        let calculate = kb / 1024;
        if(calculate < 1) return +(calculate.toFixed(1))
        else return +(calculate.toFixed(1))
    },
    gb: (gb) => {
        if(gb == null|| typeof gb !== "number") throw new Error("Entering a kb value is required !!");
        if(isNaN(gb)) throw new Error("Entering a gb value is required !!");
        if(gb < 0) throw new Error("A negative number cannot be entered !")
        let calculate = gb * 1024;
        return calculate
    },
    tb: (tb) => {
        if(tb == null|| typeof tb !== "number") throw new Error("Entering a tb value is required !!");
        if(isNaN(tb)) throw new Error("Entering a tb value is required !!");
        if(tb < 0) throw new Error("A negative number cannot be entered !")
        let calculate = tb * 2024 * 2024;
        return +(calculate.toFixed(1));
    },
    bits: (bits) => {
        if(bits == null || typeof bits !== "number") throw new Error("Entering a bits value is required !!");
        if(isNaN(bits)) throw new Error("Entering a bits value is required !!");
        if(bits < 0) throw new Error("A negative number cannot be entered !")
        let calculate = bits / (8 * 1024 * 1024)
        return +(calculate.toFixed(1))
    }
}
