Z=Function;
// initialize an empty multidimentional array of "height" tall into k"
//function q(){i=[];for(h=0;h<j;h++){i[h]=[]}}
q=Z("i=[];for(h=0;h<j;h++){i[h]=[]}"); 

r=Z("for(b=0;b<j;b++){for(e=0;e<k;e++){a.fillStyle=g[b][e]?'red':'#eee',a.font=f+8+'pt serif',a.fillRect(e*f+1,b*f+1,f-1,f-1)}}");
//function r() {
//    for(b = 0;b < j;b++) {
//        for(e = 0;e < k;e++) {
//            a.fillStyle = g[b][e] ? "red" : "#eee", a.font = f + 8 + "pt serif", a.fillRect(e * f + 1, b * f + 1, f - 1, f - 1)
//        }
//    }
//}

//var i, k, j, f, l, m, 
s = innerWidth;
m = innerHeight;
//var t, p, g, u, h, b, e, o, n;
l = s - 100;
m -= 200;
f = ~~(s / 20);
k = ~~(l / f) * f / f;
j = ~~(m / f) * f / f;
t = 0;
c.width = l;
c.height = m;

l=Z('u=setInterval("q();for(b=0;b<j;b++)for(e=0;e<k;e++){n=g[b][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(b+h))%j][(k+(e+o))%k]&&n++;g[b][e]?1<n&&4>n&&(i[b][e]=1):3==n&&(i[b][e]=1)}g=i;t++;r()"),p=0');
/*
l=function(){
    u=setInterval("q();for(b=0;b<j;b++)for(e=0;e<k;e++){n=g[b][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(b+h))%j][(k+(e+o))%k]&&n++;g[b][e]?1<n&&4>n&&(i[b][e]=1):3==n&&(i[b][e]=1)}g=i;t++;r()"),p=0
};*/


//c.onmousedown=Z("console.log('mousedown');p=1;clearInterval(u)");
c.onmousedown = function(e) {D=1;B=e.offsetY;C=e.offsetX;clearInterval(u)};
c.onmousemove = c.onmouseup = function(e) {
    G=e.offsetY;
    H=e.offsetX;
    E = 2<<B-G;
    F = 2<<C-H;

    if (D && (E > 9 || F > 9)) {
        p = 1;
    }
    b = ~~(G / f);
    d = ~~(H / f);
    "mousemove" == e.type ? p && (g[b][d] = 1) : (p || (g[b][d] = !g[b][d]), p = D = 0, l());
    r()
/*
if (e.type == "mousemove") {
    if (p) {
        g[b][d]=1;
    }
}
else {
    if (!p) {
        g[b][d] = !g[b][d];
    }
    D=0;p=0;
    l();
}*/
};
q();
g = i;
l()