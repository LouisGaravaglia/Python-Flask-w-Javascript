function snakeToCamel(arg) {

split = arg.split(/_/g)

for (let i = 1; i < split.length; i++) {

secondHalf = split[i].substring(1)

    if (secondHalf == secondHalf.toUpperCase()) {
        split[i] = split[i].substring(0,1).toUpperCase() + secondHalf
    } else {
        split[i] = split[i].substring(0,1).toUpperCase() + split[i].substring(1).toLowerCase()
    }

}

camel = split.join("")

return camel;
}






