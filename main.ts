input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let leeresHindernisY = 0
let ticks = 0
let bird: game.LedSprite = null
game.setScore(0)
let Index = 0
let Hindernisse: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Hindernisse.length > 0 && Hindernisse[0].get(LedSpriteProperty.X) == 0) {
        Hindernisse.removeAt(0).delete()
    }
    for (let Hindernis of Hindernisse) {
        Hindernis.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        leeresHindernisY = randint(0, 4)
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != leeresHindernisY) {
                Hindernisse.push(game.createSprite(4, Index))
            }
        }
    }
    for (let Hindernis of Hindernisse) {
        if (bird.get(LedSpriteProperty.X) == Hindernis.get(LedSpriteProperty.X) && bird.get(LedSpriteProperty.Y) == Hindernis.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
