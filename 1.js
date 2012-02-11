Z=Function;

// initialize an empty multidimentional array of "height" tall into k"
q=Z("i=[];for(h=0;h<j;h++){i[h]=[]}"); 


// "Draw"
r=Z("for(b=0;b<j;b++){for(e=0;e<k;e++){a.fillStyle=g[b][e]?'red':'#eee',a.fillRect(e*f+1,b*f+1,f-1,f-1)}}");

s = innerWidth;
m = innerHeight;
l = s - 100;
m -= 200;
f = ~~(m / 20);
k = ~~(l / f) * f / f;
j = ~~(m / f) * f / f;
t = 0;
c.width = l;
c.height = m;

// Set timer for update();
l=Z('u=setInterval("q();for(b=0;b<j;b++)for(e=0;e<k;e++){n=g[b][e]?-1:0;for(h=-1;2>h;h++)for(o=-1;2>o;o++)g[(j+(b+h))%j][(k+(e+o))%k]&&n++;g[b][e]?1<n&&4>n&&(i[b][e]=1):3==n&&(i[b][e]=1)}g=i;t++;r()", 1000),p=0');


c.onmousedown=Z("D=1;clearInterval(u)");

c.onmousemove = c.onmouseup = function(e) {
    // calculate the square they clicked on
    b = ~~(e.offsetY / f);
    d = ~~(e.offsetX / f);

    if (e.type == "mousemove") {
        console.log(D);
        if (D) {
            p=1;
            D=0;
        }
        else if (p == 1) {
            g[b][d] = 1;
        }
    }
    else {
        if (!p) {
            g[b][d] = !g[b][d];
        }
        p=0;D=0;
        l();
    }

    r()
};
q();
g = i;
l()
