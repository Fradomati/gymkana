const listFailPhare = [
    "Fallaste... inténtalo de nuevo",
    "EEEEERROR!",
    "Esa respuesta es incorrecta... ",
    "Venga va, tómatelo en serio, no pongas chorradas",
    "Tú sabes que esa no es la respuesta",
    "Vergüenza me daría... anda, revísalo e inténtalo de nuevo",
    "Really?! Next",
    "Vaya fail, la respuesta no es correcta",
    "No tenemos todo el día, revisa bien lo que vas a responder",
]
export const randomPhrase = () => {
    const randomNumber = Math.floor(Math.random() * listFailPhare.length)
    return listFailPhare[randomNumber]
}