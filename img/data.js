var data = [];
var dataStr = '1、超能陆战队<br>\
<br>\
·我长成这样是为了让人看起来更想拥抱。<br>\
·如果你生气了，就欺负我好了，反正我那么喜欢你。<br>\
·相信我，就算有一天，我们不小心走散，我也会回来找你的。<br>\
·我们有时并不想成为英雄，只是生活有时候超出我们的想象。<br>\
<br>\
<br>\
2、DNA<br>\
<br>\
·动身旅行之前，<br>\
·非要等到前面8公里长的路上！<br>\
·所有红绿灯全部变成绿色吗。<br>\
<br>\
<br>\
3、翻开看<br>\
<br>\
·嘿，别紧张<br>\
·放松点。<br>\
·这只是糟糕的一天，<br>\
·又不是要糟糕一辈子。<br>\
<br>\
<br>\
4、always<br>\
<br>\
·道路千万条，安全第一条。<br>\
·道路千万条，安全第一条。<br>\
·道路千万条，安全第一条。<br>\
·生活就像一盒巧克力。<br>\
·生活就像一盒巧克力。。<br>\
<br>\
<br>\
5、看反面<br>\
<br>\
·之前说过的。<br>\
·重新做个好看的。<br>\
·不知道这个你感觉怎么样。<br>\
·其它的卡片背后是。<br>\
·一些电影台词！<br>\
·跟网络文案。<br>\
<br>\
<br>\
6、Java<br>\
<br>\
·我们听过无数的道理，却仍旧过不好这一生。<br>\
·直到那一刻，我才发现。<br>\
·每一天的生活都值得期待跟珍惜。<br>\
·我才迈出了新的一步。<br>\
·以及，现在我已不再后悔。<br>\
<br>\
<br>\
7、点开<br>\
<br>\
·我们一日日所度过的所谓的日常。<br>\
·实际上可能是接连不断的奇迹<br>\
·我们一日日所度过的所谓的日常。<br>\
·实际上可能是接连不断的奇迹<br>\
·日常跟奇迹。<br>\
<br>\
<br>\
8、周老师<br>\
<br>\
·周老师。<br>\
·双休日愉快呀<br>\
·祝你上网不卡。<br>\
·打游戏队友不傻。<br>\
·life is happy。<br>\
<br>\
<br>\
9、好好读书<br>\
<br>\
·my will made real。<br>\
·以前我没得选择<br>\
·现在我想做个好人。<br>\
·记忆总是喜欢添油加醋，它会朝着你期待的方向修改。<br>\
·当你欣喜若狂的时候，真相，会将你惊醒。<br>\
<br>\
<br>\
10、we<br>\
<br>\
·每个女孩，心中都有一只水晶鞋。<br>\
·Kindness is free. Love is free. 善良和爱都是免费的。<br>\
·Where there is kindness, there is goodness.And where there is goodness, there is magic. <br>\
·有善良之处即有美德，有美德之处即有魔力。<br>\
<br>\
<br>\
11、are<br>\
<br>\
·总有一天，我要<br>\
·要让这里座无虚席。<br>\
·总有一天，我要<br>\
·要让这里座无虚席。<br>\
<br>\
<br>\
12、哆啦A梦：伴我同行<br>\
<br>\
·我一直在，守着你的天真和笑容。<br>\
·你总是这样轻言放弃的话，无论多久都只会原地踏步。<br>\
·一开始做不到的事就别吹牛啊！总是依靠我依靠我怎么行啊！偶尔也自己努力一下试试啊！<br>\
·每个人都有自己的任务，任务完成了，就离开吧。<br>\
·大雄：“我不想长高” 多啦A梦：“为什么” 大雄：“因为我长高了哆啦A梦就不能牵到我的手了”<br>\
<br>\
<br>\
13、猜一猜<br>\
<br>\
·小朋友要有小朋友的样子<br>\
·好好读书。<br>\
·她不是漂不漂亮的问题。<br>\
·她真的是那种,很少见的那种.......。<br>\
<br>\
<br>\
14、maybe<br>\
<br>\
·本来想设置一些其它特效的。<br>\
·但是感觉有点麻烦<br>\
·以后吧。<br>\
·最近在规划一些事情。<br>\
·工作跟生活的。<br>\
·以后估计还是会找找你配音，到时候还请帮我一波。<br>\
<br>\
<br>\
15、over<br>\
<br>\
·最后一个了。<br>\
·生活努力。<br>\
·工作努力。<br>\
·周同学加油。<br>\
·这个网页加载比较慢，正常情况。<br>\
·因为服务器我用的免费的，付费的太贵了T T。<br>\
'
;
var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    console.log(c)
    data.push({
        img:c[0].replace('、',' ')+'.jpg',
        caption:c[0].split('、')[1],
        desc:c[1]
    });
    // console.log(data);
}
// <br>\
// <br>\
// 16、神偷奶爸<br>\
// <br>\
// ·你装过头了 其实内在是一颗破碎的心。<br>\
// ·蹩脚的谎话 我甚至都不喜欢她<br>\
// ·Are you reallyabcgonna save the world? 你真的要拯救世界吗? Yes. Yes, I am. 是的是的 没错<br>\
// ·You just officially hadabcthe worst date ever. 你圆满完成了史上最糟糕约会<br>\
// <br>\
// <br>\
// 17、驯龙高手<br>\
// <br>\
// ·我知道这希望渺茫，但是你不能总是保护他。<br>\
// ·哦，上帝不喜欢我。有些人会弄丢刀子，杯子。不，不应该是我啊！我弄丢了一条龙！<br>\
// ·我父亲让我用头去撞石头，我照做了。我觉得这很疯狂，但是我没问他为什么。<br>\
// ·不，你想错了，他在乎的不是你的外表，他看重的是你的灵魂。<br>\
// <br>\
// <br>\
// 18、奔跑吧！兄弟<br>\
// <br>\
// ·邓超：We are 伐木累<br>\
// ·王宝强：What are you弄啥哩？<br>\
// ·Angelababy：Boom ShakaLaka<br>\
// ·王宝强：郑恺你怎么又死在女人手里了？<br>\
// ·陈赫：你是猪吗？<br>\
// ·李晨：我们来打一架吧！<br>\
// <br>\
// <br>\
// 19、老男孩猛龙过江<br>\
// <br>\
// ·成长似乎就是不断发现，那些让自己魂牵梦绕的东西，原来都是一场场幻想，然后一次次从梦里醒过来，而现实从来连一点商量的余地都没有。<br>\
// ·如果你的梦想还没有实现,说明你的渴望还不够强烈!<br>\
// ·丢掉什么不重要，关键是找回来什么。<br>\
// ·生活就像镜子 你笑它就笑 你哭它就哭。<br>\
// ·分手还能做朋友,你问我爱你有多深。<br>\
// <br>\
// <br>\
// 20、当幸福来敲门<br>\
// <br>\
// ·当人们做不到一些事情的时候，他们就会对你说你也同样不能。<br>\
// ·如果你有梦想的话，就要去捍卫它。<br>\
// ·当你最认为困难的时候，其实就是你最接近成功的时候。<br>\
// ·以后连朋友都不做了？ ---没法儿做，太相爱的人怎么做朋友<br>\
// ·机会总是留给有准备的人，但那往往是努力的人剩下来的。<br>\