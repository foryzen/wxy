var sound
var cnt = 0

document.addEventListener('keypress',keypress)

function keypress(x){
    if(x.charCode==32&&cnt==0){
        cnt++
        start()
    }
}

function start(){

    var a = '\
    <div id="main">\
    <h1 id="time">0:00</h1>\
    <h1 id="txt">前奏...</h1>\
    <h1 id="melody"> </h1>\
    <h1 id="dot"> </h1>\
    <h1 id="chord"> </h1>\
    <h1 id="dot2"> </h1>\
    </div>'

    sc5('site').innerHTML = a
    
    time()

    sound = new Audio('WXY.mp3')
    sound.volume = 0.15
    sound.play()

    var ad1 = -150
    var ad2 = -250
    var ad3 = -150+2140
    var ad4 = -200+42720
    var ad5 = 82840
    var ad6 = 57700
    var ad7 = 140700-200
    var ad8 = 521300
    //ad = audio delay

    melody_(ad1)
    melody_(ad5+ad1)
    melody_(259000-2140)

    setTimeout(sc4,ad4+0,'F#')
    setTimeout(sc4,ad4+600,'F#')
    setTimeout(sc4,ad4+600+1100,'D')
    setTimeout(sc4,ad4+600*2+1100,'D')
    setTimeout(sc4,ad4+600*2+1100*2,'E')
    setTimeout(sc4,ad4+600*3+1100*2,'E')
    setTimeout(sc4,ad4+600*3+1100*3,'A')
    setTimeout(sc4,ad4+600*3+1100*3+830,'G#')

    setTimeout(sc4,ad4+600*3+1100*3+830*2,'F#')
    setTimeout(sc4,ad4+600*4+1100*3+830*2,'F#')
    setTimeout(sc4,ad4+600*4+1100*4+830*2,'D')
    setTimeout(sc4,ad4+600*5+1100*4+830*2,'D')
    setTimeout(sc4,ad4+600*5+1100*5+830*2,'E')
    setTimeout(sc4,ad4+600*6+1100*5+830*2,'E')
    setTimeout(sc4,ad4+600*6+1100*6+830*2,'A')
    setTimeout(sc4,ad4+600*6+1100*6+830*3,'G#')



    setTimeout(sc4,ad3+0,'F#')
    setTimeout(sc4,ad3+1700,'D')
    setTimeout(sc4,ad3+1700*2,'E')
    setTimeout(sc4,ad3+1700*3,'A')
    setTimeout(sc4,ad3+1700*3+850,'G#')

    setTimeout(sc4,ad3+1700*3+850*2,'F#')
    setTimeout(sc4,ad3+1700*4+850*2,'D')
    setTimeout(sc4,ad3+1700*5+850*2,'E')
    setTimeout(sc4,ad3+1700*6+850*2,'A')
    setTimeout(sc4,ad3+1700*6+850*3,'G#')

    setTimeout(sc4,ad3+1700*6+850*3,'F#')

    setTimeout(()=>{sc5('chord').animate({'opacity':[1,0]},{'duration':800,'fill':'forwards'})},16420)
    setTimeout(()=>{sc5('chord').animate({'opacity':[0,1]},{'fill':'forwards'})},42520)
    setTimeout(()=>{sc5('chord').animate({'opacity':[1,0]},{'duration':800,'fill':'forwards'})},56310)
    setTimeout(()=>{sc5('chord').animate({'opacity':[0,1]},{'fill':'forwards'})},57700)
    setTimeout(()=>{sc5('chord').animate({'opacity':[1,0]},{'duration':800,'fill':'forwards'})},168700)
    
    setTimeout(sc4,ad6+0,'F#')

    setTimeout(sc4,ad6+1700,'D')
    setTimeout(sc4,ad6+1700*2,'E')
    setTimeout(sc4,ad6+1700*3,'A')
    setTimeout(sc4,ad6+1700*3+850,'G#')
    setTimeout(sc4,ad6+1700*3+850*2,'F#')
    
    setTimeout(sc4,ad6+1700*4+850*2,'D')
    setTimeout(sc4,ad6+1700*5+850*2,'E')
    setTimeout(sc4,ad6+1700*6+850*2,'A')
    setTimeout(sc4,ad6+1700*6+850*3,'G#')
    setTimeout(sc4,ad6+1700*6+850*4,'F#')

    setTimeout(sc4,ad6+1700*7+850*4,'D')
    setTimeout(sc4,ad6+1700*8+850*4,'E')
    setTimeout(sc4,ad6+1700*9+850*4,'A')
    setTimeout(sc4,ad6+1700*9+850*5,'G#')
    setTimeout(sc4,ad6+1700*9+850*6,'F#')

    setTimeout(sc4,ad6+1700*10+850*6,'D')
    setTimeout(sc4,ad6+1700*11+850*6,'E')
    setTimeout(sc4,ad6+1700*12+850*6,'A')
    setTimeout(sc4,ad6+1700*12+850*7,'G#')
    setTimeout(sc4,ad6+1700*12+850*8,'F#')

    setTimeout(sc4,ad6+1700*13+850*8,'D')
    setTimeout(sc4,ad6+1700*14+850*8,'E')
    setTimeout(sc4,ad6+1700*15+850*8,'A')
    setTimeout(sc4,ad6+1700*15+850*9,'G#')
    setTimeout(sc4,ad6+1700*15+850*10,'F#')

    setTimeout(sc4,ad6+1700*16+850*10,'D')
    setTimeout(sc4,ad6+1700*17+850*10,'E')
    setTimeout(sc4,ad6+1700*18+850*10,'A')
    setTimeout(sc4,ad6+1700*18+850*11,'G#')
    setTimeout(sc4,ad6+1700*18+850*12,'F#')

    setTimeout(sc4,-200+ad6+1700*19+850*12,'D')
    setTimeout(sc4,-200+ad6+1700*20+850*12,'E')
    setTimeout(sc4,-200+ad6+1700*21+850*12,'A')
    setTimeout(sc4,-200+ad6+1700*21+850*13,'G#')
    setTimeout(sc4,-200+ad6+1700*21+850*14,'F#')

    setTimeout(sc4,-200+ad6+1700*22+850*14,'D')
    setTimeout(sc4,-200+ad6+1700*23+850*14,'E')
    setTimeout(sc4,-200+ad6+1700*24+850*14,'A')
    setTimeout(sc4,-200+ad6+1700*24+850*15,'G#')
    setTimeout(sc4,-200+ad6+1700*24+850*16,'F#')

    setTimeout(sc4,-200+ad6+1700*25+850*16,'D')
    setTimeout(sc4,-200+ad6+1700*26+850*16,'E')
    setTimeout(sc4,-200+ad6+1700*27+850*16,'A')
    setTimeout(sc4,-200+ad6+1700*27+850*17,'G#')
    setTimeout(sc4,-200+ad6+1700*27+850*18,'F#')

    setTimeout(sc4,-200+ad6+1700*28+850*18,'D')
    setTimeout(sc4,-200+ad6+1700*29+850*18,'E')
    setTimeout(sc4,-200+ad6+1700*30+850*18,'A')
    setTimeout(sc4,-200+ad6+1700*30+850*19,'G#')
    setTimeout(sc4,-200+ad6+1700*30+850*20,'F#')

    setTimeout(sc4,-200+ad6+1700*31+850*20,'D')
    setTimeout(sc4,-200+ad6+1700*32+850*20,'E')
    setTimeout(sc4,-200+ad6+1700*33+850*20,'A')
    setTimeout(sc4,-200+ad6+1700*33+850*21,'G#')
    setTimeout(sc4,-200+ad6+1700*33+850*22,'F#')

    setTimeout(sc4,-300+ad6+1700*34+850*22,'D')
    setTimeout(sc4,-300+ad6+1700*35+850*22,'E')
    setTimeout(sc4,-300+ad6+1700*36+850*22,'A')
    setTimeout(sc4,-300+ad6+1700*36+850*23,'G#')


    
    setTimeout(sc4,ad7+0,'F#')
    setTimeout(sc4,ad7+1700,'D')
    setTimeout(sc4,ad7+1700*2,'E')
    setTimeout(sc4,ad7+1700*3,'A')
    setTimeout(sc4,ad7+1700*3+850,'G#')

    setTimeout(sc4,ad7+1700*3+850*2,'F#')
    setTimeout(sc4,ad7+1700*4+850*2,'D')
    setTimeout(sc4,ad7+1700*5+850*2,'E')
    setTimeout(sc4,ad7+1700*6+850*2,'A')
    setTimeout(sc4,ad7+1700*6+850*3,'G#')
    
    setTimeout(sc4,ad7+1700*6+850*4,'F#')
    setTimeout(sc4,ad7+1700*7+850*4,'D')
    setTimeout(sc4,ad7+1700*8+850*4,'E')
    setTimeout(sc4,ad7+1700*9+850*4,'A')
    setTimeout(sc4,ad7+1700*9+850*5,'G#')

    setTimeout(sc4,ad7+1700*9+850*6,'F#')
    setTimeout(sc4,ad7+1700*10+850*6,'D')
    setTimeout(sc4,ad7+1700*11+850*6,'E')
    setTimeout(sc4,ad7+1700*12+850*6,'A')
    setTimeout(sc4,ad7+1700*12+850*7,'G#')
    setTimeout(sc4,ad7+1700*12+850*8,'F#')


    
    setTimeout(sc4,ad8+0,'F#')
    setTimeout(sc4,ad8+1700,'D')
    setTimeout(sc4,ad8+1700*2,'E')
    setTimeout(sc4,ad8+1700*3,'A')
    setTimeout(sc4,ad8+1700*3+850,'G#')

    setTimeout(sc4,ad8+1700*3+850*2,'F#')
    setTimeout(sc4,ad8+1700*4+850*2,'D')
    setTimeout(sc4,ad8+1700*5+850*2,'E')
    setTimeout(sc4,ad8+1700*6+850*2,'A')
    setTimeout(sc4,ad8+1700*6+850*3,'G#')
    
    setTimeout(sc4,ad8+1700*6+850*4,'F#')
    setTimeout(sc4,ad8+1700*7+850*4,'D')
    setTimeout(sc4,ad8+1700*8+850*4,'E')
    setTimeout(sc4,ad8+1700*9+850*4,'A')
    setTimeout(sc4,ad8+1700*9+850*5,'G#')

    setTimeout(sc4,ad8+1700*9+850*6,'F#')
    setTimeout(sc4,ad8+1700*10+850*6,'D')
    setTimeout(sc4,ad8+1700*11+850*6,'E')
    setTimeout(sc4,ad8+1700*12+850*6,'A')
    setTimeout(sc4,ad8+1700*12+850*7,'G#')

    //setTimeout(sc4,-200+ad6+,'D')
    //setTimeout(sc4,-200+ad6+,'E')
    //setTimeout(sc4,-200+ad6+,'A')
    //setTimeout(sc4,-200+ad6+,'G#')
    //setTimeout(sc4,-200+ad6+,'F#')



    setTimeout(sc1,ad2+15500,'垂れ流したテレビの音')
    setTimeout(sc1,ad2+22000,'溜めてしまった')
    setTimeout(sc1,ad2+24580,'洗濯物は今日こそ')
    setTimeout(sc1,ad2+28870,'晴れてもあえて')
    setTimeout(sc1,ad2+31910,'外には出ないでいよう')
    setTimeout(sc1,ad2+35580,'映えないスナックと')
    setTimeout(sc1,ad2+38120,'アルコールで乾杯をしよう')
    setTimeout(sc1,ad2+42620,'2人酸いも甘いも')
    setTimeout(sc1,ad2+44080,'噛み合わないとしても')
    setTimeout(sc1,ad2+45750,'お互い寄り添うように')
    setTimeout(sc1,ad2+47540,'少しずらしてみようよ')
    setTimeout(sc1,ad2+49750,'君がくれた太陽')
    setTimeout(sc1,ad2+51500,'月で隠れないよう')
    setTimeout(sc1,ad2+53120,'輝き弛まないように歌うメロディ')
    setTimeout(sc1,ad2+56750,'戯れるslowly flowing day')
    setTimeout(sc1,ad2+60250,'愛してるも通り越して')
    setTimeout(sc1,ad2+60000+3540,'似た者同士こうして')
    setTimeout(sc1,ad2+60000+6830,'年老いるまで笑っていたいね')
    setTimeout(sc1,ad2+60000+10410,'君がいなきゃlonely, lonely day')
    setTimeout(sc1,ad2+60000+13700,'夢の中 fall asleep in bed')
    setTimeout(sc1,ad2+60000+17040,'起こすからmorning callで')
    setTimeout(sc1,ad2+60000+20500,"I'll protect you from nightmares, baby")
    setTimeout(sc3,ad2+60000+25500,'')
    setTimeout(sc1,ad2+60000+38290,'脱ぎっぱなしの足跡辿ると')
    setTimeout(sc1,ad2+60000+45000,'不意をついて後ろから抱きつくの')
    setTimeout(sc1,ad2+60000+51660,'つい、繰り返すと忘れてしまいそうになるよ')
    setTimeout(sc1,ad2+60000+58500,'振り返ると日々が当たり前じゃないこと')
    setTimeout(sc1,ad2+120000+5330,'2人対の細胞')
    setTimeout(sc1,ad2+120000+6910,'絡み合う特別を')
    setTimeout(sc1,ad2+120000+8660,'噛みしめていきたいと思ったまどろみ抱く正午')
    setTimeout(sc1,ad2+120000+12540,'吐息、漏れた体温')
    setTimeout(sc1,ad2+120000+14000,'微塵も逃さないよう')
    setTimeout(sc1,ad2+120000+16000,'頭の中刻む甘いメモリー')
    setTimeout(sc1,ad2+120000+19700,'戯れるslowly flowing day')
    setTimeout(sc1,ad2+120000+23040,'愛してるも通り越して')
    setTimeout(sc1,ad2+120000+26410,'違う者同士こうして')
    setTimeout(sc1,ad2+120000+29500,'年老いるまで笑っていたいね')
    setTimeout(sc1,ad2+120000+33120,'君がいなきゃlonely, lonely day')
    setTimeout(sc1,ad2+120000+36500,'夢の中 fall asleep in bed')
    setTimeout(sc1,ad2+120000+39950,'起こすからmorning callで')
    setTimeout(sc1,ad2+120000+43550,"I'll protect you from nightmares, baby")
    setTimeout(sc1,ad2+120000+47250,'重ねた手はね離さないでいて')
    setTimeout(sc1,ad2+120000+51500,'ごめん、これそばに居たいだけだね')
    setTimeout(sc1,ad2+120000+55950,'抱えた想いはお互い様でしょ')
    setTimeout(sc1,ad2+120000+59120,'ほら、おあいこでしょ')
    setTimeout(sc1,ad2+180000+750,'すれ違い、間違いもあるし')
    setTimeout(sc1,ad2+180000+5290,'筋書通り行かない打診、悲しみだって')
    setTimeout(sc1,ad2+180000+11000,'半分こにしよう')
    setTimeout(sc1,ad2+180000+12620,'別れじゃない希望')
    setTimeout(sc1,ad2+180000+14250,'独りよがりにならないように、いつも')
    setTimeout(sc1,ad2+180000+22080,'君がいなきゃ今もどこかで')
    setTimeout(sc1,ad2+180000+25500,'動けないままの僕で')
    setTimeout(sc1,ad2+180000+28870,'ありがとうを伝えたいのです')
    setTimeout(sc1,ad2+180000+32330,'これからは僕が支えてくって')
    setTimeout(sc1,ad2+180000+35660,'呆れてしまうくらいにね')
    setTimeout(sc1,ad2+180000+39040,'愛が増していくday by day')
    setTimeout(sc1,ad2+180000+42660,'面と向かうとどうしても')
    setTimeout(sc1,ad2+180000+46040,'素直になれないな、ごめんね')
    setTimeout(sc1,ad2+180000+50910,'戯れるslowly flowing day')
    setTimeout(sc1,ad2+180000+54330,'愛してるも通り越して')
    setTimeout(sc1,ad2+180000+57750,'似た者同士こうして')
    setTimeout(sc1,ad2+240000+1160,'年老いるまで笑っていたいね')
    setTimeout(sc1,ad2+240000+4500,'君がいなきゃlonely, lonely day')
    setTimeout(sc1,ad2+240000+7790,'夢の中 fall asleep in bed')
    setTimeout(sc1,ad2+240000+11290,'起こすからmorning callで')
    setTimeout(sc1,ad2+240000+14750,"I'll protect you from nightmares, baby")
    setTimeout(sc3,ad2+240000+19750,'end')
}

var sec = 0
var min = 0

function time(){
    setTimeout(time_,1000)
}

function time_(){
    time()
    sec++
    
    if(sec<60){
        if(sec<10){
            sc5('time').innerHTML = min+':0'+sec
        }else{
            sc5('time').innerHTML = min+':'+sec
        }
    }else{
        sec = 0
        min++
        sc5('time').innerHTML = min+':0'+sec
    }
}

function melody_(x){
    setTimeout(()=>{sc5('melody').animate({'opacity':[0,1]},{'fill':'forwards'})},x+2140)
    setTimeout(sc2,x+2140,'1-D5')
    setTimeout(sc2,x+2550,'2-D5')
    setTimeout(sc2,x+2910,'3-A4')
    setTimeout(sc2,x+3050,'4-E5')
    setTimeout(sc2,x+3310,'5-D5')
    setTimeout(sc2,x+3650,'6-D5')
    setTimeout(sc2,x+4100,'7-D5')
    setTimeout(sc2,x+4510,'8-A4')
    setTimeout(sc2,x+4660,'9-E5')
    setTimeout(sc2,x+4980,'0-D5')
    setTimeout(sc2,x+5350,'1-A4')
    setTimeout(sc2,x+5520,'2-E5')
    setTimeout(sc2,x+5970,'3-E5')
    setTimeout(sc2,x+6270,'4-A4')
    setTimeout(sc2,x+6410,'5-E5')
    setTimeout(sc2,x+6710,'6-D5')
    setTimeout(sc2,x+7090,'7-F#5')
    setTimeout(sc2,x+7460,'8-F#5')
    setTimeout(sc2,x+7920,'9-F#5')
    setTimeout(sc2,x+8080,'0-F#5')
    setTimeout(sc2,x+8230,'1-G5')
    setTimeout(sc2,x+8360,'2-F#5')
    setTimeout(sc2,x+8500,'3-E5')
    setTimeout(sc2,x+8810,'4-D5')
    setTimeout(sc2,x+9310,'5-D5')
    setTimeout(sc2,x+9610,'6-D5')
    setTimeout(sc2,x+9750,'7-A4')
    setTimeout(sc2,x+10050,'8-E5')
    setTimeout(sc2,x+10430,'9-D5')
    setTimeout(sc2,x+10840,'0-D5')
    setTimeout(sc2,x+11310,'1-D5')
    setTimeout(sc2,x+11460,'2-A4')
    setTimeout(sc2,x+11770,'3-E5')
    setTimeout(sc2,x+12160,'4-D5')
    setTimeout(sc2,x+12330,'5-A4')
    setTimeout(sc2,x+12720,'6-D5')
    setTimeout(sc2,x+13020,'7-D5')
    setTimeout(sc2,x+13180,'8-A4')
    setTimeout(sc2,x+13470,'9-E5')
    setTimeout(sc2,x+13850,'0-D5')
    setTimeout(sc2,x+14200,'1-E5')
    setTimeout(sc2,x+14650,'2-E5')
    setTimeout(sc2,x+14840,'3-D5')
    setTimeout(sc2,x+14990,'4-F#5')
    setTimeout(sc2,x+15140,'5-G5')
    setTimeout(sc2,x+15270,'6-F#5')
    setTimeout(sc2,x+15570,'7-E5')
    setTimeout(()=>{sc5('melody').animate({'opacity':[1,0]},{'duration':800,fill:'forwards'})},x+16570)
}

function sc1(x){
    sc5('txt').innerHTML = x
    sc5('txt').animate({'opacity':[0,1]},{'duration':200,'fill':'forwards'})
}

function sc2(x){
    sc5('melody').innerHTML = x
    sc5('dot').innerHTML = '・'
    sc5('dot').animate({'opacity':[1,0]},{'duration':200,'fill':'forwards'})
}

function sc3(x){
    if(x=='end'){cnt = 0}
    sc5('txt').animate({'opacity':[1,0]},{'duration':200,'fill':'forwards'})
}

function sc4(x){
    sc5('chord').innerHTML = x
    sc5('dot2').innerHTML = '・'
    sc5('dot2').animate({'opacity':[1,0]},{'duration':750,'fill':'forwards'})
}

function sc5(x){
    return document.getElementById(x)
}