function nameExtract(name){

    let prenom = name.split(" ")[0];
    prenom = prenom.replace("-", " ")
    console.log(prenom)
    return prenom
}

export default nameExtract