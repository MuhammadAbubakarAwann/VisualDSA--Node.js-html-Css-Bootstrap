let bus = {
    Name: null,
    Model: null,
    Color: null,
    DoorColor: null,
    
    wheels : {
        color: null,
        qty: null,
    },
    windows : {
        color: null,
        qty : null,
    }
     
}

bus.id = 1;

console.log("bus created with: ", bus)

export default bus;