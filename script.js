
let catStatus = {
    food: 100,
    sleep: 100,
    water: 100,
    game: 100,
    toilet: 100,
    clean: 100,
}

let catSleep = false
let catGame = false
let catToilet = false
let catClean = false
let catInCleanRoom = false

$ ('.status-progress').eq(0).attr('value', catStatus.food)
$ ('.status-progress').eq(1).attr('value', catStatus.sleep)
$ ('.status-progress').eq(2).attr('value', catStatus.water)
$ ('.status-progress').eq(3).attr('value', catStatus.game)
$ ('.status-progress').eq(4).attr('value', catStatus.toilet)
$ ('.status-progress').eq(5).attr('value', catStatus.clean)

let money = localStorage.getItem('money') || 100

$ ('.money').text(money)


setInterval(
    function () {

        catStatus.food -= 2
        if (catSleep == false) {
            catStatus.sleep -= 2
        }
        catStatus.water -= 1.5
        if (catGame == false) {
            catStatus.game -= 1
        }

        if (catToilet == false) {
            catStatus.toilet -= 4
        }

        if (catClean == false) {
            catStatus.clean -= 4
        }
        

        if (catClean == false) {

            if (catStatus.clean <70) {
                $ ('.brood1').css('opacity','40%')
            }  

            if (catStatus.clean <60) {
                $ ('.brood2').css('opacity','40%')
            }  

            if (catStatus.clean <40) {
                $ ('.brood3').css('opacity','40%')
            }  
            if (catStatus.clean <30) {
                $ ('.brood4').css('opacity','40%')
            }  
            if (catStatus.clean <20) {
                $ ('.brood5').css('opacity','40%')
            }  
            if (catStatus.clean <10) {
                $ ('.brood6').css('opacity','40%')
            }  
        }


        if (catStatus.food < 50) {
            $ ('.dream').css('transform', 'scale(100%)')
            $ ('.dream').css('left', '900px')
            $ ('.dream').css('top', '150px')
            // alert ('i am Hungry')
        }


        $ ('.status-progress').eq(0).attr('value', catStatus.food)
        $ ('.status-progress').eq(1).attr('value', catStatus.sleep)
        $ ('.status-progress').eq(2).attr('value', catStatus.water)
        $ ('.status-progress').eq(3).attr('value', catStatus.game)
        $ ('.status-progress').eq(4).attr('value', catStatus.toilet)
        $ ('.status-progress').eq(5).attr('value', catStatus.clean)

    },
    3000
)


$ ('.buy').click(function () {
    alert (10)
})


$ ('.apple').click(function () {
    buy('apple', 5)
})


$ ('.burger1').click(function () {
    buy('burger', 10)
})

$ ('.water1').click(function () {
    buy('water', 10)
})

$ ('.coca-cola').click(function () {
    buy('coca-cola', 15)
})


$ ('.morkov').click(function () {
    buy('morkov', 10)
})



function buy(product, price) {
    let status = catStatus.food

     if (['burger', 'apple','morkov'].includes(product) ) {
        status = catStatus.food
     }


     if (['water', 'coca-cola'].includes(product) ) {
        status = catStatus.water
     }

   




    if (status >= 100 ) {
        return
    }
    let money = $ ('.money').text()
    if (money-price >= 0) {
        let newImg;
        if (product == 'apple') {
            newImg = $ (' <img class="shop-item apple" src="apple.webp" alt="" />')
            $('body').append(newImg)
            catStatus.food += 40
        }
       else if (product == 'burger') {
            newImg = $ (' <img class="shop-item burger1" src="burger1.png" alt="">')
            $('body').append(newImg)
            catStatus.food += 20
        }


        else if (product == 'morkov') {
            newImg = $ (' <img class="shop-item morkov" src="morkov.png" alt="">')
            $('body').append(newImg)
            catStatus.food += 20
        }


        else if (product == 'water') {
            newImg = $ (' <img class="shop-item water1" src="water.webp" alt="">')
            $('body').append(newImg)
            catStatus.water += 20
        }

        else if (product == 'coca-cola') {
            newImg = $ (' <img class="shop-item water1" src="koka-kola-033-l.-47739246072713.png" alt="">')
            $('body').append(newImg)
            catStatus.water += 20
        }

        let leftApple = parseInt( $ (newImg).css('left'))-270 //*
        let topApple = parseFloat( $ (newImg).css('top'))

        let leftCat = parseInt( $ ('.cat-block').css('left'))
        let topCat = parseFloat( $ ('.cat-block').css('top'))+70

        let pxL = (leftCat - leftApple) / 100
        let pxT = (topCat - topApple) / 100



       let int = setInterval ( 
        function () {
            
            let leftApple = parseInt( $ (newImg).css('left'))
            let topApple = parseFloat( $ (newImg).css('top'))

            $ (newImg).css('left', leftApple+pxL)
            $ (newImg).css('top', topApple+pxT)
            if (leftApple >= leftCat+170) {
                $ (newImg).css('display', 'none')
                clearInterval(int)
            }
        },
            1)
        $ ('.money').text(money-price)
       
        $ ('.status-progress').eq(0).attr('value', catStatus.food)

    }
}

setInterval (
    function () {
        $ ('.present').css('opacity',"1")
        $ ('.present').css('filter','drop-shadow(yellow 6px 4px 6px)')

    },5000

)



$ ('.present').click(function () {
    let opacity =$ ('.present').css('opacity')
    if (opacity == 0.2) {
        return
    }
    $ ('.present').css('opacity',"0.2")
    let money = +$ ('.money').text()
    let finishMoney = money + 10
    let int = setInterval(
        function () {
            let money = +$ ('.money').text()
            money +=1

            $ ('.money').text(money)
            if (money == finishMoney) {
                clearInterval(int)
            }
        }, 
        100    )
    // $ ('.money').text(money)
    localStorage.setItem('money',money)
})

let intSleep

$ ('.pillow').click(function () {
    
    if ($ ('.cat').hasClass('cat-sleep')) {

        $ ('.cat').removeClass('cat-sleep')
        catSleep = false
        clearInterval(intSleep)
    }
    else {
        $ ('.cat').addClass('cat-sleep')
        catSleep = true
        
        intSleep = setInterval (function () {
            catStatus.sleep += 1
            $ ('.status-progress').eq(1).attr('value', catStatus.sleep)
        }, 1000)







    }
})
 $ ('.catToy').click(function () {
    //     left: 110px;
    // top: 522px;
    // $ ('.catToy').css('left',"600px")
    // $ ('.catToy').css('top','220px')
    $ ('.catToy').addClass('catToyActive')


    $ ('.catToy').css('animation','3s fish infinite')
    $ ('.line').css('display','block')
    catGame = true

    let intGame = setInterval (function () {
        catStatus.game += 1
            $ ('.status-progress').eq(3).attr('value', catStatus.game)
    }, 1000)



    setInterval (function () {
    
    //     $ ('.catToy').css('left',"400px")
    // $ ('.catToy').css('top','422px')

    $ ('.catToy').removeClass('catToyActive')


    $ ('.line').css('display','none')
    $ ('.catToy').css('animation','')
    clearInterval(intGame)
    catGame = false

    }, 7000)

})


$ ('.toilet-btn').click(function () {
    catToilet = true
    $ ('.cat-block').addClass('cat-toilet')

    $ ('.toilet-btn').css('display',"none")

    let intToilet = setInterval (function () {
        catStatus.toilet += 1
        $ ('.status-progress').eq(4).attr('value', catStatus.toilet)
    }, 1000)


    setTimeout (function () {

        $ ('.zvuk-unitaza')[0].play()


        setTimeout (function () {
            $ ('.zvuk-unitaza')[0].pause()
            $ ('.cat-block').removeClass('cat-toilet')
            $ ('.toilet-btn').css('display',"inline-block")
            clearInterval(intToilet)
    catToilet = false

        },5000)


    },2000)


})


$ ('.clean-btn').click(function () {
    if (catInCleanRoom == true) {
        catInCleanRoom = false
        $ ('body').removeClass('clean-room')
    } else {
        catInCleanRoom = true
        $ ('body').addClass('clean-room')
        $ ('.btn-clean').addClass('active')
    }
})

$ ('.btn-clean').click (function () {
    $ ('.btn-clean').removeClass('active')

    $ ('.clean-btn').attr('disabled', true)
    // $ ('.cat-block').css('top','87px')
    // $ ('.cat-block').css('left','230px')
    // $ ('.cat-block').css('height','300px')

    $ ('.cat-block').addClass('catClean')

    $ ('.cat').attr('src', 'cat-half2.png')
    $ ('.cat').css('position', 'absolute')
    $ ('.cat').css('left', '-70px')
    $ ('.cat').css('height', '460px')
    $ ('.cat').css('top', '0px')


    $ ('.brood').css('transition', '5s')
    setTimeout ( function () {
        $ ('.brood').css('opacity', '0')
    }, 1000)

    setTimeout (function () {
        $ ('.cat-block').removeClass('catClean')

        $ ('.clean-btn').attr('disabled', false)
    
        $ ('.cat').attr('src', 'pngtree-adorable-golden-cat-clipart-standing-illustration-png-image_14489824.png')
        $ ('.cat').css('position', 'relative')
        $ ('.cat').css('left', 'auto')
        $ ('.cat').css('height', '500px')
        $ ('.cat').css('top', 'auto')
    },6000)
    


    catClean = true

    let intClean = setInterval (function () {
        catStatus.clean += 3
            $ ('.status-progress').eq(5).attr('value', catStatus.clean)
    }, 1000)


})


$ ('.money').click(function () {
    let answer = confirm ('ви точно хочете почати спочатку?')
    if (answer == true) {
        localStorage.clear()
        location.reload()
    }
})

